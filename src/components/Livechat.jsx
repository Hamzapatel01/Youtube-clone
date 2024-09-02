/* eslint-disable no-unused-vars */
import  { useEffect } from 'react'
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { setMessage } from '../utils/Chatslice';
import { generateRandomName, generateRandomMessage } from '../utils/Livehelper';
import Message from './Message';
import React from 'react';
const Livechat = () => {

    const message = useSelector((store) => store.chat.message);
    const dispatch = useDispatch();
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
        },1000)

        return(()=>{
            clearInterval(timer)
        })
        
    },[])

    return (
        <div className='px-4 py-1'>
            <div>
                {
                    message.map((item,idx) => {
                        return (
                            <Message key={idx} item={item}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Livechat