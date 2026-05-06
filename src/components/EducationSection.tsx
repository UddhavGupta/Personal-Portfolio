import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
export function EducationSection() {
  return (
    <section id="education" className="py-16">
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
        
        <h2 className="text-2xl font-bold mb-10">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kellogg */}
          <motion.div
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
              duration: 0.5
            }}
            className="relative pl-6 border-l-2 border-copper/20">
            
            <div className="absolute w-2 h-2 bg-copper rounded-full -left-[5px] top-2" />
            <h3 className="text-lg font-bold text-ink mb-1">
              Kellogg School of Management
            </h3>
            <p className="text-sm text-stone-500 font-medium">
              MBA in Marketing, Finance, and Technology Management
            </p>
            <p className="text-sm text-stone-400 mb-3">Evanston, Illinois</p>
            <p className="text-sm text-ink leading-relaxed mb-4">
              Dean's List.
            </p>

            <div className="space-y-1.5">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">
                Leadership
              </p>
              <p className="text-sm text-ink leading-relaxed">
                VP of Alumni Relations, Kellogg Student Association (KSA)
              </p>
              <p className="text-sm text-ink leading-relaxed">
                Co-chair, Entrepreneurship Conference
              </p>
              <p className="text-sm text-ink leading-relaxed">
                Admissions Interviewer
              </p>
            </div>
          </motion.div>

          {/* Claremont McKenna */}
          <motion.div
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
              duration: 0.5,
              delay: 0.2
            }}
            className="relative pl-6 border-l-2 border-stone-200">
            
            <div className="absolute w-2 h-2 bg-stone-300 rounded-full -left-[5px] top-2" />
            <h3 className="text-lg font-bold text-ink mb-1">
              Claremont McKenna College
            </h3>
            <p className="text-sm text-stone-500 font-medium">
              B.A. Economics & Psychology
            </p>
            <p className="text-sm text-stone-400 mb-3">Claremont, California</p>
            <p className="text-sm text-ink leading-relaxed mb-4">
              Concentration in Accounting.
            </p>

            <div className="space-y-1.5 mb-5">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">
                Leadership
              </p>
              <p className="text-sm text-ink leading-relaxed">
                Research Fellow, Kravis Leadership Institute
              </p>
            </div>

            <div className="pt-4 border-t border-ink-subtle/40">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-2">
                Senior Thesis
              </p>
              <p className="text-sm font-semibold text-ink leading-snug mb-1">
                Culturally Versatile Leadership
              </p>
              <p className="text-sm text-stone-600 leading-relaxed italic mb-3">
                Open-access thesis on global managerial leadership,
                cross-cultural leadership, and the capabilities required to lead
                in an integrated world.
              </p>
              <a
                href="https://scholarship.claremont.edu/cmc_theses/2560/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors">
                
                Read thesis
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>);

}