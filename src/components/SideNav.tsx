import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const navItems = [
{
  id: 'overview',
  label: 'Overview'
},
{
  id: 'projects',
  label: 'Featured Projects'
},
{
  id: 'writing',
  label: 'Selected Thinking'
},
{
  id: 'experience',
  label: 'Experience'
},
{
  id: 'principles',
  label: 'Operating Principles'
},
{
  id: 'toolkit',
  label: 'Tools I Build With'
},
{
  id: 'testimonials',
  label: 'Testimonials'
},
{
  id: 'education',
  label: 'Education'
},
{
  id: 'elsewhere',
  label: 'Elsewhere'
},
{
  id: 'contact',
  label: 'Contact'
}];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = navItems[i].id;
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  const activeIndex = navItems.findIndex((item) => item.id === activeSection);
  return (
    <>
      {/* Monogram trigger — fixed top-left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 group no-print"
        aria-label="Open navigation">
        
        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-maroon/30 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm transition-all duration-500 group-hover:border-maroon group-hover:shadow-[0_4px_20px_-4px_rgba(92,42,31,0.25)]">
            <span className="font-display-name text-maroon text-xl sm:text-2xl leading-none -mt-0.5 tracking-tight">
              UG
            </span>
          </div>
          {/* Tiny page indicator dot */}
          <div className="absolute -bottom-1 -right-1 px-1 h-4 min-w-[16px] rounded-full bg-[var(--bg-primary)] border border-maroon flex items-center justify-center">
            <span className="text-[8px] font-bold text-maroon leading-none tabular-nums tracking-tight">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </button>

      {/* Page numbers down the side — magazine style */}
      <div className="hidden lg:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 gap-2 no-print z-30">
        {navItems.map((item, idx) =>
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={item.label}>
          
            <span
            className={`luxe-caps transition-all duration-300 ${activeSection === item.id ? 'opacity-100 text-maroon' : 'opacity-0 group-hover:opacity-70 text-stone-500'}`}
            style={{
              fontSize: '0.6rem'
            }}>
            
              {item.label}
            </span>
            <span
            className={`text-[10px] tabular-nums tracking-wider transition-all duration-300 ${activeSection === item.id ? 'text-maroon font-medium' : 'text-stone-400 group-hover:text-stone-600'}`}>
            
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span
            className={`block h-px transition-all duration-500 ${activeSection === item.id ? 'w-6 bg-maroon' : 'w-3 bg-stone-300 group-hover:w-5 group-hover:bg-stone-500'}`} />
          
          </button>
        )}
      </div>

      {/* Slide-over nav panel */}
      <AnimatePresence>
        {isOpen &&
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 no-print"
            onClick={() => setIsOpen(false)} />
          
            <motion.nav
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100%'
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            onMouseLeave={() => setIsOpen(false)}
            className="fixed top-0 left-0 h-full w-full sm:w-80 bg-[var(--bg-primary)] z-40 no-print border-r border-maroon/15 luxe-card overflow-y-auto">
            
              <div className="p-8 sm:p-10 pt-28">
                <p
                className="luxe-caps text-stone-400 mb-8"
                style={{
                  fontSize: '0.6rem'
                }}>
                
                  Index
                </p>
                <ul className="space-y-1">
                  {navItems.map((item, idx) =>
                <li key={item.id}>
                      <button
                    onClick={() => scrollTo(item.id)}
                    className={`group w-full text-left py-2 flex items-baseline gap-4 transition-colors duration-300 ${activeSection === item.id ? 'text-maroon' : 'text-stone-500 hover:text-ink'}`}>
                    
                        <span className="text-[10px] tabular-nums text-stone-400 group-hover:text-maroon/60 transition-colors w-6">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-serif-display text-lg italic font-light">
                          {item.label}
                        </span>
                      </button>
                    </li>
                )}
                </ul>

                <div className="mt-12 pt-8 border-t border-maroon/15">
                  <p
                  className="luxe-caps text-stone-400 mb-3"
                  style={{
                    fontSize: '0.6rem'
                  }}>
                  
                    Uddhav Gupta
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed font-light italic">
                    Product · Strategy · Design
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        }
      </AnimatePresence>
    </>);

}