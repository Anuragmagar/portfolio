import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import './App.css';
import Page1 from './components/page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';
import Page6 from './components/Page6/Page6';
import { BiMenuAltRight } from 'react-icons/bi'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const pgs = useRef();
  const panel = useRef();
  const avail = useRef();
  const sel = useRef();

  useEffect(() => {
    gsap.to(avail.current.children, {
      duration: '40',
      ease: "none",
      x: "-=1000", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

    //horizontal
    const horizontalSections = gsap.utils.toArray('.horizontal-sections');
    horizontalSections.forEach((section, i) => {
      const thisPinWrap = section.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + (thisAnimWrap.scrollWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        scrub: true
      })
      const fakeHorizontalAnim = gsap.fromTo(thisAnimWrap, {
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
      }, {
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
          // end: () => "+=5000",
          invalidateOnRefresh: true,
          scrub: 2
        }
      });

      const tl = gsap.timeline();
      tl.to('.selector', {
        y: '-3331px',
      });

      ScrollTrigger.create({
        trigger: section,
        start: () => "top top-=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        // end: () => "+=" + window.innerHeight,
        end: '+=1500',
        animation: tl,
        scrub: 5,
        // markers: true,
      });


      gsap.to('.select', {
        x: '100px',
        scrollTrigger: {
          trigger: '.select_trigger',
          scrub: 3,
          end: '+=500',
          start: 'center 75%',
          containerAnimation: fakeHorizontalAnim
        }
      })
      gsap.to('.select_work', {
        x: '-100px',
        scrollTrigger: {
          trigger: '.select_trigger',
          scrub: 3,
          end: '+=500',
          start: 'center 75%',
          containerAnimation: fakeHorizontalAnim
        }
      })
    });

    //another horizontal
    const horizontalSections1 = gsap.utils.toArray('.horizontal-sections1');

    horizontalSections1.forEach((section, i) => {
      const thisPinWrap1 = section.querySelector('.pin-wrap1');
      const thisAnimWrap1 = thisPinWrap1.querySelector('.animation-wrap1');
      const getToValue1 = () => -(thisAnimWrap1.scrollWidth - window.innerWidth);
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + (thisAnimWrap1.scrollWidth),
        pin: thisPinWrap1,
        invalidateOnRefresh: true,
        scrub: true
      })
      const fakeHorizontalAnim1 = gsap.fromTo(thisAnimWrap1, {
        x: () => thisAnimWrap1.classList.contains('to-right1') ? 0 : getToValue1()
      }, {
        x: () => thisAnimWrap1.classList.contains('to-right1') ? getToValue1() : 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + (thisAnimWrap1.scrollWidth),
          invalidateOnRefresh: true,
          scrub: 2
        }
      });

      gsap.from('.benefit', {
        x: '-1000px',
        scrollTrigger: {
          trigger: '.trig',
          scrub: 3,
          end: '+=5000',
          containerAnimation: fakeHorizontalAnim1
        }
      })

      // Demo 1
      const tl1 = gsap.timeline({ paused: true })
        .from(".contact_stagger", {
          opacity: 0,
          y: -90,
          stagger: 0.1
        })
      // .to(".contact_stagger", { opacity: 1, y: 0 });

      ScrollTrigger.create({
        trigger: ".cont_trig",
        start: "center 20%",
        // end: "center 15%",
        onEnter: () => tl1.tweenTo(2),
        onLeave: () => tl1.tweenTo(1.5),
        onEnterBack: () => tl1.tweenTo(2),
        onLeaveBack: () => tl1.tweenTo(1),
        containerAnimation: fakeHorizontalAnim1
      });

    });


  })

  return (
    <>
      {/* navbar */}
      <div className='navbar flex justify-between px-3 md:px-10 py-3 border-b fixed w-[100%] bg-black z-[9999]'>
        <p className='cursor-pointer'>anuragmagar</p>
        <a href='mailto:eanush.magar@gmail.com' ref={avail} className='sm:flex whitespace-nowrap px-5 py-[2px] w-[20rem] overflow-hidden uppercase border border-white rounded-xl hover:border-[#bfff07] hidden'>
          <p>
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
          </p>
          <p>
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
            <span className="dot"></span>
            &nbsp;&nbsp;&nbsp;Available for freelance work
          </p>
        </a>
        <div className='uppercase'>
          <ul className='sm:flex hidden'>
            <li className='hover:cursor-pointer'>Projects</li>
            <li className='hover:cursor-pointer'>About</li>
            <li className='hover:cursor-pointer'>Contact</li>
          </ul>
          <ul className='flex md:hidden'>
            <li>
              <BiMenuAltRight size={20}/>
            </li>
          </ul>
        </div>
      </div>

      <div className="horizontal-sections">
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            <div className="section">
              <Page1 />
            </div>
            <div className="section">
              <Page2 />
            </div>
            <div className="section w-[100vw] text-white select_trigger">
              <div className='intro text-white md:text-[80px] text-[45px]'>
                <h1 className='uppercase select'>Selected</h1>
                <h1 className='uppercase italic select_work'>Works</h1>
              </div>

              <div className='selector'>
                <div className="row lg:px-[90px] px-[20px] justify-between">
                  <div className="pr-5">
                    <img src="./1.png" className="md:h-[600px]" />
                  </div>
                  <div className="mt-[190px]">
                    <img src="./3.png" className="md:h-[600px]" />
                  </div>
                </div>
                <div className="mt-[18.5rem] flex justify-center">
                  <img src="./2.png" className='md:h-[200px]' />
                </div>
                <div className="row mt-[18.5rem] justify-between lg:px-[90px] px-[20px]">
                  <div className="pr-5">
                    <img src="./4.png" className='md:h-[200px]' />
                  </div>
                  <div className="mt-[190px]">
                    <img src="./6.png" className='md:h-[200px]' />
                  </div>
                </div>
                <div className="row mt-[18.5rem] justify-center flexऊ">
                  <div>
                    <img src="./5.png" className='h-[200px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal-sections1">
        <div className="pin-wrap1">
          <div className="animation-wrap1 to-right1">
            <div className="section lg:w-[100vw] w-[200vh]">
              <Page3 />
            </div>
            <div className="section">
              <Page4 />
            </div>
            <div className="section lg:w-[100vw] md:w-[130vw] w-[300vw] overflow-hidden">
              <Page5 />
            </div>
            <div className="section w-[100vw] overflow-hidden">
              <Page6 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
