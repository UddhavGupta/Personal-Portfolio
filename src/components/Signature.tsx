import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
const SIGNATURE_URL = "/Screenshot_2026-05-13_at_9.53.13_PM.png";

/**
 * Real handwritten signature.
 * The source PNG is black-on-white. We use mix-blend-mode + filters to:
 *   - drop the white background (screen blend on the inverted image)
 *   - tint the strokes to champagne so they read against the dark maroon card
 * A left-to-right clip-path wipes the signature on as it scrolls into view,
 * imitating a hand drawing it in real time.
 */
export function Signature({
  width = 240,
  className = '',
  tint = 'champagne'




}: {width?: number;className?: string;tint?: 'champagne' | 'ink';}) {
  const reduce = useReducedMotion();
  // Inverted + tinted via CSS filters. Screen blend drops the (now-black) bg.
  const filter =
  tint === 'champagne' ?
  // invert: black strokes → white; sepia + saturate + hue-rotate → warm champagne
  'invert(1) brightness(1.1) sepia(0.7) saturate(2.6) hue-rotate(-8deg)' :
  'none';
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{
        width,
        lineHeight: 0
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-80px'
      }}
      aria-label="Uddhav Gupta — signature"
      role="img">
      
      <motion.img
        src={SIGNATURE_URL}
        alt=""
        draggable={false}
        className="block w-full h-auto select-none"
        style={{
          filter,
          mixBlendMode: tint === 'champagne' ? 'screen' : 'multiply'
        }}
        variants={{
          hidden: {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0.85
          },
          visible: {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            transition: reduce ?
            {
              duration: 0
            } :
            {
              clipPath: {
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1]
              },
              opacity: {
                duration: 0.3
              }
            }
          }
        }} />
      
    </motion.div>);

}