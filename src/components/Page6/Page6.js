import React, { useEffect } from 'react'
import './Page6.css'
import { BsArrowReturnLeft } from 'react-icons/bs'

const Page6 = () => {
    useEffect(() => {
    })
    return (
        <div className='text-white md:px-[35px] px-[10px] pt-[70px] contact'>
            <h1>
                <span className='contact_stagger'>A</span>
                <span className='contact_stagger'>n</span>
                <span className='contact_stagger'>u</span>
                <span className='contact_stagger'>r</span>
                <span className='contact_stagger'>a</span>
                <span className='contact_stagger'>g</span>
                <span className='contact_stagger'>M</span>
                <span className='contact_stagger'>a</span>
                <span className='contact_stagger'>g</span>
                <span className='contact_stagger'>a</span>
                <span className='contact_stagger'>r</span>
            </h1>
            <div className='mt-[35px] flex justify-between'>
                <div className='w-[457px] font-[400] md:text-[45px] text-[25px] leading-[0.9]'>
                    <h2 className='uppercase'>
                        Want to discuss a new project?
                    </h2>
                    <div className='mt-[55px]'>
                        <a className='md:w-[300px] px-[30px] py-[10px] text-center rounded-full md:text-[25px] text-[15px] italic text-[#bfff07] border-[#bfff07] border hover:bg-[#bfff07] hover:text-black fon' href='mailto:mailto:eanush.magar@gmail.com'>
                            Send me an e-mail
                        </a>
                    </div>
                </div>
                <div>
                    <BsArrowReturnLeft size={64} />
                </div>
            </div>
            <div className='uppercase flex'>
                <div className='cont_fot'>
                    <div className='mb-[40px]'>
                        <h3 className='font-[600]'>Thanks for your visit!</h3>
                        <p className='md:w-[315px] w-[290px] leading-[1.5] text-[12px] md:text-[15px]'>YOU CAN CHECK OUT MY NETWORKS TO FOLLOW MY NEW ADVENTURES!</p>
                    </div>
                    <div className='flex text-[12px]'>
                        <a target='_blank' href='https://www.instagram.com/anuragmagar_/'>Instagram</a>
                        <a target='_blank' href='https://www.linkedin.com/in/anurag-magar-765bb21b5/' className='md:px-[20px] px-2'>LinkedIn</a>
                        <a target='_blank' href='https://www.facebook.com/eanush.magar' className='md:px-[20px] px-2'>Facebook</a>
                        <a target='_blank' href='https://github.com/Anuragmagar' className='md:px-[20px] px-2'>GitHub</a>
                    </div>
                </div>
                <div className='md:flex absolute right-0 z-[-1] mr-[74px] bottom-0 pb-[20px] hidden'>
                    <video width="100" autoPlay={true} loop>
                        <source src="flag.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Page6