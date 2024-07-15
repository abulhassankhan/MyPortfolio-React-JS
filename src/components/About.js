import React from 'react'

function About() {
    return (
        <>
            <div id='about' className='min-h-screen bg-[#2c2c80] p-2 pt-[82px] pb-[82px] flex max-lg:min-h-fit max-md:min-h-screen max-md:flex-col max-md:p-6 max-md:pt-[82px] max-md:pb-[82px] max-xsm:pt-[72px] max-xsm:pb-[72px]'>
                <div className='flex items-center max-lg:items-start max-md:flex-col'>
                    <div className='p-8 pt-10 max-lg:mt-0 max-md:m-auto max-md:p-0 max-md:pt-10 '>
                        <div className='bg-[#DFE9F3] w-[290px] p-4 max-lg:w-[250px]'>
                            <img className='' src='/images/MyImage.jpg' alt='No Preview' />
                        </div>
                    </div>
                    <div className='p-8 pt-10 font-ubunto max-lg:pl-0 max-md:pr-0 max-md:pt-5'>
                        <h3 className='tracking-[5px] text-2xl font-semibold mb-5 text-[#21b1f4] max-lg:mb-2 max-md:text-center max-md:mb-5'>About Me</h3>
                        <div className='text-[#b0aac0] text-lg border-[#b0aac0] mr-8 border-b-2 pb-5 mb-5 max-lg:mr-0 max-lg:text-base max-md:max-w-fit max-md:m-auto max-md:border-none'>
                            <p className='max-md:max-w-fit'><span className='w-[100px] inline-block max-lg:leading-tight'>Name</span><span>Abul Hassan Khan Ghauri</span></p>
                            <p className='max-md:max-w-fit'><span className='w-[100px] inline-block max-lg:leading-tight'>Age</span><span>22 Years</span></p>
                            <p className='max-md:max-w-fit'><span className='w-[100px] inline-block max-lg:leading-tight'>Email</span><span>ahassankg@gmail.com</span></p>
                        </div>
                        <p className='text-white text-lg text-justify pr-8 leading-8 max-lg:pr-0 max-lg:text-base max-lg:font-thin max-md:pt-5 max-md:border-t-2 max-md:border-[#b0aac0]'>I graduated with a Bachelor's degree in Computer Engineering from Bahria University in 2024, where I gained a diverse set of skills crucial for today's technological landscape.I'm proficient in programming languages like C++, JavaScript, and I'm experienced with frameworks like React and styling using Tailwind CSS. I also have knowledge of MySQL for databases and PHP for server-side scripting. I'm passionate about using these skills to create effective solutions and always eager to explore new technologies to innovate in the digital world.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
