import React, { useRef, useState, useEffect } from 'react'
import './PageLoader.css'
import gsap from 'gsap';

const PageLoader = () => {
    const [count, setCount] = useState(0);
    const counter = useRef();
    const overlay = useRef();

    useEffect(() => {
        let animationFrameId;
        const startTimestamp = performance.now();
        const duration = 2000; // 5 seconds

        const animateCounter = (timestamp) => {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const newCount = Math.round(progress * 100);

            setCount(newCount);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateCounter);
            }
        };

        animationFrameId = requestAnimationFrame(animateCounter);

        gsap.to(counter.current, 0.25, {
            delay: 2.5,
            opacity: 0,
            zIndex: -1,
        })
        gsap.to(overlay.current, 0.75, {
            delay: 2.5,
            ease: 'Circ.easeOut',
            width: 0,
            zIndex: -1,
        })
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div ref={counter} className='counter'>{count}</div>

            <div ref={overlay} className='overlay'>

            </div>
        </>
    );
};


export default PageLoader;