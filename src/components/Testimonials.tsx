import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Archive,
  LayoutList } from
'lucide-react';
const CAROUSEL_INTERVAL = 4000;
const STACK_INTERVAL = 5000;
const testimonials = [
{
  text: 'You "punch above your weight class." I love how eager you are to jump in and challenge yourself. Your work supporting our sales process, leading it, but also dealing with radically different opinions and approaches is really impressive. You go with the flow when that\'s the right call, and then educate your colleagues when you need people to follow your lead. It\'s a difficult balance to strike and you do it with grace.'
},
{
  text: 'You have incredible talents and think like an investor. I am grateful for all that you put into Parker Remick and supporting others so much. You are a gifted person in your communication, your analytical skills, and your presentation. You help other people first and yourself last. Thank you for being a great colleague and friend.'
},
{
  text: "Uddhav's ability to identify, scope, and action on an improvement opportunity is incredible. Since jumping into more formally supporting our BD efforts, Uddhav has elevated our GTM capabilities in multiple ways."
},
{
  text: "Uddhav is a machine. He's so productive and efficient. He's so capable across many dimensions. He's made material contributions to our BD effort. He gets this business. I foresee him making great strides in the coming year. I appreciate seeing him get better at his craft."
},
{
  text: 'The way you handle pressure and maintain a calm demeanor is impressive. It sets a great example for the rest of us!'
},
{
  text: "Uddhav strikes the perfect balance between work-serious and sociable-fun. He'll bring the productive, polished, work focus, and also the on-the-mark jokes and stories to keep it fun. The best energy: having fun, and getting it done."
}];

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0
  })
};
function TimerDot({
  isActive,
  isPaused,
  onClick,
  index,
  duration,
  timerKey







}: {isActive: boolean;isPaused: boolean;onClick: () => void;index: number;duration: number;timerKey: number;}) {
  const radius = 5;
  const circumference = 2 * Math.PI * radius;
  return (
    <button
      onClick={onClick}
      className="p-1 group"
      aria-label={`Go to testimonial ${index + 1}`}>
      
      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
        <circle
          cx="8"
          cy="8"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={
          isActive ?
          'text-stone-200' :
          'text-stone-200 group-hover:text-stone-300 transition-colors'
          } />
        
        {isActive &&
        <circle
          key={timerKey}
          cx="8"
          cy="8"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-copper"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          transform="rotate(-90 8 8)"
          style={{
            animation: isPaused ?
            'none' :
            `timer-fill ${duration}ms linear forwards`
          }} />

        }
        <circle
          cx="8"
          cy="8"
          r={isActive ? 1.5 : 1}
          fill="currentColor"
          className={
          isActive ?
          'text-copper' :
          'text-stone-300 group-hover:text-stone-400 transition-colors'
          } />
        
      </svg>
    </button>);

}
function PolaroidStack({ onExitToCarousel }: {onExitToCarousel: () => void;}) {
  const [top, setTop] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const advance = useCallback(() => {
    setTop((t) => (t + 1) % testimonials.length);
    setTimerKey((k) => k + 1);
  }, []);
  const goTo = useCallback((index: number) => {
    setTop(index);
    setTimerKey((k) => k + 1);
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(advance, STACK_INTERVAL);
    return () => clearInterval(id);
  }, [advance, isPaused]);
  // Show top 3 cards (looping)
  const visible = [0, 1, 2].map((offset) => {
    const idx = (top + offset) % testimonials.length;
    return {
      ...testimonials[idx],
      originalIndex: idx,
      depth: offset
    };
  });
  const stackStyle = (depth: number, originalIndex: number) => {
    const seed = originalIndex * 37 % 7;
    const baseRot = (seed - 3) * 1.6;
    const dx = (seed - 3) * 3;
    return {
      rotate: baseRot - depth * 1.2,
      x: dx - depth * 4,
      y: depth * 6,
      scale: 1 - depth * 0.03,
      zIndex: 100 - depth
    };
  };
  const handleDragEnd = (info: {
    offset: {
      x: number;
      y: number;
    };
    velocity: {
      x: number;
      y: number;
    };
  }) => {
    const dist = Math.hypot(info.offset.x, info.offset.y);
    const vel = Math.hypot(info.velocity.x, info.velocity.y);
    if (dist > 120 || vel > 600) {
      advance();
    }
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <p className="text-xs text-stone-500 italic">
          Drag or flick a card to dismiss. Cards loop back into the stack.
        </p>
        <button
          onClick={onExitToCarousel}
          className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold text-stone-500 hover:text-maroon transition-colors px-3 py-2 rounded-full border border-ink-subtle/60">
          
          <LayoutList className="w-3.5 h-3.5" />
          Carousel
        </button>
      </div>

      <div className="relative h-[420px] sm:h-[380px] flex items-start justify-center">
        <AnimatePresence mode="popLayout">
          {visible.
          slice().
          reverse().
          map((t) => {
            const s = stackStyle(t.depth, t.originalIndex);
            const isTop = t.depth === 0;
            return (
              <motion.div
                key={t.originalIndex}
                drag={isTop}
                dragConstraints={{
                  left: -400,
                  right: 400,
                  top: -200,
                  bottom: 200
                }}
                dragElastic={0.6}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(_, info) => handleDragEnd(info as any)}
                initial={{
                  opacity: 0,
                  y: s.y + 24,
                  scale: s.scale - 0.04,
                  rotate: s.rotate,
                  x: s.x
                }}
                animate={{
                  opacity: 1,
                  rotate: s.rotate,
                  x: s.x,
                  y: s.y,
                  scale: s.scale
                }}
                exit={{
                  opacity: 0,
                  x: 420,
                  y: -40,
                  rotate: 24,
                  transition: {
                    duration: 0.45,
                    ease: [0.6, 0, 0.85, 0.4]
                  }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26
                }}
                style={{
                  zIndex: s.zIndex
                }}
                whileDrag={{
                  cursor: 'grabbing',
                  scale: s.scale + 0.02
                }}
                className={`absolute top-0 w-[280px] sm:w-[340px] bg-white border border-stone-200 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.18)] p-5 pb-10 rounded-sm ${isTop ? 'cursor-grab' : 'pointer-events-none'}`}>
                
                  <Quote className="w-4 h-4 text-copper/50 mb-3" />
                  <p
                  className="text-[13px] sm:text-sm text-ink leading-relaxed"
                  style={{
                    fontFamily: 'Georgia, serif'
                  }}>
                  
                    "{t.text}"
                  </p>
                  <p
                  className="absolute bottom-3 right-5 text-[10px] uppercase tracking-widest text-stone-400 font-medium"
                  style={{
                    fontFamily: 'Georgia, serif'
                  }}>
                  
                    №{String(t.originalIndex + 1).padStart(2, '0')}
                  </p>
                </motion.div>);

          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-1 mt-2">
        {testimonials.map((_, index) =>
        <TimerDot
          key={index}
          isActive={index === top}
          isPaused={isPaused}
          onClick={() => goTo(index)}
          index={index}
          duration={STACK_INTERVAL}
          timerKey={timerKey} />

        )}
      </div>
    </div>);

}
export function Testimonials() {
  const [view, setView] = useState<'stack' | 'carousel'>('stack');
  // Carousel state
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setTimerKey((k) => k + 1);
    },
    [current]
  );
  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimerKey((k) => k + 1);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimerKey((k) => k + 1);
  }, []);
  useEffect(() => {
    if (isPaused || view !== 'carousel') return;
    const timer = setInterval(next, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused, view]);
  return (
    <section id="testimonials" className="py-10">
      <style>{`
        @keyframes timer-fill {
          from { stroke-dashoffset: ${2 * Math.PI * 5}; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

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
        
        <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold mb-2">What People Say</h2>
            <p className="text-sm text-stone-400 italic">
              Verbatim feedback from performance reviews and colleagues.
            </p>
          </div>

          {view === 'carousel' &&
          <div className="flex items-center gap-2">
              <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-ink-subtle flex items-center justify-center text-stone-400 hover:text-ink hover:border-stone-300 transition-colors"
              aria-label="Previous testimonial">
              
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-ink-subtle flex items-center justify-center text-stone-400 hover:text-ink hover:border-stone-300 transition-colors"
              aria-label="Next testimonial">
              
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
              onClick={() => setView('stack')}
              className="ml-1 w-8 h-8 rounded-full border border-ink-subtle flex items-center justify-center text-stone-400 hover:text-maroon hover:border-maroon/40 transition-colors"
              aria-label="Open archive (polaroid stack)"
              title="Polaroid stack">
              
                <Archive className="w-3.5 h-3.5" />
              </button>
            </div>
          }
        </div>

        {view === 'carousel' ?
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          
            <div className="min-h-[180px] sm:min-h-[140px] flex items-start">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                key={current}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: 'spring',
                    stiffness: 250,
                    damping: 30
                  },
                  opacity: {
                    duration: 0.3
                  }
                }}
                className="w-full bg-card p-8 sm:p-10 rounded-2xl border border-ink-subtle">
                
                  <Quote className="w-5 h-5 text-copper/40 mb-4" />
                  <p className="text-base sm:text-lg text-ink leading-relaxed font-medium">
                    "{testimonials[current].text}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-1 mt-6">
              {testimonials.map((_, index) =>
            <TimerDot
              key={index}
              isActive={index === current}
              isPaused={isPaused}
              onClick={() => goTo(index)}
              index={index}
              duration={CAROUSEL_INTERVAL}
              timerKey={timerKey} />

            )}
            </div>
          </div> :

        <PolaroidStack onExitToCarousel={() => setView('carousel')} />
        }
      </motion.div>
    </section>);

}