import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [showCurrentAffairsMenu, setShowCurrentAffairsMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCoursesMenu = () => {
    setShowCoursesMenu(!showCoursesMenu);
  };

  const toggleCurrentAffairsMenu = () => {
    setShowCurrentAffairsMenu(!showCurrentAffairsMenu);
  };

  const toggleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  return (
    <nav className='bg-teal-800 py-4 sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className="flex-shrink-0">
          <img className='h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6P3OvEYgwdynpFXAtrl8ihgv91JVc2Pfjp8L4WFv_t9HwbqUMvTAjjkNR46sxtbAUP8k&usqp=CAU" alt="KGS Logo" />
        </Link>
        <div className='hidden md:flex space-x-4'>
          <div className="relative">
            <Link to="/courses" onMouseEnter={toggleCoursesMenu} className='cursor-pointer text-white hover:text-gray-300'>Courses</Link>
            {showCoursesMenu && (
              <div onMouseLeave={toggleCoursesMenu} className="absolute bg-white mt-2 py-2 w-48 shadow-lg rounded-lg">
                <Link to="/course1" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Online Courses</Link>
                <Link to="/course2" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Offline Courses</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <Link to="/currentaffairs" onMouseEnter={toggleCurrentAffairsMenu} className='cursor-pointer text-white hover:text-gray-300'>Current Affairs</Link>
            {showCurrentAffairsMenu && (
              <div onMouseLeave={toggleCurrentAffairsMenu} className="absolute bg-white mt-2 py-2 w-48 shadow-lg rounded-lg">
                <Link to="/currentaffairs1" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Daily Current Affairs</Link>
                <Link to="/currentaffairs2" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Daily News Highlights</Link>
                <Link to="/currentaffairs3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>BPSC Special</Link>
                <Link to="/currentaffairs3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>UPSC Special</Link>
                <Link to="/currentaffairs3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>MP-PSC Special</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <Link to="/download" onMouseEnter={toggleDownloadMenu} className='cursor-pointer text-white hover:text-gray-300'>Download</Link>
            {showDownloadMenu && (
              <div onMouseLeave={toggleDownloadMenu} className="absolute bg-white mt-2 py-2 w-48 shadow-lg rounded-lg">
                <Link to="/download1" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>NCERT Books</Link>
                <Link to="/download2" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Previous Year Questions</Link>
                <Link to="/download3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Current Affairs MCQ Pdf</Link>
                <Link to="/download3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Mind Maps</Link>
                <Link to="/download3" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Others</Link>
              </div>
            )}
          </div>
          <Link to="/login" className='bg-white text-teal-800 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-teal-800'>Login</Link>
          <Link to="/register" className='bg-white text-teal-800 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-teal-800'>Register</Link>
        </div>
        <button className='md:hidden text-white' onClick={toggleMenu}>
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <Link to="/courses" className='block px-4 py-2'>Courses</Link>
          <Link to="/currentaffairs" className='block px-4 py-2'>Current Affairs</Link>
          <Link to="/download" className='block px-4 py-2'>Download</Link>
          <Link to="/login" className='block px-4 py-2'>Login</Link>
          <Link to="/register" className='block px-4 py-2'>Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;