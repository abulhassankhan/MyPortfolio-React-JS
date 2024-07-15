
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import '../index.css'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='sticky top-0 header shadow-md shadow-gray-800 z-10 p-4 pl-8 pr-8 flex items-center justify-between bg-[#191970] text-white max-sm:pr-3 max-sm:pl-3'>
            <div className='logo-section'>
                <img className='h-[50px] max-xsm:h-[40px]' src='/images/mylogo.png' alt='No preview' />
            </div>
            <div className='navigation-section flex space-x-10 text-[15px] font-ubunto max-xsm:space-x-4'>
                <ul id='menu' className={`flex items-center z-20 space-x-8 max-md:absolute max-md:bg-[#2c2c80] max-md:top-0 max-md:left-0 max-md:w-3/4 max-md:p-10 max-md:flex-col max-md:space-x-0 max-md:min-h-screen max-md:shadow-md max-md:shadow-gray-800 max-md:text-xs ${toggleMenu ? 'max-md:flex' : 'max-md:hidden'}`}>
                    <div onClick={() => setToggleMenu(false)} className='hidden absolute right-6 mb-8 bg-[#191970] rounded-full p-3 text-lg max-md:block'><RxCross2 /></div>
                    <a href='#home' onClick={() => setToggleMenu(false)} className='max-md:block max-md:w-1/2 max-md:text-center max-md:mt-10'><li className='cursor-pointer max-md:pt-4 max-md:pb-4 max-md:border-b max-md:border-gray-50'>Home</li></a>
                    <a href='#about' onClick={() => setToggleMenu(false)} className='max-md:block max-md:w-1/2 max-md:text-center'><li className='cursor-pointer  max-md:pt-4 max-md:pb-4 max-md:border-b max-md:border-gray-50 max-md:w-full max-md:block'>About</li></a>
                    <a href='#services' onClick={() => setToggleMenu(false)} className='max-md:block max-md:w-1/2 max-md:text-center'><li className='cursor-pointer  max-md:pt-4 max-md:pb-4 max-md:border-b max-md:border-gray-50 max-md:w-full max-md:block'>Services</li></a>
                    <a href='#projects' onClick={() => setToggleMenu(false)} className='max-md:block max-md:w-1/2 max-md:text-center'><li className='cursor-pointer  max-md:pt-4 max-md:pb-4 max-md:border-b max-md:border-gray-50 max-md:w-full max-md:block'>Projects</li></a>
                    <a href='#contact' onClick={() => setToggleMenu(false)} className='max-md:block max-md:w-1/2 max-md:text-center'><li className='cursor-pointer  max-md:pt-4 max-md:pb-4 max-md:border-b max-md:border-gray-50 max-md:w-full max-md:block'>Contact</li></a>
                </ul>

                <a href="/data/AbulHassan_ComputerEngineer_Resume.pdf" target='_blank' className='btn border relative border-[#21b1f4] p-2 pl-4 pr-4 z-10 rounded-lg overflow-hidden max-xsm:pl-2 max-xsm:pr-2 max-xsm:pt-1 max-xsm:pb-1'>
                    <span className='relative z-10 max-xsm:text-xs'>Download Resume</span>
                    <span className='sd absolute top-0 left-0 w-0 h-full bg-[#21b1f4] transition-width duration-700 hover:w-full z-0'></span>
                </a>
                <div onClick={() => {setToggleMenu(true)}} className='hidden w-8 rounded-lg items-center justify-center flex-col max-md:flex'>
                    <div className='bg-[#21b1f4] h-1 mt-[2px] mb-[2px] w-full rounded-lg'></div>
                    <div className='bg-[#21b1f4] h-1 mt-[2px] mb-[2px] w-full rounded-lg'></div>
                    <div className='bg-[#21b1f4] h-1 mt-[2px] mb-[2px] w-full rounded-lg'></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
