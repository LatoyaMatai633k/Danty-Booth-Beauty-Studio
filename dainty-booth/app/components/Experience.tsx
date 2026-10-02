import PlaceholderImage from './PlaceholderImage';

const steps = [
  {
    id: 'double-cleansing',
    label: '01',
    title: 'Double Cleansing',
    caption: 'A thorough cleanse to remove makeup, SPF and daily impurities, preparing the skin for every step that follows.',
    image: '/images/process/double-cleansing.jpeg',
    alt: 'Double cleansing step of a Dainty Booth facial',
  },
  {
    id: 'led-light-therapy',
    label: '02',
    title: 'LED Light Therapy',
    caption: 'Gentle light therapy used to support the skin\'s natural processes and enhance the overall treatment.',
    image: '/images/process/led-light-therapy.jpeg',
    alt: 'LED light therapy during a Dainty Booth facial',
  },
  {
    id: 'masking',
    label: '03',
    title: 'Masking',
    caption: 'Carefully selected masks applied at the right moment in your treatment to calm, hydrate or refine the skin.',
    image: '/images/process/masking.jpeg',
    alt: 'Masking step during a Dainty Booth skincare treatment',
  },
  {
    id: 'algae-peel',
    label: '04',
    title: 'Algae Peel',
    caption: 'The signature Algae Peel, part of the Chemical Peel experience, designed to support skin resurfacing and renewal.',
    image: '/images/process/algae-peel.jpeg',
    alt: 'Algae peel being applied as part of a chemical peel treatment',
  },
  {
    id: 'microneedling-prep',
    label: '05',
    title: 'Microneedling Preparation',
    caption: 'Careful preparation and numbing before microneedling to ensure your comfort throughout the treatment.',
    image: '/images/process/microneedling-prep.jpeg',
    alt: 'Microneedling preparation and numbing at Dainty Booth',
  },
  {
    id: 'microneedling-process',
    label: '06',
    title: 'Microneedling',
    caption: 'The microneedling process in motion, a precise treatment supporting the skin\'s natural collagen renewal.',
    image: '/images/process/microneedling-process.jpeg',
    alt: 'Microneedling treatment process at Dainty Booth Beauty Studio',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--color-brown-section)' }}>
      <div className="container">
        <div style={{ marginBottom: '56px', maxWidth: '600px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-pink)',
            marginBottom: '14px',
          }}>
            The Experience
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--color-brand-pink)',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            Come Inside the{' '}
            <em style={{ fontStyle: 'italic' }}>Dainty Booth</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--color-text-muted-brown)',
            lineHeight: 1.75,
          }}>
            Every Dainty Booth treatment is a carefully crafted experience. From the first cleanse to the final touch, each step is intentional, personal and designed with your skin in mind.
          </p>
        </div>

        <div className="experience-grid" style={{ display: 'grid', gap: '24px' }}>
          {steps.map((step) => (
            <div key={step.id} style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--color-border-light)',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <PlaceholderImage
                  src={step.image}
                  alt={step.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  placeholderLabel={step.title}
                  placeholderAspect="landscape"
                />
              </div>
              {/* Caption */}
              <div style={{ padding: '20px 22px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 300,
                  color: 'var(--color-border)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>
                  {step.label}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--color-dark-brown)',
                  marginBottom: '8px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                }}>
                  {step.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .experience-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .experience-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
