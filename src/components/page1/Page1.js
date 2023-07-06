import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import './Page1.css'
import gsap from 'gsap';
import { Gradient } from '../../Gradient';

const Page1 = () => {
  // const [video] = useState(() =>
  //   Object.assign(document.createElement('video'), { src: '/video8.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }),
  // )

  const cont1 = useRef();
  const cont2 = useRef();
  const cont3 = useRef();

  // useEffect(() => void video.play(), [video])
  const canvasRef = useRef(null);

  useEffect(() => {

    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas')

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.to(cont1.current, {
        delay: 2.5,
        duration: '2',
        x: '-220'
      })
      gsap.fromTo(cont2.current,
        {
          x: '-220',
          delay: 2.5,
        },
        {
          x: '64',
          delay: 2.5, duration: '1.5'
        });

      gsap.fromTo(cont3.current,
        {
          x: '-524',
          delay: 2.5,
        },
        {
          x: '-192',
          delay: 2.5, duration: '1.5'
        });
    });
  })

  return (
    <>
      <div className='w-[100vw]'>
        {/* main */}

        <canvas id='gradient-canvas' style={{ width: '100vw', height: '100vh' }}></canvas>

        <div className='container1 uppercase text-center text-white'>
          <div className='heading'>
            <h2>Independent</h2>
            <h2 ref={cont1}>Full-stack</h2>
            <h2 ref={cont2}>Web Developer</h2>
            <p ref={cont3} className='text-right mr-[30px] lg:mr-0'>
              Welcome to <span className='lowercase italic'>my portfolio</span>
            </p>
          </div>
        </div>

        {/* footer */}
        <div className='text-white navbar md:flex footer justify-between md:px-10 px-5 py-3 center'>
          <div>
            <div className='text-center'>
              <a target='_blank' href='https://www.instagram.com/anuragmagar_/'>Instagram</a>
              <a target='_blank' href='https://www.linkedin.com/in/anurag-magar-765bb21b5/' className='px-[20px]'>LinkedIn</a>
              <a target='_blank' href='https://www.facebook.com/eanush.magar' className='px-[20px]'>Facebook</a>
              <a target='_blank' href='https://github.com/Anuragmagar' className='px-[20px]'>GitHub</a>
            </div>
          </div>
          <div className='right-0 text-center'>
            Scroll to begin your journey
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1