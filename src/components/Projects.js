import React, { useEffect, useState } from 'react'
import '../index.css'

function Projects() {
    const [data,setData]=useState([]);
    let fetchData = async ()=>{
        try {
            let response = await fetch("/data/portfolioData.json");
            let jsondata = await response.json();
            await setData(jsondata);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>

            <div id='projects' className='min-h-screen bg-[#2c2c80] p-10 pt-[90px] pb-[90px] max-lg:p-10 max-lg:min-h-fit max-md:pl-6 max-md:pr-6 max-md:min-h-screen w-full overflow-hidden max-lg:pt-[90px] max-lg:pb-[90px] max-md:pt-[90px] max-md:pb-[90px] max-xsm:pt-[80px] max-xsm:pb-[80px]'>
                <h3 className='tracking-[5px] font-ubunto text-2xl font-semibold mb-10 text-[#21b1f4] text-center'>Portfolio</h3>
                <div className='flex overflow-auto w-full scrollbar'>
                {data.map((element,index) =>
                (

                    <div key={element.title} className="bg-[#191970] w-[300px] mr-5 max-xsm:w-[250px]">
                        <div className='w-full h-[200px] relative'>
                            <img className='object-cover h-full w-full' src={element.image} alt="No Preview" />
                            <span className='absolute flex items-center justify-center bg-[#162b35] top-0 left-0 w-full h-full bg-opacity-50 font-bold text-white'></span>
                        </div>
                        <div className='p-4 w-[300px] h-[300px] flex flex-col justify-between max-xsm:w-[250px]'>
                            <div className="">
                            <h2 className='font-bold text-xl text-center mb-4 text-white'>{element.title.substring(0,20)}</h2>
                            <p className=' text-justify font-ubunto text-[#b0aac0] max-lg:text-[15px]'>{element.description.substring(0,200)}</p>
                            </div>
                            <a href={element.url} className='block bg-[#21b1f4] text-center text-white mt-3 mb-3 mr-auto ml-auto font-bold p-2 w-1/2 rounded-lg'>Visit Site</a>
                        </div>
                    </div>
                    
                )
            )}
                </div>
            </div>

        </>
    )
}

export default Projects
