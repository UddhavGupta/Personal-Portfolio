import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
interface GlobeProps {
  size?: number;
}
// Numeric country IDs (UN M49) in world-atlas countries-110m
const LIVED_IDS = new Set(['840', '356', '360']); // USA, India, Indonesia
const VISITED_IDS = new Set([
'124',
'352',
'702',
'458',
'336',
'250',
'756',
'380',
'704',
'764',
'392',
'792',
'524',
'784',
'634',
'031',
'268' // Georgia
]);
const WORLD_ATLAS_URL =
'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
interface CountryFeature {
  id: string;
  geo: any;
  tier: 'lived' | 'visited' | 'other';
}
export function Globe({ size = 120 }: GlobeProps) {
  const reduce = useReducedMotion();
  const [countries, setCountries] = useState<CountryFeature[] | null>(null);
  const [lambda, setLambda] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  // Outer container houses both the globe and the external swirl marks
  const padding = 14;
  const total = size + padding * 2;
  useEffect(() => {
    let cancelled = false;
    fetch(WORLD_ATLAS_URL).
    then((r) => r.json()).
    then((topology: any) => {
      if (cancelled) return;
      const geo: any = feature(topology, topology.objects.countries);
      const features: any[] = geo.features;
      setCountries(
        features.map((f) => {
          const id = String(f.id);
          const tier: CountryFeature['tier'] = LIVED_IDS.has(id) ?
          'lived' :
          VISITED_IDS.has(id) ?
          'visited' :
          'other';
          return {
            id,
            geo: f,
            tier
          };
        })
      );
    }).
    catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  // Rotation loop — full turn ~10s
  useEffect(() => {
    if (reduce) return;
    const tick = (t: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = t;
      const dt = t - lastTimeRef.current;
      lastTimeRef.current = t;
      setLambda((prev) => (prev + dt / 1000 * 36) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [reduce]);
  const cx = total / 2;
  const cy = total / 2;
  const globeR = size / 2 - 2;
  const projection = geoOrthographic().
  scale(globeR).
  translate([cx, cy]).
  rotate([lambda, -15, 0]).
  clipAngle(90);
  const pathGen = geoPath(projection as any);
  // Meridians only — vertical longitude lines (no horizontal latitude bands)
  const meridianPaths: string[] = [];
  for (let lon = -180; lon < 180; lon += 30) {
    const coords: [number, number][] = [];
    for (let lat = -80; lat <= 80; lat += 4) coords.push([lon, lat]);
    const d = pathGen({
      type: 'LineString',
      coordinates: coords
    } as any);
    if (d) meridianPaths.push(d);
  }
  // External swirl marks (clearly outside the globe — short arcs, not full rings)
  const swirlR = globeR + padding * 0.6;
  const arcPath = (startAngle: number, endAngle: number, r: number) => {
    const sx = cx + r * Math.cos(startAngle * Math.PI / 180);
    const sy = cy + r * Math.sin(startAngle * Math.PI / 180);
    const ex = cx + r * Math.cos(endAngle * Math.PI / 180);
    const ey = cy + r * Math.sin(endAngle * Math.PI / 180);
    const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
    return `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`;
  };
  return (
    <div
      style={{
        width: total,
        height: total
      }}
      aria-hidden="true"
      className="relative shrink-0">
      
      {/* External swirl marks — orbit slowly outside the globe */}
      <svg
        viewBox={`0 0 ${total} ${total}`}
        className="absolute inset-0 w-full h-full"
        style={{
          animation: reduce ? undefined : 'globe-swirl 9s linear infinite',
          transformOrigin: '50% 50%'
        }}>
        
        <g fill="none" stroke="#5C2A1F" strokeLinecap="round">
          <path d={arcPath(-70, -25, swirlR)} strokeWidth="0.8" opacity="0.5" />
          <path d={arcPath(120, 165, swirlR)} strokeWidth="0.8" opacity="0.4" />
          <path
            d={arcPath(-105, -85, swirlR + 2)}
            strokeWidth="0.5"
            strokeDasharray="1.6 2.4"
            opacity="0.45" />
          
          <path
            d={arcPath(45, 70, swirlR + 2)}
            strokeWidth="0.5"
            strokeDasharray="1.6 2.4"
            opacity="0.4" />
          
        </g>
        <style>{`
          @keyframes globe-swirl {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </svg>

      {/* Globe */}
      <svg
        viewBox={`0 0 ${total} ${total}`}
        width={total}
        height={total}
        className="block relative">
        
        {/* Sphere outline */}
        <circle
          cx={cx}
          cy={cy}
          r={globeR}
          fill="none"
          stroke="rgba(92, 42, 31, 0.55)"
          strokeWidth="0.8" />
        

        {/* Meridians (vertical longitude lines) — very subtle */}
        <g
          fill="none"
          stroke="rgba(92, 42, 31, 0.12)"
          strokeWidth="0.4"
          strokeLinejoin="round"
          strokeLinecap="round">
          
          {meridianPaths.map((d, i) =>
          <path key={i} d={d} />
          )}
        </g>

        {/* Country geometry */}
        {countries &&
        <g strokeLinejoin="round" strokeLinecap="round">
            {countries.map((c) => {
            const d = pathGen(c.geo);
            if (!d) return null;
            if (c.tier === 'lived') {
              return (
                <path
                  key={c.id}
                  d={d}
                  fill="#5C2A1F"
                  stroke="#5C2A1F"
                  strokeWidth="0.3"
                  opacity="0.95" />);


            }
            if (c.tier === 'visited') {
              return (
                <path
                  key={c.id}
                  d={d}
                  fill="rgba(92, 42, 31, 0.38)"
                  stroke="rgba(92, 42, 31, 0.5)"
                  strokeWidth="0.3" />);


            }
            return (
              <path
                key={c.id}
                d={d}
                fill="none"
                stroke="rgba(92, 42, 31, 0.42)"
                strokeWidth="0.4" />);


          })}
          </g>
        }
      </svg>
    </div>);

}