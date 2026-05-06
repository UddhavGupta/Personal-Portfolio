import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const writings = [
{
  title: 'Be One Percent Better',
  thesis:
  'A newsletter on AI, growth, product judgment, and the operating habits behind compounding improvement.',
  link: 'https://beonepercentbetter.substack.com/',
  linkText: 'Check it out'
},
{
  title: 'AI-Driven Personalization & Loyalty',
  thesis:
  "White paper co-authored with Venkat Atluri (McKinsey Senior Partner) and Tom O'Toole (former CMO, United / President, MileagePlus) on how AI could reshape loyalty, personalization, customer engagement, and the future of platform-led growth.",
  link: 'https://beonepercentbetter.substack.com/p/21-productizing-loyalty-in-the-age',
  linkText: 'Check it out'
},
{
  title: 'Redesigning Launching New Products & Services',
  thesis:
  'Modernized a flagship Kellogg product launch course for the AI era, integrating prototyping, UGC analysis, and milestone-based execution so students move from idea to insight to prototype to GTM plan.',
  link: 'https://www6.kellogg.northwestern.edu/CourseCatalog/coursecatalog/coursedetail?coursecatalogid=205521',
  linkText: 'Check it out'
}];

export function Writing() {
  return (
    <section id="writing" className="py-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6
        }}>
        
        <h2 className="text-2xl font-bold mb-2">Selected Thinking</h2>
        <p className="text-sm text-stone-500 italic mb-10 max-w-2xl">
          Essays, research, and course design work on AI, loyalty, product
          judgment, and GTM.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writings.map((item, index) =>
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="group flex flex-col bg-card p-6 sm:p-7 rounded-2xl border border-ink-subtle lg:hover:border-copper/30 lg:hover:-translate-y-1 lg:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-300">
            
              <h3 className="text-lg font-bold text-ink mb-5 leading-snug group-hover:text-maroon transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed flex-grow">
                {item.thesis}
              </p>

              {item.link &&
            <div className="mt-6 pt-5 border-t border-ink-subtle/40">
                  <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors min-h-[44px]">
                
                    {item.linkText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
            }
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}