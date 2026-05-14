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
        viewBox="0 0 800 40"
        className="w-full max-w-[600px] h-10"
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

        {/* Falling ink droplet — releases first, lands at center reservoir */}
        <motion.ellipse
          cx="400"
          cy="0"
          rx="1.2"
          ry="2.2"
          className="fill-maroon"
          initial={{
            y: -10,
            opacity: 0
          }}
          whileInView={{
            y: [-10, 14, 18],
            opacity: [0, 1, 0]
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.55,
            times: [0, 0.85, 1],
            ease: [0.6, 0, 0.9, 0.4]
          }} />
        

        {/* Splash ring — bursts outward where the droplet lands */}
        <motion.circle
          cx="400"
          cy="20"
          r="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-maroon"
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: [0, 5, 7],
            opacity: [0, 0.7, 0]
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: 'easeOut'
          }} />
        

        {/* Splash micro-droplets — flick outward */}
        {[-6, -3, 3, 6].map((dx, i) =>
        <motion.circle
          key={`splash-${i}`}
          cx={400 + dx}
          cy="20"
          r="0.5"
          className="fill-maroon"
          initial={{
            x: 0,
            y: 0,
            opacity: 0
          }}
          whileInView={{
            x: dx * 1.6,
            y: [-1, -4, -2],
            opacity: [0, 0.7, 0]
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0.5 + i * 0.03,
            ease: 'easeOut'
          }} />

        )}

        {/* Main organic ink line — draws from center outward */}
        <motion.path
          d="M0 20 C50 18.5, 100 21.2, 160 19.6 C220 18.0, 280 21.4, 340 20.2 C400 19.0, 460 20.8, 520 19.4 C580 18.0, 640 21.0, 700 19.8 C740 19.0, 770 20.4, 800 20"
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
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1]
          }} />
        

        {/* Whisper trace line */}
        <motion.path
          d="M0 20.6 C60 19.4, 120 21.5, 200 20.0 C280 18.6, 360 21.2, 440 19.8 C520 18.4, 600 21.0, 680 19.6 C740 18.8, 770 20.2, 800 20.5"
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
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1]
          }} />
        

        {/* Center ink reservoir */}
        <motion.circle
          cx="400"
          cy="20"
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
            duration: 0.3,
            delay: 0.5,
            ease: 'easeOut'
          }} />
        

        {/* Symmetric ink droplets that bleed outward */}
        {[
        {
          x: 280,
          r: 0.7,
          delay: 1.0,
          opacity: 0.5
        },
        {
          x: 520,
          r: 0.7,
          delay: 1.0,
          opacity: 0.5
        },
        {
          x: 200,
          r: 0.5,
          delay: 1.2,
          opacity: 0.4
        },
        {
          x: 600,
          r: 0.5,
          delay: 1.2,
          opacity: 0.4
        },
        {
          x: 120,
          r: 0.4,
          delay: 1.4,
          opacity: 0.3
        },
        {
          x: 680,
          r: 0.4,
          delay: 1.4,
          opacity: 0.3
        },
        {
          x: 60,
          r: 0.3,
          delay: 1.6,
          opacity: 0.2
        },
        {
          x: 740,
          r: 0.3,
          delay: 1.6,
          opacity: 0.2
        }].
        map((dot, i) =>
        <motion.circle
          key={i}
          cx={dot.x}
          cy="20"
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