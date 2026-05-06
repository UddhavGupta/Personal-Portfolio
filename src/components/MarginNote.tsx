import React from 'react';
import { motion } from 'framer-motion';
interface MarginNoteProps {
  note: string;
  align?: 'top' | 'center';
}
export function MarginNote({ note, align = 'top' }: MarginNoteProps) {
  return (
    <motion.div
      className={`hidden xl:block absolute -right-56 w-44 no-print ${align === 'center' ? 'top-12' : 'top-2'}`}
      initial={{
        opacity: 0,
        x: 8
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }}>
      
      <p className="text-[11px] leading-relaxed text-stone-500 font-medium tracking-wide border-l border-stone-400/40 pl-3 italic">
        {note}
      </p>
    </motion.div>);

}