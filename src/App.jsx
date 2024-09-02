/* eslint-disable no-unused-vars */
// App.jsx
import React from 'react'; // Ensure this line is present if required
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Watch from './components/Watch';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar /> {/* Sidebar should be on the left */}
        <main className="flex-1 w-80"> {/* Main content should take remaining space */}
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path='/watch' element={<Watch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
