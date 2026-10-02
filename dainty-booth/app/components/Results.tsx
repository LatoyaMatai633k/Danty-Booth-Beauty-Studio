'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import PlaceholderImage from './PlaceholderImage';

interface BeforeAfterPair {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

// ────────────────────────────────────────────────────────────
//  CONFIGURE YOUR PAIRS HERE
//  Add more objects to the array to show more comparisons.
//  File naming convention: client-XX-before.jpeg / client-XX-after.jpeg
// ────────────────────────────────────────────────────────────
const PAIRS: BeforeAfterPair[] = [
  {
    id: 'client-01',
    label: 'Client 01',
    beforeSrc: '/images/results/client-01-before.jpeg',
    afterSrc: '/images/results/client-01-after.jpeg',
    beforeAlt: 'Client skin before Dainty Booth treatment',
    afterAlt: 'Client skin after Dainty Booth treatment',
  },
  {
    id: 'client-02',
    label: 'Client 02',
    beforeSrc: '/images/results/client-02-before.jpeg',
    afterSrc: '/images/results/client-02-after.jpeg',
    beforeAlt: 'Client skin before Dainty Booth treatment',
    afterAlt: 'Client skin after Dainty Booth treatment',
  },
  {
    id: 'client-03',
    label: 'Client 03',
    beforeSrc: '/images/results/client-03-before.jpeg',
    afterSrc: '/images/results/client-03-after.jpeg',
    beforeAlt: 'Client skin before Dainty Booth treatment',
    afterAlt: 'Client skin after Dainty Booth treatment',
  },
];

// ─── Single Slider ──────────────────────────────────────────
function Slider({ pair }: { pair: BeforeAfterPair }) {
  const [position, setPosition] = useState(50); // 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    setPosition(getPos(e.clientX));
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setPosition(getPos(e.clientX));
    };
    const onMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [getPos]);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    setPosition(getPos(e.touches[0].clientX));
  };

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      setPosition(getPos(e.touches[0].clientX));
    };
    const onTouchEnd = () => { isDragging.current = false; };
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [getPos]);

  // Keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => clamp(p - 2, 0, 100));
    if (e.key === 'ArrowRight') setPosition((p) => clamp(p + 2, 0, 100));
    if (e.key === 'Home') setPosition(0);
    if (e.key === 'End') setPosition(100);
  };

  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
      {/* Slider container */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          userSelect: 'none',
          cursor: 'ew-resize',
          backgroundColor: 'var(--color-blush)',
          overflow: 'hidden',
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label={`Before and after comparison for ${pair.label}`}
        role="img"
      >
        {/* After image (full width, behind) */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <PlaceholderImage
            src={pair.afterSrc}
            alt={pair.afterAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', pointerEvents: 'none' }}
            placeholderLabel={`${pair.label}, After`}
            placeholderAspect="square"
          />
        </div>

        {/* Before image (clipped) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: 'none',
        }}>
          <PlaceholderImage
            src={pair.beforeSrc}
            alt={pair.beforeAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', pointerEvents: 'none' }}
            placeholderLabel={`${pair.label}, Before`}
            placeholderAspect="square"
          />
        </div>

        {/* Labels */}
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(255,255,255,0.92)',
          padding: '4px 10px',
          borderRadius: '4px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-dark-brown)',
          pointerEvents: 'none',
          zIndex: 3,
        }}>
          Before
        </span>
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'rgba(255,255,255,0.92)',
          padding: '4px 10px',
          borderRadius: '4px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-dark-brown)',
          pointerEvents: 'none',
          zIndex: 3,
        }}>
          After
        </span>

        {/* Divider line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          transform: 'translateX(-50%)',
          width: '2px',
          backgroundColor: 'var(--color-white)',
          zIndex: 4,
          pointerEvents: 'none',
          boxShadow: '0 0 6px rgba(0,0,0,0.18)',
        }} />

        {/* Drag handle */}
        <div
          role="slider"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Drag to compare before and after"
          tabIndex={0}
          onKeyDown={onKeyDown}
          style={{
            position: 'absolute',
            top: '50%',
            left: `${position}%`,
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            backgroundColor: 'var(--color-white)',
            borderRadius: '50%',
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
            cursor: 'ew-resize',
            border: '1.5px solid var(--color-border)',
            touchAction: 'none',
          }}
        >
          {/* Double arrow icon */}
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            <path d="M6 7L1 2M6 7L1 12M6 7H14M14 7L19 2M14 7L19 12" stroke="#8b6f5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Card label */}
      <div style={{
        padding: '12px 16px',
        backgroundColor: 'var(--color-white)',
        borderTop: '1px solid var(--color-border-light)',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {pair.label}
        </p>
      </div>
    </div>
  );
}

// ─── Section ────────────────────────────────────────────────
export default function Results() {
  return (
    <section id="results" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-dusty-pink)',
            marginBottom: '14px',
          }}>
            Results
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--color-dark-brown)',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '560px',
          }}>
            Real Skin.{' '}
            <em style={{ fontStyle: 'italic' }}>Real Results.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            maxWidth: '520px',
          }}>
            Drag the divider to compare skin before and after a Dainty Booth treatment. Real clients, real outcomes.
          </p>
        </div>

        <div className="results-grid" style={{ display: 'grid', gap: '28px' }}>
          {PAIRS.map((pair) => (
            <Slider key={pair.id} pair={pair} />
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--color-text-muted)',
          marginTop: '32px',
          fontStyle: 'italic',
        }}>
          Individual results may vary. Photographs are shared with client consent.
        </p>
      </div>

      <style>{`
        .results-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .results-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
