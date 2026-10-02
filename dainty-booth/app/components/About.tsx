import PlaceholderImage from './PlaceholderImage';

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        {/* Section label */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-dusty-pink)',
          marginBottom: '16px',
        }}>
          Our Story
        </p>

        <div className="about-grid" style={{ display: 'grid', gap: '64px', alignItems: 'center' }}>
          {/* Text */}
          <div className="about-text">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              color: 'var(--color-dark-brown)',
              marginBottom: '28px',
              lineHeight: 1.15,
            }}>
              Beauty Rooted in{' '}
              <em style={{ fontStyle: 'italic' }}>Care & Confidence</em>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}>
              Dainty Booth Beauty Studio was created out of a genuine desire to help women feel seen, cared for and beautiful, not just on the surface, but in how they feel about themselves. Founded by{' '}
              <strong style={{ fontWeight: 500, color: 'var(--color-dark-brown)' }}>Sinikiwe Sibisi</strong>,
              {' '}Dainty Booth is built on the belief that every woman deserves a skincare experience that is thoughtful, personal and truly restorative.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              Through carefully selected facial and skincare treatments, Dainty Booth brings quality beauty experiences directly to women across South Africa, whether through a studio setting or through thoughtfully arranged pop up experiences in your city.
            </p>

            {/* Mission / Vision */}
            <div style={{
              display: 'grid',
              gap: '24px',
              borderLeft: '2px solid var(--color-blush-mid)',
              paddingLeft: '24px',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dusty-pink)',
                  marginBottom: '8px',
                }}>
                  Our Mission
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-dark-brown)',
                  lineHeight: 1.55,
                }}>
                  &ldquo;To create personalised beauty experiences where women feel cared for, confident and beautiful in their own skin.&rdquo;
                </p>
              </div>

              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dusty-pink)',
                  marginBottom: '8px',
                }}>
                  Our Vision
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-dark-brown)',
                  lineHeight: 1.55,
                }}>
                  &ldquo;To make quality skincare and beauty experiences more accessible to women through thoughtful treatments and pop up experiences across South Africa.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="about-image" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '-20px',
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)',
              border: '1px solid var(--color-blush-mid)',
              borderRadius: '8px',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1, borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/5' }}>
              <PlaceholderImage
                src="/images/about/founder-sinikiwe.jpeg"
                alt="Sinikiwe Sibisi, founder of Dainty Booth Beauty Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                placeholderLabel="Founder portrait, Sinikiwe Sibisi"
                placeholderAspect="portrait"
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              right: '-16px',
              backgroundColor: 'var(--color-blush)',
              borderRadius: '6px',
              padding: '16px 20px',
              zIndex: 2,
              boxShadow: '0 2px 12px rgba(74,46,36,0.08)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-dark-brown)' }}>Sinikiwe Sibisi</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Founder & Beauty Therapist</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        .about-image {
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-image {
            max-width: none !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
