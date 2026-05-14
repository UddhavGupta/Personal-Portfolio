import React, { useCallback, useEffect, useState, useRef, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Globe } from './Globe';
const photography = [
{
  url: "/Screenshot_2026-05-04_at_12.01.48_AM.png",
  caption: 'Spangled Cotinga',
  span: 'col-span-1 row-span-1'
},
{
  url: "/Screenshot_2026-05-04_at_12.01.19_AM.png",
  caption: 'Chihuly Garden, Seattle',
  span: 'col-span-1 row-span-2'
},
{
  url: "/Screenshot_2026-05-04_at_12.01.32_AM.png",
  caption: 'Blue Angels, formation',
  span: 'col-span-1 row-span-1'
},
{
  url: "/Screenshot_2026-05-03_at_11.59.58_PM.png",
  caption: 'Delicate Arch, Milky Way',
  span: 'col-span-1 row-span-1'
},
{
  url: "/Screenshot_2026-05-04_at_12.00.21_AM.png",
  caption: 'Grid start, track day',
  span: 'col-span-1 row-span-1'
},
{
  url: "/Screenshot_2026-05-04_at_12.00.49_AM.png",
  caption: 'Light painting, guitar',
  span: 'col-span-2 row-span-1'
},
{
  url: "/Screenshot_2026-05-04_at_12.00.32_AM.png",
  caption: 'Cherry blossoms, UW',
  span: 'col-span-1 row-span-1'
}];

const culinary = [
{
  url: "/Screenshot_2026-05-04_at_12.06.24_AM.png",
  caption: 'Paneer masala, from scratch'
},
{
  url: "/Screenshot_2026-05-04_at_12.06.38_AM.png",
  caption: 'Woodford Reserve, old fashioned'
},
{
  url: "/Screenshot_2026-05-04_at_12.06.44_AM.png",
  caption: 'Chia pudding, berry bowl'
},
{
  url: "/Screenshot_2026-05-04_at_12.06.51_AM.png",
  caption: 'Oat pancakes, blueberry pecan'
},
{
  url: "/Screenshot_2026-05-04_at_12.07.09_AM.png",
  caption: 'Crispy tofu board & smoothies'
},
{
  url: "/Screenshot_2026-05-04_at_12.07.29_AM.png",
  caption: 'Mediterranean bowl, bulgur & chickpea'
},
{
  url: "/Screenshot_2026-05-04_at_12.07.20_AM.png",
  caption: 'Crispy fritters, arugula & dill yogurt'
}];

function Lightbox({
  img,
  onClose






}: {img: {url: string;caption: string;} | null;onClose: () => void;}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);
  if (!img) return null;
  return (
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
        duration: 0.25
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-default"
      onClick={onClose}>
      
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
        aria-label="Close lightbox">
        
        <XIcon size={22} />
      </button>
      <motion.div
        initial={{
          scale: 0.92,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        exit={{
          scale: 0.92,
          opacity: 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}>
        
        <img
          src={img.url}
          alt={img.caption}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
        
        <p className="mt-3 text-sm text-white/70 tracking-wide font-medium">
          {img.caption}
        </p>
      </motion.div>
    </motion.div>);

}
function ImageCard({
  img,
  index,
  span,
  onClick








}: {img: {url: string;caption: string;};index: number;span?: string;onClick: () => void;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06
      }}
      className={`relative overflow-hidden rounded-xl border border-ink-subtle group cursor-pointer ${span || ''}`}
      onClick={onClick}>
      
      <img
        src={img.url}
        alt={img.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-[11px] font-medium text-white/90 tracking-wide">
          {img.caption}
        </p>
      </div>
    </motion.div>);

}
export function Elsewhere() {
  const [lightboxImg, setLightboxImg] = useState<{
    url: string;
    caption: string;
  } | null>(null);
  const VISIBLE = 5;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % culinary.length);
    }, 3500);
  }, []);
  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);
  const goNext = () => {
    setCarouselIndex((prev) => (prev + 1) % culinary.length);
    resetInterval();
  };
  const goPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + culinary.length) % culinary.length);
    resetInterval();
  };
  const getVisibleCulinary = () => {
    const items = [];
    for (let i = 0; i < VISIBLE; i++) {
      items.push(culinary[(carouselIndex + i) % culinary.length]);
    }
    return items;
  };
  return (
    <section id="elsewhere" className="py-16">
      <AnimatePresence>
        {lightboxImg &&
        <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
        }
      </AnimatePresence>

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
        
        <div className="flex items-start justify-between gap-6 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Elsewhere</h2>
            <p className="text-sm text-stone-400 italic max-w-2xl">
              22 countries, 850 restaurant reviews, a camera since age 11, piano
              since age 7, an eternal coffee quest, and an insatiable love for
              learning about everything.
            </p>
          </div>
          <Globe size={120} />
        </div>

        {/* Photography */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5">
            Photography
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[160px] sm:auto-rows-[180px]">
            {photography.map((img, index) =>
            <ImageCard
              key={index}
              img={img}
              index={index}
              span={img.span}
              onClick={() => setLightboxImg(img)} />

            )}
          </div>
        </div>

        {/* Culinary Adventures */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5">
            Culinary Adventures
          </h3>
          <div className="relative group/carousel">
            <button
              onClick={goPrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 border border-stone-200 shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
              aria-label="Previous">
              
              <ChevronLeftIcon size={16} className="text-stone-600" />
            </button>
            <button
              onClick={goNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 border border-stone-200 shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
              aria-label="Next">
              
              <ChevronRightIcon size={16} className="text-stone-600" />
            </button>
            <div className="grid grid-cols-5 gap-0 overflow-hidden rounded-xl border border-ink-subtle">
              <AnimatePresence mode="popLayout">
                {getVisibleCulinary().map((img, i) =>
                <motion.div
                  key={img.url}
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative aspect-square overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxImg(img)}>
                  
                    <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[11px] font-medium text-white/90 tracking-wide">
                        {img.caption}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>);

}