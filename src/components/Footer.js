import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa6';



function Footer() {
    return (
        <>
            <div className='flex justify-between items-center bg-[#2c2c80] p-10 pt-[90px] pb-[90px] max-lg:p-10 max-md:pl-6 max-md:pr-6 max-lg:pt-[90px] max-lg:pb-[90px] max-md:pt-[90px] max-md:pb-[90px] max-md:flex-col max-md:items-start max-xsm:pt-[80px] max-xsm:pb-[80px]'>
                <div>
                    <h2 className='text-white font-bold text-2xl mb-5'>FOLLOW ME</h2>
                    <div className='flex space-x-8 text-4xl text-[#21b1f4]'>
                        <a href='https://github.com/abulhassankhan'><FaGithub /></a>
                        <a href='https://linkedin.com/in/abul-hassan-khan-ghauri'><FaLinkedin /></a>
                        <a href='https://facebook.com'><FaFacebook/></a>
                    </div>
                </div>
                <div className='max-md:mt-[80px] max-md:m-auto'>
                    <h2 className='text-[#b0aac0] text-lg font-semibold max-md:text-lg max-xsm:text-sm'>Copyright © 2024 | All Rights Reserved</h2> 
                    <img className='h-14 m-auto mt-2 max-md:h-10 max-md:mt-1 max-xsm:h-8' src='/images/mylogo.png' alt='Abul Hassan'/>
                </div>
            </div>
        </>
    )
}

export default Footer
