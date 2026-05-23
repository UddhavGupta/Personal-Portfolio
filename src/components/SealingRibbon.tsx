import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
export function SealingRibbon() {
  const reduce = useReducedMotion();
  return (
    <div className="flex justify-center -my-10 relative z-20 pointer-events-none no-print">
      <motion.svg
        viewBox="0 0 60 160"
        className="w-16 h-40 overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: '-50px'
        }}>
        
        {/* Ribbon drop */}
        <motion.path
          d="M 30 0 L 30 120"
          stroke="#5C2A1F"
          strokeWidth="4"
          strokeLinecap="square"
          fill="none"
          variants={{
            hidden: {
              pathLength: reduce ? 1 : 0,
              opacity: reduce ? 1 : 0
            },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }} />
        

        {/* Forked tail */}
        <motion.path
          d="M 28 118 L 18 145 L 30 135 L 42 145 L 32 118 Z"
          fill="#5C2A1F"
          variants={{
            hidden: {
              opacity: 0,
              y: -10
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.8,
                ease: 'easeOut'
              }
            }
          }} />
        

        {/* Wax seal disc */}
        <motion.circle
          cx="30"
          cy="120"
          r="14"
          fill="#5C2A1F"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.9,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }
            }
          }}
          style={{
            transformOrigin: '30px 120px'
          }} />
        

        {/* Inner champagne ring */}
        <motion.circle
          cx="30"
          cy="120"
          r="10"
          fill="none"
          stroke="#C8A977"
          strokeWidth="0.75"
          strokeOpacity="0.6"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1.0,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }
            }
          }}
          style={{
            transformOrigin: '30px 120px'
          }} />
        

        {/* UG monogram inside seal */}
        <motion.text
          x="30"
          y="123.5"
          fontSize="9"
          fill="#C8A977"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          fontWeight="600"
          letterSpacing="0.05em"
          variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 0.9,
              transition: {
                duration: 0.4,
                delay: 1.1
              }
            }
          }}>
          
          UG
        </motion.text>
      </motion.svg>
    </div>);

}