import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { GrCloudSoftware } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { PiDatabaseFill } from "react-icons/pi";

function Services() {
    return (
        <>
            <div id='services' className='min-h-screen bg-[#191970] p-10 pt-[90px] pb-[90px] max-lg:p-10 max-lg:min-h-fit max-md:pl-6 max-md:pr-6 max-md:min-h-screen max-lg:pt-[90px] max-lg:pb-[90px] max-md:pt-[90px] max-md:pb-[90px] max-xsm:pt-[80px] max-xsm:pb-[80px]'>
                <h3 className='tracking-[5px] font-ubunto text-2xl font-semibold mb-5 text-[#21b1f4] text-center'>Services</h3>
                <div className='flex items-center flex-wrap justify-center max-md:flex-col'>
                    <div className='w-[45%] h-[220px]  m-5 bg-[#2c2c80] p-8 flex items-center justify-center max-lg:m-2 max-lg:flex-col max-lg:p-4 max-lg:justify-start max-md:w-full max-md:m-0 max-md:mt-2 max-md:mb-2 max-md:h-auto'>
                        <div className='text-7xl text-[#21b1f4] max-lg:text-5xl' >
                            <CgWebsite />
                        </div>
                        <div className='pl-5 max-lg:pl-0'>
                            <p className='text-2xl font-bold text-white leading-4 mb-5 max-lg:text-center max-lg:text-xl max-lg:mt-2 max-lg:mb-2'>Web Development</p>
                            <p className='text-[#b0aac0] text-justify font-ubunto max-lg:text-[15px]'>"Crafting responsive and dynamic websites tailored to your needs, ensuring seamless user experiences across all devices."</p>
                        </div>
                    </div>
                    <div className='w-[45%] h-[220px]  m-5 bg-[#2c2c80] p-8 flex items-center justify-center max-lg:m-2 max-lg:flex-col max-lg:p-4 max-lg:justify-start max-md:w-full max-md:m-0 max-md:mt-2 max-md:mb-2 max-md:h-auto'>
                        <div className='text-7xl text-[#21b1f4] max-lg:text-5xl' >
                            <GrCloudSoftware />
                        </div>
                        <div className='pl-5 max-lg:pl-0'>
                            <p className='text-2xl font-bold text-white leading-4 mb-5 max-lg:text-center max-lg:text-xl max-lg:mt-2 max-lg:mb-2'>Software Development</p>
                            <p className='text-[#b0aac0] text-justify font-ubunto max-lg:text-[15px]'>"Building robust, scalable software solutions that streamline operations and empower your business to innovate and grow."</p>
                        </div>
                    </div>
                    <div className='w-[45%] h-[220px]  m-5 bg-[#2c2c80] p-8 flex items-center justify-center max-lg:m-2 max-lg:flex-col max-lg:p-4 max-lg:justify-start max-md:w-full max-md:m-0 max-md:mt-2 max-md:mb-2 max-md:h-auto'>
                        <div className='text-7xl text-[#21b1f4] max-lg:text-5xl' >
                            <FaComputer />
                        </div>
                        <div className='pl-5 max-lg:pl-0'>
                            <p className='text-2xl font-bold text-white leading-4 mb-5 max-lg:text-center max-lg:text-xl max-lg:mt-2 max-lg:mb-2'>System Development</p>
                            <p className='text-[#b0aac0] text-justify font-ubunto max-lg:text-[15px]'>"Designing and implementing efficient systems that integrate seamlessly with your existing infrastructure, optimizing workflow and productivity."</p>
                        </div>
                    </div>
                    <div className='w-[45%] h-[220px]  m-5 bg-[#2c2c80] p-8 flex items-center justify-center max-lg:m-2 max-lg:flex-col max-lg:p-4 max-lg:justify-start max-md:w-full max-md:m-0 max-md:mt-2 max-md:mb-2 max-md:h-auto'>
                        <div className='text-7xl text-[#21b1f4] max-lg:text-5xl' >
                            <PiDatabaseFill />
                        </div>
                        <div className='pl-5 max-lg:pl-0'>
                            <p className='text-2xl font-bold text-white leading-4 mb-5 max-lg:text-center max-lg:text-xl max-lg:mt-2 max-lg:mb-2'>Database Development</p>
                            <p className='text-[#b0aac0] text-justify font-ubunto max-lg:text-[15px]'>"Develop secure and scalable databases that organize and manage your data effectively, supporting informed decision-making and business agility."</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Services
