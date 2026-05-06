import React from 'react';
import { motion } from 'framer-motion';
const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.15,
        duration: 1.2,
        ease: 'easeInOut'
      },
      opacity: {
        delay: i * 0.15,
        duration: 0.3
      }
    }
  })
};
const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15 + 0.8,
      duration: 0.5
    }
  })
};
// Large hero background diagram — product loop / system flow
export function HeroDiagram() {
  return (
    <motion.svg
      viewBox="0 0 500 400"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true
      }}>
      
      {/* User Friction → Product Loop */}
      <motion.circle cx="80" cy="80" r="24" variants={draw} custom={0} />
      <motion.text
        x="80"
        y="84"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={0}>
        
        User Friction
      </motion.text>

      {/* Arrow to Insight */}
      <motion.path d="M104 80 L170 80" variants={draw} custom={1} />
      <motion.path d="M165 76 L172 80 L165 84" variants={draw} custom={1} />

      {/* Insight node */}
      <motion.rect
        x="175"
        y="62"
        width="60"
        height="36"
        rx="4"
        variants={draw}
        custom={2} />
      
      <motion.text
        x="205"
        y="84"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={2}>
        
        Insight
      </motion.text>

      {/* Arrow to Product */}
      <motion.path d="M235 80 L290 80" variants={draw} custom={3} />
      <motion.path d="M285 76 L292 80 L285 84" variants={draw} custom={3} />

      {/* Product Loop — circular node */}
      <motion.circle cx="330" cy="80" r="28" variants={draw} custom={4} />
      <motion.text
        x="330"
        y="76"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={4}>
        
        Product
      </motion.text>
      <motion.text
        x="330"
        y="88"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={4}>
        
        Loop
      </motion.text>

      {/* Self-referencing loop on Product */}
      <motion.path
        d="M350 60 C380 40, 400 70, 358 80"
        variants={draw}
        custom={5} />
      
      <motion.path d="M362 76 L358 82 L354 76" variants={draw} custom={5} />

      {/* Arrow down to Measurement */}
      <motion.path d="M330 108 L330 170" variants={draw} custom={6} />
      <motion.path d="M326 165 L330 172 L334 165" variants={draw} custom={6} />

      {/* Measurement node */}
      <motion.rect
        x="295"
        y="175"
        width="70"
        height="36"
        rx="4"
        variants={draw}
        custom={7} />
      
      <motion.text
        x="330"
        y="197"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={7}>
        
        Measurement
      </motion.text>

      {/* Arrow to Iteration */}
      <motion.path d="M295 193 L210 193" variants={draw} custom={8} />
      <motion.path d="M215 189 L208 193 L215 197" variants={draw} custom={8} />

      {/* Iteration node */}
      <motion.circle cx="175" cy="193" r="24" variants={draw} custom={9} />
      <motion.text
        x="175"
        y="197"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={9}>
        
        Iteration
      </motion.text>

      {/* Arrow back up to Insight — feedback loop */}
      <motion.path d="M175 169 L175 98" variants={draw} custom={10} />
      <motion.path d="M171 103 L175 96 L179 103" variants={draw} custom={10} />

      {/* GTM Motion — separate branch from Product */}
      <motion.path d="M358 80 L420 130" variants={draw} custom={6} />
      <motion.path d="M415 125 L422 132 L413 133" variants={draw} custom={6} />

      <motion.rect
        x="400"
        y="135"
        width="65"
        height="36"
        rx="4"
        variants={draw}
        custom={7} />
      
      <motion.text
        x="432"
        y="150"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={7}>
        
        GTM
      </motion.text>
      <motion.text
        x="432"
        y="162"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter"
        variants={fadeIn}
        custom={7}>
        
        Motion
      </motion.text>

      {/* Dotted feedback from GTM to User Friction */}
      <motion.path
        d="M400 155 C300 260, 120 220, 80 104"
        strokeDasharray="3 3"
        variants={draw}
        custom={11} />
      
      <motion.path d="M84 109 L80 102 L76 109" variants={draw} custom={11} />

      {/* Small decorative dots */}
      <motion.circle
        cx="140"
        cy="80"
        r="1.5"
        fill="currentColor"
        stroke="none"
        variants={fadeIn}
        custom={1} />
      
      <motion.circle
        cx="265"
        cy="80"
        r="1.5"
        fill="currentColor"
        stroke="none"
        variants={fadeIn}
        custom={3} />
      
      <motion.circle
        cx="330"
        cy="140"
        r="1.5"
        fill="currentColor"
        stroke="none"
        variants={fadeIn}
        custom={6} />
      
      <motion.circle
        cx="250"
        cy="193"
        r="1.5"
        fill="currentColor"
        stroke="none"
        variants={fadeIn}
        custom={8} />
      
    </motion.svg>);

}
// Small card-level diagram — different for each highlight
export function DiagramUserFriction() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8">
      
      <circle cx="12" cy="24" r="6" />
      <path d="M18 24 L30 24" />
      <path d="M27 21 L30 24 L27 27" />
      <circle cx="36" cy="24" r="6" />
      <path d="M24 18 C24 10, 36 10, 36 18" strokeDasharray="2 2" />
    </svg>);

}
export function DiagramProductLoop() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8">
      
      <circle cx="24" cy="24" r="10" />
      <path d="M34 24 C40 14, 30 4, 24 14" />
      <path d="M26 12 L24 15 L22 12" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>);

}
export function DiagramGTM() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8">
      
      <rect x="4" y="18" width="14" height="12" rx="2" />
      <path d="M18 24 L30 24" />
      <path d="M27 21 L30 24 L27 27" />
      <rect x="30" y="18" width="14" height="12" rx="2" />
      <path d="M37 18 L37 10 L11 10 L11 18" strokeDasharray="2 2" />
      <path d="M13 16 L11 18 L9 16" />
    </svg>);

}
export function DiagramMeasurement() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8">
      
      <path d="M8 36 L8 12" />
      <path d="M8 36 L40 36" />
      <path d="M12 30 L18 22 L24 26 L30 16 L36 20" />
      <circle cx="18" cy="22" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="30" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>);

}
// Section divider diagram — horizontal flow line
export function DiagramDivider() {
  return (
    <motion.div
      className="flex justify-center py-6"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.8
      }}>
      
      <svg
        viewBox="0 0 200 24"
        className="w-48 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7">
        
        <circle cx="10" cy="12" r="3" />
        <path d="M13 12 L50 12" />
        <circle cx="53" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M55 12 L90 12" />
        <rect x="90" y="7" width="20" height="10" rx="2" />
        <path d="M110 12 L145 12" />
        <circle cx="148" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M150 12 L185 12" />
        <path d="M182 9 L188 12 L182 15" />
        <circle cx="193" cy="12" r="3" />
      </svg>
    </motion.div>);

}