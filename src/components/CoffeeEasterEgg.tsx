import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, X } from 'lucide-react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
const TRIGGER = 'coffee';
const cafes = [
{
  city: 'Bali, Indonesia',
  shop: 'The St. Regis Bar',
  lat: -8.8,
  lon: 115.2
},
{
  city: 'Mumbai, India',
  shop: 'Subko Specialty Roasters',
  lat: 19.07,
  lon: 72.87
},
{
  city: 'Seattle, WA',
  shop: 'Olympia Coffee Roasting',
  lat: 47.6,
  lon: -122.33
},
{
  city: 'Indianapolis, IN',
  shop: 'The Spark Coffee',
  lat: 39.77,
  lon: -86.16
},
{
  city: 'Evanston, IL',
  shop: 'Pâtisserie Coralie',
  lat: 42.04,
  lon: -87.69
},
{
  city: 'Phuket, Thailand',
  shop: 'Hern Coffee and Bistro',
  lat: 7.88,
  lon: 98.39
},
{
  city: 'New Delhi, India',
  shop: 'Perch Coffee & Wine Bar',
  lat: 28.6,
  lon: 77.2
},
{
  city: 'Izmir, Turkey',
  shop: 'Baristocrat Alsancak',
  lat: 38.43,
  lon: 27.13
},
{
  city: 'Kathmandu, Nepal',
  shop: "Mira's Coffee",
  lat: 27.7,
  lon: 85.32
},
{
  city: 'San Francisco, CA',
  shop: 'Home Coffee Roasters',
  lat: 37.77,
  lon: -122.42
}];

const WORLD_ATLAS_URL =
'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
// Module-level cache for the topojson fetch
let worldPromise: Promise<any> | null = null;
const loadWorld = () => {
  if (!worldPromise) {
    worldPromise = fetch(WORLD_ATLAS_URL).then((r) => r.json());
  }
  return worldPromise;
};
function CoffeeMap() {
  const width = 380;
  const height = 200;
  const [countriesPath, setCountriesPath] = useState<string | null>(null);
  // Equirectangular projection centered on (0,0)
  const projection = useMemo(() => {
    return geoEquirectangular().
    scale(width / (2 * Math.PI)).
    translate([width / 2, height / 2]);
  }, [width, height]);
  const pathGen = useMemo(() => geoPath(projection as any), [projection]);
  useEffect(() => {
    let cancelled = false;
    loadWorld().
    then((topology: any) => {
      if (cancelled) return;
      const geo: any = feature(topology, topology.objects.countries);
      const d = pathGen(geo) || '';
      setCountriesPath(d);
    }).
    catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathGen]);
  // Project each café
  const points = cafes.map((c) => {
    const p = projection([c.lon, c.lat]) || [0, 0];
    return {
      ...c,
      x: p[0],
      y: p[1]
    };
  });
  // Hand-drawn connecting path following the listed order
  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    const prev = points[i - 1];
    const mx = (prev.x + p.x) / 2;
    const my = Math.min(prev.y, p.y) - 12;
    return `${acc} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
  }, '');
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto block"
      style={{
        overflow: 'visible'
      }}>
      
      {/* Faint world map outline */}
      {countriesPath &&
      <path
        d={countriesPath}
        fill="rgba(92, 42, 31, 0.06)"
        stroke="rgba(92, 42, 31, 0.28)"
        strokeWidth="0.4"
        strokeLinejoin="round"
        strokeLinecap="round" />

      }

      {/* Hand-drawn dashed travel line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#5C2A1F"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeDasharray="3 3"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1]
        }} />
      

      {/* Café dots + labels */}
      {points.map((p, i) =>
      <motion.g
        key={p.city}
        initial={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.4,
          delay: 0.25 + i * 0.13,
          ease: 'easeOut'
        }}>
        
          {/* halo */}
          <circle cx={p.x} cy={p.y} r="3.4" fill="#5C2A1F" opacity="0.12" />
          <circle cx={p.x} cy={p.y} r="1.7" fill="#5C2A1F" />
        </motion.g>
      )}
    </svg>);

}
function CafeList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mt-4">
      {cafes.map((c, i) =>
      <li key={c.city} className="flex gap-2 items-baseline">
          <span className="text-[10px] tabular-nums tracking-widest text-maroon/60 font-semibold pt-0.5 shrink-0">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="text-[11px] font-semibold text-ink leading-tight">
              {c.city}
            </p>
            <p
            className="text-[10.5px] italic text-stone-500 leading-tight"
            style={{
              fontFamily: 'Georgia, serif'
            }}>
            
              {c.shop}
            </p>
          </div>
        </li>
      )}
    </ul>);

}
export function CoffeeEasterEgg() {
  const [open, setOpen] = useState(false);
  const [buf, setBuf] = useState('');
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (
      t && (
      t.tagName === 'INPUT' ||
      t.tagName === 'TEXTAREA' ||
      t.isContentEditable))
      {
        return;
      }
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      setBuf((prev) => {
        const next = (prev + e.key.toLowerCase()).slice(-TRIGGER.length);
        if (next === TRIGGER) {
          setOpen(true);
          return '';
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <AnimatePresence>
      {open &&
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: 10,
          scale: 0.95
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="fixed bottom-6 right-6 z-[120] w-[min(520px,calc(100vw-3rem))] max-h-[calc(100vh-3rem)] overflow-y-auto bg-[var(--bg-primary)] border border-maroon/20 rounded-2xl shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)] p-6 no-print"
        role="dialog"
        aria-label="Coffee map easter egg">
        
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-maroon/10 flex items-center justify-center">
                <Coffee className="w-4 h-4 text-maroon" />
              </div>
              <div>
                <p className="luxe-caps text-maroon">An eternal coffee quest</p>
                <p
                className="text-base font-bold text-ink leading-tight mt-1"
                style={{
                  fontFamily: 'Georgia, serif'
                }}>
                
                  Cafés worth a detour
                </p>
              </div>
            </div>
            <button
            onClick={() => setOpen(false)}
            className="p-1 text-stone-400 hover:text-maroon rounded-full"
            aria-label="Close">
            
              <X className="w-4 h-4" />
            </button>
          </div>

          <CoffeeMap />

          <CafeList />

          <p className="text-[10px] italic text-stone-500 mt-4 leading-relaxed">
            Recommendations welcome — see Contact.
          </p>
        </motion.div>
      }
    </AnimatePresence>);

}