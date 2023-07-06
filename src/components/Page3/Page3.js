import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import './Page3.css'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
  const know = useRef()
  return (
    <div className='h-[100vh]'>
      <div className='border-white border-b border-t text-[21px] text-white whitespace-nowrap know' ref={know}>
        <marquee behavior="alternate">
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
          <span>Know more about me.</span>
        </marquee>
      </div>
      <div className='flex items-center h-[100%]'>
        <div className='pl-[10rem] lg:text-[60px] text-[40px] tex text-[#f5f5f5e8]'>
          <h1 className='text1'>
            <span className='italic'>Hey!</span> I'm Anurag,
          </h1>
          <h1>
            a eighteen years <span className='italic'>old</span>
          </h1>
          <h1 className='text2'>
            full-stack developer. Currently
          </h1>
          <h1 className="text3">
            based <span className='italic'>in</span> Nepal
          </h1>
        </div>
        <div className='profile'>
          <img src='/profile1.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Page3