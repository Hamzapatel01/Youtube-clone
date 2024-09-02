/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import API_KEY from '../constant/Api-youtube';
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import Livechat from './Livechat';
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/Chatslice";

const Watch = () => {
    const [input, setInput] = useState("");
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = () => {
        dispatch(setMessage({ name: "Owner", message: input }));
        setInput("");
    }

    useEffect(() => {
        getSingleVideo();
    }, [videoId]);

    return (
        <div className='flex flex-col lg:flex-row ml-4 mt-2 w-full'>
            {/* Video Section */}
            <div className='flex flex-col lg:w-[70%]'>
                <div className='relative'>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className='w-full h-[500px]'>
                    </iframe>
                    <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center w-full lg:w-[35%]'>
                        <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                        <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                        <button className='px-4 py-1 font-medium bg-black text-white rounded-full ml-2'>Subscribe</button>
                    </div>
                    <div className='flex items-center w-full lg:w-[60%] justify-around mt-2'>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <AiOutlineLike size="20px" className='mr-2' />
                            <span>Like</span>
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <AiOutlineDislike size="20px" className='mr-2' />
                            <span>Dislike</span>
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <PiShareFatLight size="20px" className='mr-2' />
                            <span>Share</span>
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <GoDownload size="20px" className='mr-2' />
                            <span>Download</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Section */}
            <div className='w-full lg:w-[30%] border border-gray-300 rounded-lg h-fit p-4 mt-4 lg:mt-0 lg:ml-4'>
                <div className='flex justify-between items-center'>
                    <h1>Top Chat</h1>
                    <BsThreeDotsVertical />
                </div>
                <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                    <Livechat />
                </div>
                <div className='flex items-center justify-between border-t p-2'>
                    <div className='flex items-center w-full'>
                        <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                        <input value={input} onChange={(e) => setInput(e.target.value)} className='border-b border-gray-300 outline-none ml-2 flex-1' type="text" placeholder='Send message...' />
                        <div className='bg-gray-200 cursor-pointer p-2 rounded-full ml-2'>
                            <LuSendHorizonal onClick={sendMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
