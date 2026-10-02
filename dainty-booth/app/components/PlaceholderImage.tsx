'use client';

import { useState } from 'react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  placeholderLabel?: string;
  placeholderAspect?: 'portrait' | 'landscape' | 'square';
  className?: string;
}

export default function PlaceholderImage({
  src,
  alt,
  style,
  placeholderLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholderAspect = 'landscape',
  className,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: 'var(--color-blush)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: 'var(--color-blush-light)',
        }}
        aria-label={alt}
        role="img"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-pink-deep)" strokeWidth="1" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
        {placeholderLabel && (
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: 'var(--color-dusty-pink)',
            letterSpacing: '0.05em',
            textAlign: 'center',
            padding: '0 12px',
            maxWidth: '160px',
            lineHeight: 1.4,
          }}>
            {placeholderLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
