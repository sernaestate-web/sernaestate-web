import React from 'react';

interface CadastralLinderoSvgProps {
  className?: string;
}

/**
 * Signature visual element: Subtle SVG gold line inspired by cadastral plot boundaries / registry maps.
 * Fully accessible (aria-hidden="true") and responsive.
 */
export const CadastralLinderoSvg: React.FC<CadastralLinderoSvgProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 500 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`aria-hidden:true pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background fine grid coordinates */}
      <pattern id="cadastral-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#E0BB5D" fillOpacity="0.25" />
      </pattern>
      <rect width="500" height="240" fill="url(#cadastral-dots)" opacity="0.6" />

      {/* Plot boundary lines (Linderos) */}
      <path
        d="M 30 180 L 140 50 L 320 30 L 460 120 L 390 210 L 120 200 Z"
        stroke="#E0BB5D"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        strokeOpacity="0.75"
      />

      {/* Sub-division lot lines */}
      <path d="M 140 50 L 260 140 L 390 210" stroke="#146A55" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M 320 30 L 260 140 L 120 200" stroke="#146A55" strokeWidth="1" strokeOpacity="0.4" />

      {/* Coordinate Vertex Markers */}
      <g opacity="0.9">
        {/* V1 */}
        <circle cx="140" cy="50" r="4" fill="#014937" stroke="#E0BB5D" strokeWidth="1.5" />
        <text x="148" y="46" fill="#AE7E25" fontSize="9" fontFamily="Montserrat" fontWeight="600">P-01</text>

        {/* V2 */}
        <circle cx="320" cy="30" r="4" fill="#014937" stroke="#E0BB5D" strokeWidth="1.5" />
        <text x="328" y="26" fill="#AE7E25" fontSize="9" fontFamily="Montserrat" fontWeight="600">P-02</text>

        {/* V3 */}
        <circle cx="460" cy="120" r="4" fill="#014937" stroke="#E0BB5D" strokeWidth="1.5" />
        <text x="468" y="124" fill="#AE7E25" fontSize="9" fontFamily="Montserrat" fontWeight="600">P-03</text>

        {/* V4 */}
        <circle cx="390" cy="210" r="4" fill="#014937" stroke="#E0BB5D" strokeWidth="1.5" />
        <text x="398" y="214" fill="#AE7E25" fontSize="9" fontFamily="Montserrat" fontWeight="600">P-04</text>

        {/* V5 */}
        <circle cx="120" cy="200" r="4" fill="#014937" stroke="#E0BB5D" strokeWidth="1.5" />
        <text x="92" y="208" fill="#AE7E25" fontSize="9" fontFamily="Montserrat" fontWeight="600">P-05</text>
      </g>

      {/* Mini North Arrow / Compass Rose */}
      <g transform="translate(440, 40)" opacity="0.7">
        <circle cx="0" cy="0" r="14" stroke="#E0BB5D" strokeWidth="1" fill="none" />
        <path d="M 0 -10 L 4 0 L 0 -3 L -4 0 Z" fill="#014937" stroke="#E0BB5D" strokeWidth="0.75" />
        <text x="-3" y="-13" fill="#014937" fontSize="8" fontFamily="Montserrat" fontWeight="700">N</text>
      </g>
    </svg>
  );
};

