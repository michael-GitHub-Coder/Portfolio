import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg">
        <nav className=" z-50 flex md:justify-between items-center md:mx-10 py-5">

            <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden ml-5">
                {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
            <div className="hidden md:flex gap-4">
                <h1 className="cursor-pointer hover:text-gray-400">Home</h1>
            </div>
            <h1 className="text-xl font-bold ml-5">Thulare Michael</h1>
            <div className="hidden md:flex gap-4">
                <h1 className="cursor-pointer hover:text-gray-400">My Work</h1>
            </div>

        {/* Mobile Menu */}

        {isOpen && (
            <div className="absolute inset-0 w-full h-screen bg-gray-100 z-50 flex flex-col md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden text-black absolute top-5 left-5">
                    {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
                <h1 className="cursor-pointer hover:text-gray-400 text-black text-2xl mb-4 px-5 pt-5 absolute top-5 right-10">Home</h1>
                <h1 className="cursor-pointer hover:text-gray-400 text-black text-2xl mb-4 px-5 absolute top-20 right-10">My Work</h1>
            </div>
        )}
        </nav>
    </div>
  );
};

export default Navbar;
