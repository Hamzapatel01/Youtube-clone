/* eslint-disable no-unused-vars */
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import React from "react";
import { MdOutlineSubscriptions, MdOutlineHistory, MdOutlineVideoLibrary, MdOutlineWatchLater, MdOutlineThumbUp, MdOutlinePersonalVideo } from "react-icons/md";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Sidebar items
const sidebarItems = [
  { icon: <CiHome size="24px" />, title: "Home", path: "/" }, // Added path property
  { icon: <SiYoutubeshorts size="24px" />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size="24px" />, title: "Subscriptions" }
];

const userItems = [
  { icon: <MdOutlinePersonalVideo size="24px" />, title: "Your channel" },
  { icon: <MdOutlineHistory size="24px" />, title: "History" },
  { icon: <MdOutlineVideoLibrary size="24px" />, title: "Playlists" },
  { icon: <MdOutlinePersonalVideo size="24px" />, title: "Your videos" },
  { icon: <MdOutlineWatchLater size="24px" />, title: "Watch later" },
  { icon: <MdOutlineThumbUp size="24px" />, title: "Liked videos" }
];

const subscriptions = [
  { title: "Kuruluş Osman", avatar: "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" },
  { title: "CodeHelp - by Babbar", avatar: "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" },
  { title: "FoltinPlays", avatar: "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" }
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e0e0e0',
      marginTop: '4.25rem',
      padding: '1.25rem',
    }}>
      {/* Main Navigation */}
      <div>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 my-3 ml-2 cursor-pointer rounded-lg hover:bg-gray-200 ${open ? "justify-start" : "justify-center"}`}
            onClick={() => item.path && navigate(item.path)} // Navigate to path if exists
          >
            {item.icon}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-3 border-gray-300" />

      {/* User Section */}
      <div>
        {userItems.map((item, index) => (
          <div key={index} className={`flex items-center p-2 my-3 ml-2 rounded-lg hover:bg-gray-200 ${open ? "justify-start" : "justify-center"}`}>
            {item.icon}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-3 border-gray-300" />

      {/* Subscriptions Section */}
      <div>
        <h2 className={`ml-2 ${open ? "" : "hidden"}`}>Subscriptions</h2>
        {subscriptions.map((sub, index) => (
          <div key={index} className={`flex items-center p-2 my-3 ml-2 rounded-lg hover:bg-gray-200 ${open ? "justify-start" : "justify-center"}`}>
            <Avatar src={sub.avatar} size={40} round={true} />
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{sub.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
