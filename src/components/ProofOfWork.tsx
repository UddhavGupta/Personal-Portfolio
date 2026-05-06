import React, { Fragment, memo } from 'react';
import { motion } from 'framer-motion';
export function ProofOfWork() {
  const items = [
  'Strategy memos',
  'Product prototypes',
  'Market maps',
  'UX flows',
  'GTM plans',
  'Data analysis',
  'Published thinking'];

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: 0.8
      }}
      className="py-5 border-y border-divider flex items-center justify-center overflow-hidden">
      
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-stone-400">
        {items.map((item, index) =>
        <Fragment key={item}>
            <span>{item}</span>
            {index < items.length - 1 &&
          <span className="text-copper/40 font-bold">·</span>
          }
          </Fragment>
        )}
      </div>
    </motion.div>);

}