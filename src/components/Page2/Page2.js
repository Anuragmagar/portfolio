import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import './Page2.css'

const Page2 = () => {
  const top = useRef()
  const bottom = useRef()

  useEffect(() => {
    gsap.to(top.current, {
      y: '-625',
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-sections",
        scrub: 2,
        start: "top top",
        end: "+=4000"
      }
    })
    gsap.fromTo(bottom.current, {
      y: '-636',
    }, {
      y: '-36',
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-sections",
        scrub: 2,
        start: "top top",
        end: "+=4000"
      }
    })
  })


  return (
    <div className='h-[100vh] w-[67px]'>
      <div className='side border-white border-l border-r font-[600] md:text-[21px] text-[10px] text-white whitespace-nowrap'>
        <div className='top' ref={top}>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
        </div>
        <div ref={bottom}>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
          <span>2022 PORTFOLIO</span>
          <span>ANURAG MAGAR</span>
        </div>
      </div>
    </div>
  )
}

export default Page2