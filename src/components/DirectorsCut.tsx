import React, { useEffect, useState, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Film } from 'lucide-react';
/**
 * Konami code → unlocks Director's Cut mode.
 * Sequence: ↑ ↑ ↓ ↓ ← → ← → b a
 *
 * When active:
 * - A small "Director's Cut" badge sits in the bottom-left
 * - A side panel shows commentary for the section currently in view
 * - Each section is annotated with a tasteful margin note from the author
 */
type Note = {
  id: string;
  title: string;
  body: string;
};
const NOTES: Note[] = [
{
  id: 'overview',
  title: 'Hero',
  body: "I wanted the first 600ms to feel like opening a hardcover book — Bodoni Moda for the name (high-contrast Didone, luxury feel), maroon as a singular accent so nothing competes with the typography. The coin-toss on the portrait is a wink: I don't take myself too seriously."
},
{
  id: 'projects',
  title: 'Featured Projects',
  body: 'Three equal cards on one row — deliberately no tags, no "what it proves," no modals. Proof-of-work should be self-evident. The Build Notes overlay on the portfolio card is the one place I let myself show the seams.'
},
{
  id: 'writing',
  title: 'Selected Thinking',
  body: "Renamed from 'Writing' because that framed it as content — this is selected thinking. No left-border quote treatment, no tags. The reader should feel like they're choosing what to read next, not being marketed to."
},
{
  id: 'experience',
  title: 'Experience',
  body: "Two tiers on purpose. Tier 1 (Chime, Uber, GO ICON, Parker Remick, NovoEd) gets full editorial treatment because those are the stories worth telling. Tier 2 is honest about being 'also true.' Everything past tense — present-tense résumés age badly."
},
{
  id: 'principles',
  title: 'Operating Principles',
  body: "A quiet 2×2 grid. I almost cut this section three times — it risks sounding self-important. It earned its spot because hiring managers consistently ask 'how do you actually work,' and the answer deserves more than a LinkedIn About blurb."
},
{
  id: 'toolkit',
  title: 'Tools I Build With',
  body: "Renamed from 'Operating Toolkit' because the original sounded like consulting-speak. 'Tools I Build With' makes the claim sharper — I ship with these, not just talk about them."
},
{
  id: 'testimonials',
  title: 'Testimonials',
  body: 'Polaroid stack as the default view, not the carousel. A stack of physical-feeling objects you can flick through is more memorable than another auto-rotating quote slider. 5-second auto-cycle so it stays alive, looping so nothing feels closed off.'
},
{
  id: 'education',
  title: 'Education',
  body: 'Most portfolios bury education. I gave it real estate because the Kellogg + CMC combination is part of the story — and the leadership roles (VP Alumni, Co-chair, Admissions Interviewer) are proof that I show up for institutions I care about, not just optimize them on a résumé.'
},
{
  id: 'elsewhere',
  title: 'Elsewhere',
  body: "The globe uses real country outlines via d3-geo and world-atlas — not stylized blobs. Hold Shift over it to see where I've lived. I wanted geography to feel like data, not decoration."
},
{
  id: 'contact',
  title: 'Contact',
  body: 'The only dark surface on the site. A warm off-white portfolio that ends on a deep maroon card creates a tactile transition — like closing the cover. The animated signature is hand-drawn SVG, not a font.'
}];

const KONAMI = [
'ArrowUp',
'ArrowUp',
'ArrowDown',
'ArrowDown',
'ArrowLeft',
'ArrowRight',
'ArrowLeft',
'ArrowRight',
'b',
'a'];

