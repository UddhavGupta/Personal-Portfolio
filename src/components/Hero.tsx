import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
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
          </div>
        </motion.div>

        {/* Circular Portrait */}
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
          className="order-1 md:order-2 flex justify-start md:justify-end relative">
          
          <div className="relative">
            {/* Outer hairline ring */}
            <div className="absolute -inset-2 rounded-full border border-maroon/15 pointer-events-none" />
            {/* Inner image */}
            <div
              className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden luxe-card"
              style={{
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
          </div>
        </motion.div>
      </div>
    </section>);

}