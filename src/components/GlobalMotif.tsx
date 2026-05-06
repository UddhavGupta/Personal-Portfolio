import React from 'react';
export function GlobalMotif() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print"
      aria-hidden="true">
      
      <svg
        viewBox="0 0 1200 900"
        className="w-full h-full opacity-[0.035]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5">
        
        {/* Coordinate crosshairs — scattered like map reference points */}
        {/* Mumbai */}
        <g className="text-stone-600">
          <line x1="185" y1="480" x2="195" y2="480" />
          <line x1="190" y1="475" x2="190" y2="485" />
          <text
            x="197"
            y="483"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            19.0°N
          </text>
        </g>

        {/* Jakarta */}
        <g className="text-stone-600">
          <line x1="885" y1="560" x2="895" y2="560" />
          <line x1="890" y1="555" x2="890" y2="565" />
          <text
            x="897"
            y="563"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            6.2°S
          </text>
        </g>

        {/* San Francisco */}
        <g className="text-stone-600">
          <line x1="105" y1="310" x2="115" y2="310" />
          <line x1="110" y1="305" x2="110" y2="315" />
          <text
            x="117"
            y="313"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            37.7°N
          </text>
        </g>

        {/* Chicago */}
        <g className="text-stone-600">
          <line x1="310" y1="280" x2="320" y2="280" />
          <line x1="315" y1="275" x2="315" y2="285" />
          <text
            x="322"
            y="283"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            41.8°N
          </text>
        </g>

        {/* Seattle */}
        <g className="text-stone-600">
          <line x1="95" y1="230" x2="105" y2="230" />
          <line x1="100" y1="225" x2="100" y2="235" />
          <text
            x="107"
            y="233"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            47.6°N
          </text>
        </g>

        {/* Evanston */}
        <g className="text-stone-600">
          <line x1="325" y1="265" x2="335" y2="265" />
          <line x1="330" y1="260" x2="330" y2="270" />
          <text
            x="337"
            y="268"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            42.0°N
          </text>
        </g>

        {/* Paris */}
        <g className="text-stone-600">
          <line x1="540" y1="260" x2="550" y2="260" />
          <line x1="545" y1="255" x2="545" y2="265" />
          <text
            x="552"
            y="263"
            fontSize="5"
            fill="currentColor"
            stroke="none"
            fontFamily="Inter">
            
            48.8°N
          </text>
        </g>

        {/* Travel arcs — thin curved lines connecting points */}
        {/* SF to Chicago */}
        <path
          d="M110 310 C200 240, 260 240, 315 280"
          strokeDasharray="4 4"
          opacity="0.6" />
        

        {/* Chicago to Evanston (short) */}
        <path d="M315 280 C320 272, 325 268, 330 265" opacity="0.8" />

        {/* SF to Seattle */}
        <path
          d="M110 310 C105 280, 100 260, 100 230"
          strokeDasharray="3 5"
          opacity="0.5" />
        

        {/* SF to Mumbai (long arc) */}
        <path
          d="M110 310 C300 150, 600 200, 190 480"
          strokeDasharray="6 6"
          opacity="0.3" />
        

        {/* Mumbai to Jakarta */}
        <path
          d="M190 480 C400 500, 700 520, 890 560"
          strokeDasharray="5 5"
          opacity="0.3" />
        

        {/* Chicago to Paris */}
        <path
          d="M315 280 C380 200, 480 200, 545 260"
          strokeDasharray="4 6"
          opacity="0.35" />
        

        {/* Scattered small coordinate ticks — abstract reference marks */}
        <g opacity="0.4">
          <line x1="680" y1="380" x2="688" y2="380" />
          <line x1="684" y1="376" x2="684" y2="384" />
        </g>
        <g opacity="0.3">
          <line x1="450" y1="620" x2="458" y2="620" />
          <line x1="454" y1="616" x2="454" y2="624" />
        </g>
        <g opacity="0.25">
          <line x1="780" y1="200" x2="788" y2="200" />
          <line x1="784" y1="196" x2="784" y2="204" />
        </g>
        <g opacity="0.2">
          <line x1="1020" y1="340" x2="1028" y2="340" />
          <line x1="1024" y1="336" x2="1024" y2="344" />
        </g>
        <g opacity="0.15">
          <line x1="160" y1="680" x2="168" y2="680" />
          <line x1="164" y1="676" x2="164" y2="684" />
        </g>

        {/* Faint latitude/longitude reference lines */}
        <line
          x1="0"
          y1="450"
          x2="1200"
          y2="450"
          opacity="0.15"
          strokeDasharray="2 8" />
        
        <line
          x1="600"
          y1="0"
          x2="600"
          y2="900"
          opacity="0.1"
          strokeDasharray="2 10" />
        
      </svg>
    </div>);

}