import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdLocationPin } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";


function Contact() {
    
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({name: '',email: '',message: ''});
    const form = useRef();

    const successmsg = ()=>{
        setSuccessMsg(true);
        setTimeout(() => {
            setSuccessMsg(false)
        }, 3000);
    }
    const errormsg = ()=>{
        setErrorMsg(true);
        setTimeout(() => {
            setErrorMsg(false)
        }, 3000);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };
    

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_gfrdtr7', 'template_bd9b0ip', form.current, {
                publicKey: '8u0aClti4NN4Gx65g',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setLoading(false);
                    successmsg();
                    setFormData({ name: '', email: '', message: '' });
                    
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false);
                    errormsg();
                    setFormData({ name: '', email: '', message: '' });
                },
            );
    };

    return (
        <>
            <div id='contact' className='min-h-screen bg-[#191970] p-10 pt-[90px] pb-[90px] max-lg:p-10 max-lg:min-h-fit max-md:pl-6 max-md:pr-6 max-md:min-h-screen max-lg:pt-[90px] max-lg:pb-[90px] max-md:pt-[90px] max-md:pb-[90px] max-xsm:pt-[80px] max-xsm:pb-[80px]'>
                <h3 className='tracking-[5px] font-ubunto text-2xl font-semibold mb-20 text-[#21b1f4] text-center max-md:mb-10'>Contact</h3>
                <div className='flex justify-between max-md:flex-col-reverse'>
                    <div className='mr-20 max-md:mr-0'>
                        <div className='flex mb-7'>
                            <div className='bg-[#21b1f4] p-5 mr-5 rounded-full text-3xl text-[#191970] max-lg:p-3 max-xsm:p-2 max-xsm:w-12 max-xsm:h-12 max-xsm:flex max-xsm:items-center max-xsm:justify-center'>
                                <MdLocationPin />
                            </div>
                            <div className="flex flex-col">
                                <p className='text-white font-semibold mb-2 text-2xl leading-7 max-xsm:text-xl max-xsm:mb-1'>Location</p>
                                <p className='font-carterOne text-[#b0aac0] text-sm max-md:text-xs'>Karachi, Pakistan</p>
                            </div>
                        </div>
                        <div className='flex mb-7'>
                            <div className='bg-[#21b1f4] p-5 mr-5 rounded-full text-3xl text-[#191970] max-lg:p-3 max-xsm:p-2 max-xsm:w-12 max-xsm:h-12 max-xsm:flex max-xsm:items-center max-xsm:justify-center'>
                                <MdOutlinePhoneAndroid />
                            </div>
                            <div className="flex flex-col">
                                <p className='text-white font-semibold mb-2 text-2xl leading-7 max-xsm:text-xl max-xsm:mb-1'>Phone</p>
                                <p className='font-carterOne text-[#b0aac0] text-sm max-md:text-xs'>+92 3453661086</p>
                            </div>
                        </div>
                        <div className='flex mb-7'>
                            <div className='bg-[#21b1f4] p-5 mr-5 rounded-full text-3xl text-[#191970] max-lg:p-3 max-xsm:p-2 max-xsm:w-12 max-xsm:h-12 max-xsm:flex max-xsm:items-center max-xsm:justify-center'>
                                <MdOutlineMail />
                            </div>
                            <div className="flex flex-col">
                                <p className='text-white font-semibold mb-2 text-2xl leading-7 max-xsm:text-xl max-xsm:mb-1'>Email</p>
                                <p className='font-carterOne text-[#b0aac0] text-sm max-md:text-xs'>ahassankg@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-md:w-full max-md:mb-10'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-3'>
                                <input  type="text" name="name" className='input bg-[#2c2c80] border border-[#b0aac0] rounded-lg w-full p-5 focus:border-[#21b1f4] outline-none text-sm text-[#b0aac0]' placeholder='Your Name' required value={formData.name} onChange={handleInputChange}/>
                            </div>
                            <div className='mb-3'>
                                <input type="email" name="email" className='input bg-[#2c2c80] border border-[#b0aac0] rounded-lg w-full p-5 focus:border-[#21b1f4] outline-none text-sm text-[#b0aac0]' placeholder='Your Email' required value={formData.email} onChange={handleInputChange}/>
                            </div>
                            <div className='mb-3'>
                                <textarea name="message" className='input bg-[#2c2c80]  border border-[#b0aac0] rounded-lg w-full p-5 h-40 inline-block scrollbar textarea-scrollbar focus:border-[#21b1f4] outline-none text-sm text-[#b0aac0]' placeholder='Your Message' required value={formData.message} onChange={handleInputChange}/>
                            </div>
                            <div className='mb-3'>
                                <input type="submit" className={`${successMsg?'hidden':errorMsg?'hidden':loading?'hidden':'block'} bg-[#21b1f4] cursor-pointer rounded-lg w-1/4 p-3 outline-none block text-sm font-semibold text-white max-md:w-1/2 max-md:m-auto max-xsm:w-full`} />
                                <div className={`${successMsg?'block':'hidden'} p-2 bg-[#69b586] w-full`}>
                                    <p className='text-sm text-[#00523b] leading-tight text-center font-semibold'>Your messsage has been sent successfully!</p>
                                </div>
                                <div className={`${errorMsg?'block':'hidden'} p-2 bg-[#ff9d9d] w-full`}>
                                    <p className='text-sm text-[#ff0000] leading-tight text-center font-semibold'>Some error occured Try Again plz!</p>
                                </div>
                                <div className={`${loading?'block':'hidden'} p-2 w-full`}>
                                    <img src='/images/loading.gif' alt='Loading...' className='h-7 m-auto'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
