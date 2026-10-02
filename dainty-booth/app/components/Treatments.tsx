'use client';

import PlaceholderImage from './PlaceholderImage';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

const treatments = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    tagline: 'Cleanse. Extract. Infuse.',
    description:
      'A multi step facial experience that uses specialised tools to deeply cleanse the skin, gently remove dead skin cells, clear congestion and simultaneously infuse nourishing skincare ingredients. Suitable for most skin types.',
    image: '/images/treatments/hydrafacial.jpeg',
    alt: 'HydraFacial treatment',
    details: ['Multi-step process', 'Deep cleansing', 'Extraction', 'Ingredient infusion'],
  },
  {
    id: 'deep-cleanse',
    name: 'Deep Cleanse',
    tagline: 'Clarity from within.',
    description:
      'A focused treatment targeting impurities, excess oil, blackheads and the build up of dead skin cells. Includes cleansing, exfoliation, extraction, a soothing mask and hydration to leave skin feeling refreshed and clear.',
    image: '/images/treatments/deep-cleanse.jpeg',
    alt: 'Deep Cleanse facial treatment',
    details: ['Cleansing', 'Exfoliation', 'Extraction', 'Mask', 'Hydration'],
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    tagline: 'Reveal your smoothest skin.',
    description:
      'A gentle exfoliation treatment that carefully removes the top layer of dead skin cells and fine vellus hair, leaving the complexion visibly smoother and more refined. Helps skincare products absorb more effectively.',
    image: '/images/treatments/dermaplaning.jpeg',
    alt: 'Dermaplaning treatment',
    details: ['Exfoliation', 'Hair removal', 'Smoother skin', 'Better product absorption'],
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    tagline: 'Renew. Refine. Reveal.',
    description:
      'A carefully applied resurfacing treatment designed to support skin renewal. Our chemical peel, including the renowned Algae Peel, helps address uneven skin tone, texture and the appearance of blemishes over time.',
    image: '/images/treatments/chemical-peel.jpeg',
    alt: 'Chemical Peel / Algae Peel treatment',
    details: ['Skin resurfacing', 'Tone & texture', 'Algae Peel available', 'Renewal support'],
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    tagline: 'Boost Collagen. Reduce Scars.',
    description:
      'A skin rejuvenation treatment that uses fine needles to support the skin\'s natural renewal process. May help with the appearance of scarring, uneven texture and skin firmness over a course of treatments.',
    image: '/images/treatments/microneedling.jpeg',
    alt: 'Microneedling treatment',
    details: ['Collagen support', 'Scar appearance', 'Skin texture', 'Renewal process'],
  },
  {
    id: 'skin-tag-removal',
    name: 'Skin Tag Removal',
    tagline: 'Quick. Clean. Comfortable.',
    description:
      'Safe and professional removal of skin tags. Sessions are available in flexible time slots to suit your needs.',
    image: '/images/treatments/skin-tag-removal.jpeg',
    alt: 'Skin tag removal treatment',
    details: ['Professional procedure', 'Multiple session lengths available'],
    pricing: [
      { duration: '15 min', price: 'R200' },
      { duration: '30 min', price: 'R350' },
      { duration: '45 min', price: 'R450' },
      { duration: '1 hour', price: 'R600' },
    ],
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
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
            Treatments
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--color-dark-brown)',
            lineHeight: 1.15,
            maxWidth: '520px',
          }}>
            Skincare Experiences{' '}
            <em style={{ fontStyle: 'italic' }}>Tailored for You</em>
          </h2>
        </div>

        <div className="treatments-grid" style={{ display: 'grid', gap: '28px' }}>
          {treatments.map((t) => (
            <article
              key={t.id}
              style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(78,49,41,0.10)';
                el.style.borderColor = 'var(--color-brand-pink-deep)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              <div style={{ display: 'grid' }} className="treatment-card-inner">
                {/* Image */}
                <div className="treatment-img-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                  <PlaceholderImage
                    src={t.image}
                    alt={t.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s' }}
                    placeholderLabel={t.name}
                    placeholderAspect="landscape"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
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
                      {t.tagline}
                    </p>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.7rem',
                      fontWeight: 400,
                      color: 'var(--color-dark-brown)',
                      marginBottom: '14px',
                    }}>
                      {t.name}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.75,
                      marginBottom: '20px',
                    }}>
                      {t.description}
                    </p>

                    {/* Details pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                      {t.details.map((d) => (
                        <span key={d} style={{
                          padding: '5px 12px',
                          border: '1px solid var(--color-border)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.72rem',
                          fontWeight: 400,
                          color: 'var(--color-text-muted)',
                          letterSpacing: '0.04em',
                          backgroundColor: 'var(--color-warm-white)',
                        }}>
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Pricing (skin tag removal only) */}
                    {t.pricing && (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '8px',
                        marginBottom: '20px',
                        backgroundColor: 'var(--color-warm-white)',
                        borderRadius: '6px',
                        padding: '16px',
                        border: '1px solid var(--color-border-light)',
                      }}>
                        {t.pricing.map((p) => (
                          <div key={p.duration} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{p.duration}</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--color-dark-brown)' }}>{p.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '12px 20px',
                      border: '1px solid var(--color-warm-brown)',
                      color: 'var(--color-warm-brown)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      borderRadius: '5px',
                      transition: 'background-color 0.2s, color 0.2s',
                      alignSelf: 'flex-start',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-warm-brown)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-white)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-warm-brown)';
                    }}
                  >
                    Enquire &amp; Book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .treatments-grid {
          grid-template-columns: 1fr;
        }
        .treatment-card-inner {
          grid-template-columns: 1fr;
        }
        .treatment-img-wrap {
          aspect-ratio: 16/9;
          min-height: 220px;
        }
        @media (min-width: 640px) {
          .treatments-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .treatment-card-inner {
            grid-template-columns: 1fr !important;
          }
          .treatment-img-wrap {
            aspect-ratio: 4/3 !important;
          }
        }
        @media (min-width: 1024px) {
          .treatments-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
