import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence } from
'framer-motion';
export function BlobCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, {
    damping: 20,
    stiffness: 250
  });
  const springY = useSpring(cursorY, {
    damping: 20,
    stiffness: 250
  });
  const [isIdle, setIsIdle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIsIdle(true), 1000);
  }, []);
  // Hide default cursor only when idle
  useEffect(() => {
    if (isIdle && isVisible) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = '';
    }
    return () => {
      document.body.style.cursor = '';
    };
  }, [isIdle, isVisible]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      resetIdleTimer();
    };
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
    const handleMouseEnter = () => setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [cursorX, cursorY, resetIdleTimer]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  if (isTouchDevice) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] no-print"
      style={{
        x: springX,
        y: springY
      }}>
      
      <AnimatePresence>
        {isVisible && isIdle &&
        <motion.div
          key="idle"
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            scale: 0.5,
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative -translate-x-1/2 -translate-y-1/2">
          
            <svg
            width="32"
            height="32"
            viewBox="-6 -6 42 42"
            className="overflow-visible">
            
              <defs>
                <filter
                id="blobMerge"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%">
                
                  <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2.5"
                  result="blur" />
                
                  <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"
                  result="goo" />
                
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>

              <g filter="url(#blobMerge)">
                {/* Central droplet — gently breathes */}
                <motion.circle
                fill="black"
                cx="15"
                cy="15"
                animate={{
                  r: [5, 5.8, 4.8, 5.5, 5],
                  cx: [15, 16, 14.5, 15.5, 15],
                  cy: [15, 14, 15.5, 14.5, 15]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />
              

                {/* Orbiting droplet 1 */}
                <motion.circle
                fill="black"
                animate={{
                  cx: [26, 18, 4, 12, 26],
                  cy: [8, 26, 20, 4, 8],
                  r: [3, 3.5, 2.8, 3.2, 3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />
              

                {/* Orbiting droplet 2 */}
                <motion.circle
                fill="black"
                animate={{
                  cx: [4, 14, 28, 18, 4],
                  cy: [22, 2, 12, 28, 22],
                  r: [2.5, 2.8, 2.2, 3, 2.5]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />
              

                {/* Small satellite */}
                <motion.circle
                fill="black"
                animate={{
                  cx: [22, 6, 10, 24, 22],
                  cy: [26, 12, 4, 18, 26],
                  r: [1.8, 2.2, 1.6, 2, 1.8]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />
              
              </g>
            </svg>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}