// Easier shortcut: type "director" anywhere
const WORD_TRIGGER = 'director';
export function DirectorsCut() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string>('overview');
  const [justUnlocked, setJustUnlocked] = useState(false);
  const seq = useRef<string[]>([]);
  const wordBuf = useRef<string>('');
  // Listen for the konami sequence OR the "director" word trigger
  useEffect(() => {
    const unlock = () => {
      seq.current = [];
      wordBuf.current = '';
      setActive(true);
      setOpen(true);
      setJustUnlocked(true);
      setTimeout(() => setJustUnlocked(false), 2400);
    };
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
      target && (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable))
      {
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      // Konami arrow sequence
      seq.current = [...seq.current, key].slice(-KONAMI.length);
      if (seq.current.join(',') === KONAMI.join(',')) {
        unlock();
        return;
      }
      // Word trigger — buffer recent letters and match "director"
      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        wordBuf.current = (wordBuf.current + e.key.toLowerCase()).slice(
          -WORD_TRIGGER.length
        );
        if (wordBuf.current === WORD_TRIGGER) {
          unlock();
        }
      } else {
        wordBuf.current = '';
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  // Track which section is in view
  useEffect(() => {
    if (!active) return;
    const observers: IntersectionObserver[] = [];
    NOTES.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setCurrentId(n.id);
            }
          });
        },
        {
          threshold: [0.3, 0.6]
        }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [active]);
  if (!active) return null;
  const current = NOTES.find((n) => n.id === currentId) ?? NOTES[0];
  return (
    <>
      {/* Just-unlocked toast */}
      <AnimatePresence>
        {justUnlocked &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 10
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="fixed left-1/2 -translate-x-1/2 top-8 z-[10000] no-print">
          
            <div
            className="px-5 py-3 rounded-full flex items-center gap-2.5 shadow-lg"
            style={{
              backgroundColor: '#3D1A14',
              border: '1px solid rgba(200, 169, 119, 0.35)',
              color: '#F5EFE6'
            }}>
            
              <Film
              className="w-3.5 h-3.5"
              style={{
                color: '#C8A977'
              }} />
            
              <span
              className="luxe-caps text-[10px]"
              style={{
                color: '#C8A977'
              }}>
              
                Director's Cut · Unlocked
              </span>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Persistent badge */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 left-5 z-[9998] no-print group"
        aria-label={
        open ?
        'Hide Director\u2019s Cut commentary' :
        'Show Director\u2019s Cut commentary'
        }>
        
        <div
          className="flex items-center gap-2 px-3.5 py-2 rounded-full shadow-md transition-all group-hover:translate-y-[-1px]"
          style={{
            backgroundColor: '#3D1A14',
            border: '1px solid rgba(200, 169, 119, 0.3)',
            color: '#F5EFE6'
          }}>
          
          <Film
            className="w-3 h-3"
            style={{
              color: '#C8A977'
            }} />
          
          <span
            className="luxe-caps text-[9px]"
            style={{
              color: '#C8A977',
              letterSpacing: '0.25em'
            }}>
            
            Director's Cut
          </span>
        </div>
      </button>

      {/* Commentary panel */}
      <AnimatePresence>
        {open &&
        <motion.aside
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: -20
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="fixed bottom-20 left-5 z-[9998] w-[320px] max-w-[calc(100vw-2.5rem)] no-print">
          
            <div
            className="relative rounded-2xl p-5 pr-10 shadow-xl"
            style={{
              backgroundColor: '#3D1A14',
              border: '1px solid rgba(200, 169, 119, 0.25)',
              backgroundImage:
              'radial-gradient(ellipse at top right, rgba(200,169,119,0.08), transparent 60%)'
            }}>
            
              <button
              onClick={() => setOpen(false)}
              aria-label="Close commentary"
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/5 transition-colors"
              style={{
                color: 'rgba(245, 239, 230, 0.6)'
              }}>
              
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <Film
                className="w-3 h-3"
                style={{
                  color: '#C8A977'
                }} />
              
                <span
                className="luxe-caps text-[9px]"
                style={{
                  color: '#C8A977',
                  letterSpacing: '0.3em'
                }}>
                
                  Director's Cut
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                key={current.id}
                initial={{
                  opacity: 0,
                  y: 6
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -6
                }}
                transition={{
                  duration: 0.25
                }}>
                
                  <h3
                  className="font-display-name text-xl mb-2 leading-tight"
                  style={{
                    color: '#F5EFE6'
                  }}>
                  
                    {current.title}
                  </h3>
                  <p
                  className="text-[13px] leading-relaxed font-light italic"
                  style={{
                    color: 'rgba(245, 239, 230, 0.78)',
                    fontFamily: 'Georgia, serif'
                  }}>
                  
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div
              className="mt-4 pt-3 flex items-center justify-between text-[10px]"
              style={{
                borderTop: '1px solid rgba(200, 169, 119, 0.15)',
                color: 'rgba(245, 239, 230, 0.45)'
              }}>
              
                <span
                className="luxe-caps"
                style={{
                  fontSize: '0.55rem'
                }}>
                
                  Scroll to advance
                </span>
                <span className="font-mono tracking-widest">
                  {String(
                  NOTES.findIndex((n) => n.id === currentId) + 1
                ).padStart(2, '0')}{' '}
                  / {String(NOTES.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </motion.aside>
        }
      </AnimatePresence>
    </>);

}