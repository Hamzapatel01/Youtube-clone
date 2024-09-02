/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/Appslice';
import React from 'react';
const buttonList = [
  "All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", 
  "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", 
  "New to you", "Computer Programming", "Netlify", "Coding"
];

const Category = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };

  return (
    <div className='button-list flex w-full overflow-x-scroll no-scrollbar my-1 pt-16'>
      {
        buttonList.map((buttonName, index) => (
          <button
            key={index}
            onClick={() => videoByTag(buttonName)}
            className={`${
              active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"
            } w-fit font-medium mx-1 px-3 py-2 rounded-lg`}
            style={{ cursor: 'pointer' }} // Inline style to force cursor change
          >
            <span className="whitespace-nowrap">{buttonName}</span>
          </button>
        ))
      }
    </div>
  );
};

export default Category;
