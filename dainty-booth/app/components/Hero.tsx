'use client';

import PlaceholderImage from './PlaceholderImage';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        backgroundColor: 'var(--color-white)',
        paddingTop: '68px',
      }}
      className="hero-section"
    >
      <div style={{ display: 'grid', minHeight: 'calc(100vh - 68px)' }} className="hero-inner">
        {/* Text side */}
        <div
          className="hero-text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 24px 64px',
            maxWidth: '640px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-dusty-pink)',
            marginBottom: '20px',
          }}>
            Dainty Booth Beauty Studio
          </p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
            fontWeight: 300,
            color: 'var(--color-dark-brown)',
            lineHeight: 1.1,
            marginBottom: '28px',
            letterSpacing: '-0.01em',
          }}>
            Beauty That Meets You{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Where You Are.</em>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            marginBottom: '44px',
            maxWidth: '480px',
          }}>
            Personalised facial and skincare experiences designed to help you feel cared for, confident and beautiful in your own skin.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'var(--color-warm-brown)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '6px',
                transition: 'background-color 0.2s, transform 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-dark-brown)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-warm-brown)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* WhatsApp icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Dainty
            </a>

            <a
              href="#treatments"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-dark-brown)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '6px',
                transition: 'border-color 0.2s, transform 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-warm-brown)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Explore Treatments
            </a>
          </div>

          <div style={{ marginTop: '64px', display: 'flex', gap: '40px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--color-dark-brown)' }}>6</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Treatments</p>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--color-dark-brown)' }}>5</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Locations</p>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--color-dark-brown)' }}>100%</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Personalised</p>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="hero-image" style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}>
          <PlaceholderImage
            src="/images/hero/hydrafacial-hero.jpeg"
            alt="Generic editorial model receiving a premium facial treatment"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            placeholderLabel="Temporary editorial facial treatment image"
            placeholderAspect="portrait"
          />
          <div className="hero-image-fade" aria-hidden="true" />
        </div>
      </div>

      <style>{`
        .hero-inner {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
        }
        .hero-text {
          order: 1;
          margin: 0 auto;
          width: 100%;
        }
        .hero-image {
          order: 2;
          min-height: 50vw;
          max-height: 520px;
        }
        .hero-image-fade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, transparent 58%, var(--color-white) 100%);
        }
        @media (min-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 1fr !important;
          }
          .hero-text {
            order: 1 !important;
            max-width: none !important;
            padding: 80px 48px 80px 48px !important;
          }
          .hero-image {
            order: 2 !important;
            min-height: calc(100vh - 68px) !important;
            max-height: none !important;
          }
          .hero-image-fade {
            background: linear-gradient(to right, var(--color-white) 0%, transparent 22%), linear-gradient(to top, var(--color-white) 0%, transparent 18%);
          }
        }
        @media (min-width: 1280px) {
          .hero-text {
            padding: 80px 64px 80px 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
