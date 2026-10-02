'use client';

import PlaceholderImage from './PlaceholderImage';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

export default function Connect() {
  return (
    <section id="connect" className="section" style={{ backgroundColor: 'var(--color-blush)' }}>
      <div className="container">
        <div className="connect-grid" style={{ display: 'grid', gap: '64px', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/5', maxWidth: '480px', width: '100%', margin: '0 auto' }} className="connect-image">
            <PlaceholderImage
              src="/images/connect/lets-connect.jpeg"
              alt="A woman glowing with beautiful, cared-for skin"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              placeholderLabel="Let&apos;s Connect, portrait"
              placeholderAspect="portrait"
            />
          </div>

          {/* Text */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-dusty-pink)',
              marginBottom: '14px',
            }}>
              Let&apos;s Connect
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 300,
              color: 'var(--color-dark-brown)',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Your skin deserves{' '}
              <em style={{ fontStyle: 'italic' }}>to be cared for.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}>
              Whether you are ready to book a treatment, want to ask a question or simply want to know when Dainty Booth is coming to your city, we would love to hear from you.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              marginBottom: '44px',
            }}>
              Send a WhatsApp message and Sinikiwe will get back to you personally.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 36px',
                backgroundColor: 'var(--color-warm-brown)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Dainty
            </a>

            {/* Social */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              marginTop: '28px',
            }}>
              Follow Dainty Booth on social media for treatment updates, pop up dates and skin tips.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .connect-grid {
          grid-template-columns: 1fr;
        }
        .connect-image {
          order: 1;
        }
        @media (min-width: 900px) {
          .connect-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .connect-image {
            order: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
