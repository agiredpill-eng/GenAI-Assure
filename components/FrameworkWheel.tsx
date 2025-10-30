'use client';

import { useState } from 'react';

interface Segment {
  id: number;
  name: string;
  color: string;
  arcLabel: string;
  centerLabel: string;
  startAngle: number;
  endAngle: number;
}

const segments: Segment[] = [
  {
    id: 1,
    name: 'Security & Data Protection',
    color: '#059669',
    arcLabel: 'Technical Governance Backbone',
    centerLabel: 'Security &\nData',
    startAngle: -90,
    endAngle: -18,
  },
  {
    id: 2,
    name: 'Governance & Regulatory Assurance',
    color: '#001F54',
    arcLabel: 'Legal & Regulatory Obligations',
    centerLabel: 'Governance &\nRegulatory',
    startAngle: -18,
    endAngle: 54,
  },
  {
    id: 3,
    name: 'Ethical & Human Impact',
    color: '#FF8C00',
    arcLabel: 'Ethical Considerations',
    centerLabel: 'Ethical &\nHuman',
    startAngle: 54,
    endAngle: 126,
  },
  {
    id: 4,
    name: 'Accountable Operations',
    color: '#DC2626',
    arcLabel: 'Operational Readiness',
    centerLabel: 'Accountable\nOps',
    startAngle: 126,
    endAngle: 198,
  },
  {
    id: 5,
    name: 'Trust & Safety Culture',
    color: '#B9FF2C',
    arcLabel: 'Trust & Safety',
    centerLabel: 'Trust &\nSafety',
    startAngle: 198,
    endAngle: 270,
  },
];

export default function FrameworkWheel() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const centerX = 250;
  const centerY = 250;
  const innerRadius = 120;
  const outerRadius = 200;
  const arcRadius = 220;
  const labelRadius = 155;

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    innerRadius: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
    const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
    const outerStart = polarToCartesian(x, y, outerRadius, endAngle);
    const outerEnd = polarToCartesian(x, y, outerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M',
      outerStart.x,
      outerStart.y,
      'A',
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      0,
      outerEnd.x,
      outerEnd.y,
      'L',
      innerEnd.x,
      innerEnd.y,
      'A',
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      innerStart.x,
      innerStart.y,
      'Z',
    ].join(' ');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-auto drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))' }}
      >
        <defs>
          {segments.map((segment) => (
            <filter key={`glow-${segment.id}`} id={`glow-${segment.id}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        {segments.map((segment) => {
          const isHovered = hoveredSegment === segment.id;
          const path = describeArc(
            centerX,
            centerY,
            innerRadius,
            isHovered ? outerRadius + 10 : outerRadius,
            segment.startAngle,
            segment.endAngle
          );

          const midAngle = (segment.startAngle + segment.endAngle) / 2;
          const arcLabelPos = polarToCartesian(centerX, centerY, arcRadius, midAngle);
          const centerLabelPos = polarToCartesian(centerX, centerY, labelRadius, midAngle);

          return (
            <g key={segment.id}>
              <path
                d={path}
                fill={segment.color}
                opacity={hoveredSegment === null ? 0.9 : isHovered ? 1 : 0.4}
                stroke="white"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredSegment(segment.id)}
                onMouseLeave={() => setHoveredSegment(null)}
                style={{
                  filter: isHovered ? `url(#glow-${segment.id})` : 'none',
                }}
              />

              <text
                x={centerLabelPos.x}
                y={centerLabelPos.y}
                fill="white"
                fontSize="12"
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                }}
              >
                {segment.centerLabel.split('\n').map((line, i) => (
                  <tspan key={i} x={centerLabelPos.x} dy={i === 0 ? -7 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="#B9FF2C"
          stroke="#000000"
          strokeWidth="3"
          className="drop-shadow-lg"
        />

        <text
          x={centerX}
          y={centerY - 10}
          fill="#000000"
          fontSize="22"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          GenAI
        </text>
        <text
          x={centerX}
          y={centerY + 15}
          fill="#000000"
          fontSize="22"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Assure
        </text>
      </svg>

      {hoveredSegment !== null && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-2xl max-w-xs text-center">
            <p className="font-semibold text-sm">
              {segments.find((s) => s.id === hoveredSegment)?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
