import React from 'react';
import { motion } from 'framer-motion';
export function InkDivider() {
  return (
    <motion.div
      className="py-12 flex justify-center no-print w-full"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.4
      }}>
      
      <svg
        viewBox="0 0 800 20"
        className="w-full max-w-[600px] h-5"
        fill="none"
        preserveAspectRatio="none">
        
        <defs>
          <linearGradient id="inkFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="15%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="85%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <filter id="inkBleed" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>

        {/* Main organic ink line — draws from center outward */}
        <motion.path
          d="M0 10 C50 8.5, 100 11.2, 160 9.6 C220 8.0, 280 11.4, 340 10.2 C400 9.0, 460 10.8, 520 9.4 C580 8.0, 640 11.0, 700 9.8 C740 9.0, 770 10.4, 800 10"
          stroke="url(#inkFade)"
          strokeWidth="0.9"
          strokeLinecap="round"
          className="text-maroon"
          filter="url(#inkBleed)"
          initial={{
            pathLength: 0,
            pathOffset: 0.5
          }}
          whileInView={{
            pathLength: 1,
            pathOffset: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1]
          }} />
        

        {/* Whisper trace line — draws slightly faster, thinner */}
        <motion.path
          d="M0 10.6 C60 9.4, 120 11.5, 200 10.0 C280 8.6, 360 11.2, 440 9.8 C520 8.4, 600 11.0, 680 9.6 C740 8.8, 770 10.2, 800 10.5"
          stroke="currentColor"
          strokeWidth="0.35"
          strokeLinecap="round"
          className="text-maroon/40"
          initial={{
            pathLength: 0,
            pathOffset: 0.5
          }}
          whileInView={{
            pathLength: 1,
            pathOffset: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 1.4,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1]
          }} />
        

        {/* Center ink reservoir — pulses out first */}
        <motion.circle
          cx="400"
          cy="10"
          r="1.4"
          className="fill-maroon"
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 0.85
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.4,
            ease: 'easeOut'
          }} />
        

        {/* Symmetric ink droplets that bleed outward */}
        {[
        {
          x: 280,
          r: 0.7,
          delay: 0.5,
          opacity: 0.5
        },
        {
          x: 520,
          r: 0.7,
          delay: 0.5,
          opacity: 0.5
        },
        {
          x: 200,
          r: 0.5,
          delay: 0.7,
          opacity: 0.4
        },
        {
          x: 600,
          r: 0.5,
          delay: 0.7,
          opacity: 0.4
        },
        {
          x: 120,
          r: 0.4,
          delay: 0.9,
          opacity: 0.3
        },
        {
          x: 680,
          r: 0.4,
          delay: 0.9,
          opacity: 0.3
        },
        {
          x: 60,
          r: 0.3,
          delay: 1.1,
          opacity: 0.2
        },
        {
          x: 740,
          r: 0.3,
          delay: 1.1,
          opacity: 0.2
        }].
        map((dot, i) =>
        <motion.circle
          key={i}
          cx={dot.x}
          cy="10"
          r={dot.r}
          className="fill-maroon"
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: dot.opacity
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: dot.delay,
            ease: 'easeOut'
          }} />

        )}
      </svg>
    </motion.div>);

}