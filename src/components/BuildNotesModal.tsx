import React, { useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface BuildNotesModalProps {
  open: boolean;
  onClose: () => void;
}
const quickFacts = [
{
  label: 'Built with',
  value: 'Magic Patterns, GitHub, Vercel, Cloudflare DNS'
},
{
  label: 'Iterations',
  value: '69'
},
{
  label: 'Timeline',
  value: 'Approximately 5 hours for the core concept'
},
{
  label: 'Purpose',
  value: 'Show product judgment, builder ability, taste, and operating range'
},
{
  label: 'Deployment',
  value: 'Synced to GitHub, deployed on Vercel, connected to guptau.com'
}];

const productDecisions = [
'Moved projects and selected thinking above experience to lead with proof of work, not chronology.',
'Kept the design editorial and restrained rather than making it feel like a generic SaaS landing page.',
'Added operating principles to show working style after the reader has seen the evidence.',
'Used photography, food, and global references to add personality without overwhelming the professional narrative.',
'Added GitHub, Resume, Substack, LinkedIn, and product links as clear next actions.'];

const cuts = [
'Long LinkedIn-style experience descriptions',
'Overly broad activity lists',
'Full personal manifesto language',
'Excessive animations and decorative effects',
'Anything that made the site feel like a resume archive instead of a proof-of-work portfolio'];

const nextSteps = [
'Add deeper case studies for OrbitCRM and AI Talent OS',
'Add a short walkthrough video',
'Continue improving mobile responsiveness and performance',
'Add better project-specific GitHub/build notes where relevant'];

export function BuildNotesModal({ open, onClose }: BuildNotesModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          onClick={onClose} />
        
          <div className="fixed inset-0 z-[101] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
            <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Build Notes: Personal Portfolio System"
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.98
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-[var(--bg-primary)] w-full max-w-3xl my-8 sm:my-0 rounded-2xl border border-maroon/15 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)] pointer-events-auto relative">
            
              <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-maroon hover:bg-stone-100 rounded-full transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close build notes">
              
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 lg:p-14 max-h-[88vh] overflow-y-auto">
                {/* Header */}
                <p className="luxe-caps text-maroon mb-4">Build Notes</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink leading-tight mb-4">
                  Personal Portfolio System
                </h2>
                <p className="text-base text-stone-600 leading-relaxed italic max-w-2xl">
                  A proof-of-work site built to bring scattered resumes, decks,
                  prototypes, essays, and links into one coherent product-style
                  portfolio.
                </p>

                <div className="mt-10 pt-8 border-t border-ink-subtle/40 space-y-10">
                  {/* Overview */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                      Overview
                    </p>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      I rebuilt this site as a small proof-of-work project, not
                      just a cleaner portfolio. The goal was to practice the
                      full loop: idea, structure, design, build, deploy, and
                      connect to a custom domain.
                    </p>
                  </section>

                  {/* Quick Facts */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                      Quick Facts
                    </p>
                    <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-6 gap-y-3">
                      {quickFacts.map((f) =>
                    <Fragment key={f.label}>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-maroon/80">
                            {f.label}
                          </dt>
                          <dd className="text-sm text-stone-700 leading-relaxed">
                            {f.value}
                          </dd>
                        </Fragment>
                    )}
                    </dl>
                  </section>

                  {/* Problem */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                      Problem
                    </p>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      My work was scattered across resumes, decks, prototypes,
                      essays, LinkedIn, and project notes. That made it harder
                      for recruiters, operators, and collaborators to quickly
                      understand the through-line: product-minded operator,
                      AI/CX/growth work, builder orientation, and strong
                      writing.
                    </p>
                  </section>

                  {/* What I Built */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                      What I Built
                    </p>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      A personal portfolio system that brings together featured
                      projects, selected writing, experience, operating
                      principles, tools, testimonials, education, and personal
                      texture in one navigable experience.
                    </p>
                  </section>

                  {/* Product Decisions */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                      Product Decisions
                    </p>
                    <ul className="space-y-3">
                      {productDecisions.map((d, i) =>
                    <li key={i} className="flex gap-4">
                          <span className="text-xs tabular-nums tracking-widest font-semibold text-maroon/70 pt-1 shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="text-sm text-stone-700 leading-relaxed">
                            {d}
                          </p>
                        </li>
                    )}
                    </ul>
                  </section>

                  {/* What I Cut */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                      What I Cut
                    </p>
                    <ul className="space-y-2">
                      {cuts.map((c) =>
                    <li
                      key={c}
                      className="text-sm text-stone-700 leading-relaxed pl-4 border-l-2 border-stone-200">
                      
                          {c}
                        </li>
                    )}
                    </ul>
                  </section>

                  {/* What I'd Improve */}
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
                      What I'd Improve Next
                    </p>
                    <ul className="space-y-2">
                      {nextSteps.map((s) =>
                    <li
                      key={s}
                      className="text-sm text-stone-700 leading-relaxed pl-4 border-l-2 border-copper/30">
                      
                          {s}
                        </li>
                    )}
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      }
    </AnimatePresence>);

}