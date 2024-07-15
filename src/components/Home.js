import React, { useEffect } from 'react'


function Home() {

    // TEXT ANIMATION
    let remove = async (text) => {
        let animatedText = document.getElementById("animated-text");
        return new Promise(resolve => {
            let interval = setInterval(() => {
                if (text.length > 0) {
                    text = text.slice(0, -1);
                    animatedText.innerText = text;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, 150);
        });
    }

    let add = async (text) => {
        let animatedText = document.getElementById("animated-text");
        let newtext = "";
        let index = 0;
        return new Promise(resolve => {
            let interval = setInterval(() => {
                if (text.length !== newtext.length) {
                    newtext = newtext.concat(text[index]);
                    index++;
                    animatedText.innerText = newtext;
                }
                else {
                    clearInterval(interval);
                    resolve();
                }
            }, 150);
        });
    }

    let textAnimation = async () => {
        let words = ["Computer Engineer", "Web Developer", "OOP Expert"];
        let currentword = 0;

        let i = 0;
        while (i <= words.length - 1) {
            await add(words[currentword]);
            await remove(words[currentword]);
            if (i === words.length - 1) {
                currentword = 0;
                i = 0;
            }
            else {
                currentword++;
                i++;
            }
        }
    }



    //
    let scaleup = () => {
        let scaleup = document.getElementById('myDiv');
        let promise = new Promise((resolve, reject) => {
            scaleup.style.transform = 'scale(1.10)';
            scaleup.style.transitionDuration= '3s';
            setTimeout(() => {
                resolve();
            }, 3000);
        })
        promise.then(() => {
            scaleup.style.transform = 'scale(1)';
        })
    }




    useEffect(() => {
        setInterval(() => {
            scaleup();
        }, 6000)
        textAnimation()
    });
    return (
        <>
            <div id='home' className='min-h-screen bg-[#191970] p-2 pt-[82px] pb-[82px] flex justify-between max-lg:min-h-fit max-md:min-h-screen max-md:flex-col-reverse max-md:justify-end max-xsm:pt-[72px] max-xsm:pb-[72px]'>
                <div className='p-8 pt-10 max-lg:pr-1 max-md:pl-1 max-md:pt-5'>
                    <p className='font-semibold text-2xl text-[#21b1f4] max-md:text-center'>HELLO I'M</p>
                    <p className='text-white text-6xl mb-10 mt-10 font-carterOne font-thin max-lg:text-5xl max-md:mt-7 max-md:mb-7 max-md:text-center max-md:text-4xl'>Abul Hassan<br /><span className='mt-2 block'>Khan Ghauri</span></p>
                    <p className='text-white text-2xl font-semibold max-lg:text-xl max-md:text-center max-xsm:text-xl'>A Passionate
                        <span className='relative ml-3 max-lg:ml-1'>
                            <span id='animated-text' className='text-3xl text-[#21b1f4] max-lg:text-2xl'></span>
                            <span className='h-1 bottom-0 absolute bg-[#21b1f4] w-3'></span>
                        </span>
                    </p>
                    <a href='#contact' className='inline-block bg-[#21b1f4] text-center text-white mt-8 font-bold p-2 pl-10 pr-10 z-10 rounded-lg max-md:w-1/2 max-md:ml-auto max-md:mr-auto max-md:block '>Say Hello!</a>
                </div>
                <div className='flex pt-10 justify-center w-1/2 max-lg:items-center max-lg:p-8 max-md:w-full'>
                    <div className="relative ">
                        <div id="myDiv" className='h-[400px] w-[400px] z-10 bg-[#DFE9F3] rounded-full max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px]'></div>
                        <img src='/images/MyImage.jpg' alt='No Preview' className='absolute top-0 left-0 h-[400px] w-[400px] object-contain rounded-full max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px]'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
