/* eslint-disable no-unused-vars */
import Allvideos from './Allvideos';
import Category from './Category';
import React from 'react';
const Home = () => {
  return (
    <div className='flex flex-col ml-5 mr-5 flex-1 '> 
      {/* ButtonList component */}
      <Category/>
      
      {/* VideoContainer component */}
      <Allvideos />
    </div>
  );
}

export default Home;
