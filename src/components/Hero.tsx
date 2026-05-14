import React, { useState } from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  const [flipping, setFlipping] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const toss = () => {
    if (flipping) return;
    setFlipping(true);
    setFlipCount((c) => c + 1);
  };
  // Each toss does two full rotations (720°) so it lands face-up again — like a real coin toss
  const rotateY = flipCount * 720;
  return (
    <section
      id="overview"
      className="min-h-[70vh] flex flex-col justify-center pt-12 pb-12 lg:pt-20 lg:pb-20 relative">
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative z-10 order-2 md:order-1">
          
          <p className="luxe-caps text-maroon mb-4 sm:mb-6">
            Portfolio · MMXXVI
          </p>

          <h1 className="font-display-name text-5xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 leading-[0.95]">
            Uddhav
            <br />
            Gupta
          </h1>

          <div className="max-w-xl space-y-4 sm:space-y-5">
            <p
              className="text-lg sm:text-xl md:text-2xl text-ink font-light leading-snug"
              style={{
                letterSpacing: '-0.005em'
              }}>
              
              Product-minded operator turning ambiguous AI, customer experience,
              and growth problems into structured product and GTM systems.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Kellogg MBA candidate with experience across fintech, executive
              search, venture, and AI-enabled products.
            </p>
            <p className="text-xs text-stone-500 italic pt-1 leading-relaxed">
              Psst — open{' '}
              <a
                href="#projects"
                className="not-italic font-medium text-maroon border-b border-maroon/30 hover:border-maroon transition-colors">
                
                Build Notes
              </a>{' '}
              on the portfolio card for a teardown of how this site was made. Or
              try typing{' '}
              <kbd className="not-italic px-1.5 py-0.5 rounded border border-maroon/20 bg-white/60 text-maroon text-[10px] uppercase tracking-widest font-semibold">
                coffee
              </kbd>
              ,{' '}
              <kbd className="not-italic px-1.5 py-0.5 rounded border border-maroon/20 bg-white/60 text-maroon text-[10px] uppercase tracking-widest font-semibold">
                director
              </kbd>
              , or holding{' '}
              <kbd className="not-italic px-1.5 py-0.5 rounded border border-maroon/20 bg-white/60 text-maroon text-[10px] uppercase tracking-widest font-semibold">
                shift
              </kbd>{' '}
              over the globe.
            </p>
          </div>
        </motion.div>

        {/* Circular Portrait (coin-toss on click) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="order-1 md:order-2 flex flex-col items-start md:items-end relative">
          
          <div
            className="relative"
            style={{
              perspective: '1200px'
            }}>
            
            <div className="absolute -inset-2 rounded-full border border-maroon/15 pointer-events-none z-10" />

            {/* Soft shadow that grows/shrinks as the coin rises and falls */}
            <motion.div
              aria-hidden="true"
              animate={{
                scaleX: flipping ? [1, 0.55, 1] : 1,
                opacity: flipping ? [0.35, 0.12, 0.35] : 0.35
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.5, 1],
                ease: 'easeInOut'
              }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 sm:w-32 md:w-40 h-2 rounded-full pointer-events-none"
              style={{
                background:
                'radial-gradient(ellipse at center, rgba(92,42,31,0.35), rgba(92,42,31,0) 70%)',
                filter: 'blur(2px)'
              }} />
            

            <button
              type="button"
              onClick={toss}
              aria-label="Toss portrait"
              className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full cursor-pointer block focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon/40"
              style={{
                background: 'transparent'
              }}>
              
              {/* Vertical toss — rises and falls */}
              <motion.div
                animate={{
                  y: flipping ? [0, -90, 0] : 0
                }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.5, 1],
                  ease: [0.22, 1, 0.36, 1]
                }}
                onAnimationComplete={() => {
                  if (flipping) setFlipping(false);
                }}
                className="relative w-full h-full">
                
                {/* Spin — two full rotations per toss, lands face-up */}
                <motion.div
                  animate={{
                    rotateY
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}>
                  
                  {/* Front face */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden luxe-card"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      backgroundColor: 'var(--card-bg)'
                    }}>
                    
                    <img
                      src="/Screenshot_2026-05-05_at_8.25.05_PM.png"
                      alt="Uddhav Gupta"
                      loading="eager"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: '50% 35%'
                      }} />
                    
                  </div>

                  {/* Back face — same image in full color (no etching, no plate caption) */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden luxe-card"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: 'var(--card-bg)'
                    }}>
                    
                    <img
                      src="/Screenshot_2026-05-05_at_8.25.05_PM.png"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: '50% 35%'
                      }} />
                    
                  </div>
                </motion.div>
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

}