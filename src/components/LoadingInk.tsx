import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
const SIGNATURE_URL = "/pasted-image.png";

/**
 * First-visit intro:
 *  - cream paper background
 *  - maroon ink-bleed wash blooms outward
 *  - signature draws on via left-to-right clip wipe
 *  - whole overlay fades and unmounts
 *
 * Tight 500ms reveal, ~250ms fade. Fires once per session.
 */
export function LoadingInk() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('mp:ink-intro-seen');
      if (!seen && !reduce) {
        setShow(true);
        sessionStorage.setItem('mp:ink-intro-seen', '1');
      }
    } catch {

      // ignore
    }}, [reduce]);
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 850);
    return () => clearTimeout(t);
  }, [show]);
  return (
    <AnimatePresence>
      {show &&
      <motion.div
        initial={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        style={{
          backgroundColor: '#F4F1EC'
        }}
        aria-hidden="true">
        
          {/* Ink bleed wash behind the signature */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.4
          }}
          animate={{
            opacity: [0, 0.22, 0.06],
            scale: [0.4, 1.6, 2.4]
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.55, 1],
            ease: 'easeOut'
          }}
          className="absolute"
          style={{
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
            'radial-gradient(circle, rgba(92,42,31,0.55) 0%, rgba(92,42,31,0.2) 35%, rgba(92,42,31,0) 70%)',
            filter: 'blur(10px)'
          }} />
        

          {/* Signature — drawn left-to-right via clip-path wipe */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut'
          }}
          className="relative"
          style={{
            width: 'min(72vw, 440px)'
          }}>
          
            <motion.img
            src={SIGNATURE_URL}
            alt=""
            draggable={false}
            className="block w-full h-auto select-none"
            style={{
              // Drop the white background, leave ink-black strokes
              mixBlendMode: 'multiply'
            }}
            initial={{
              clipPath: 'inset(0 100% 0 0)'
            }}
            animate={{
              clipPath: 'inset(0 0% 0 0)'
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }} />
          
          </motion.div>

          {/* Tiny ink droplet falling beneath, completing the moment */}
          <motion.div
          className="absolute"
          style={{
            marginTop: 140
          }}
          initial={{
            opacity: 0,
            y: -16
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-16, 12, 12]
          }}
          transition={{
            duration: 0.45,
            delay: 0.35,
            times: [0, 0.7, 1]
          }}>
          
            <div
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: '#5C2A1F'
            }} />
          
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}