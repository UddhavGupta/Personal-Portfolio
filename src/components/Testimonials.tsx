import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
const INTERVAL = 4000;
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

const variants = {
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
// Circular timer indicator
function TimerDot({
  isActive,
  isPaused,
  onClick,
  index





}: {isActive: boolean;isPaused: boolean;onClick: () => void;index: number;}) {
  const radius = 5;
  const circumference = 2 * Math.PI * radius;
  return (
    <button
      onClick={onClick}
      className="p-1 group"
      aria-label={`Go to testimonial ${index + 1}`}>
      
      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
        {/* Background circle */}
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
        
        {/* Timer arc — only on active dot */}
        {isActive &&
        <circle
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
            `timer-fill ${INTERVAL}ms linear forwards`
          }} />

        }
        {/* Center dot */}
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
export function Testimonials() {
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
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);
  return (
    <section id="testimonials" className="py-16">
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
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">What People Say</h2>
            <p className="text-sm text-stone-400 italic">
              Verbatim feedback from performance reviews and colleagues.
            </p>
          </div>

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
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          
          <div className="min-h-[180px] sm:min-h-[140px] flex items-start">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
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
        </div>

        {/* Rotary timer dots */}
        <div
          className="flex items-center justify-center gap-1 mt-6"
          key={timerKey}>
          
          {testimonials.map((_, index) =>
          <TimerDot
            key={`${index}-${timerKey}`}
            isActive={index === current}
            isPaused={isPaused}
            onClick={() => goTo(index)}
            index={index} />

          )}
        </div>
      </motion.div>
    </section>);

}