// Mock content for visual review only. Replace with approved client testimonials before publishing.
const mockTestimonials = [
  { name: 'Lerato M.', text: 'From the moment I arrived, the experience felt calm and personal. My skin felt fresh and beautifully cared for afterwards.' },
  { name: 'Thando N.', text: 'I loved how gentle and relaxing the treatment was. Every detail felt thoughtful from beginning to end.' },
  { name: 'Zinhle P.', text: 'Such a beautiful experience. I felt comfortable throughout my treatment and loved the attention to detail.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--color-blush-light)' }}>
      <div className="container">
        <div className="testimonials-layout">
          <div>
            <p className="eyebrow">Client Voices</p>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 400,
              color: 'var(--color-dark-brown)',
              marginBottom: '20px',
              maxWidth: '480px',
            }}>
              Kind words from the <em style={{ fontStyle: 'italic' }}>Dainty Booth community.</em>
            </h2>
          </div>

          <div className="testimonial-cards">
            {mockTestimonials.map((testimonial) => (
              <article className="testimonial-note" key={testimonial.name}>
                <p className="testimonial-copy">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-layout {
          display: grid;
          gap: 44px;
          align-items: center;
        }
        .testimonial-cards { display: grid; gap: 14px; }
        .testimonial-note {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-brand-pink-deep);
          border-radius: 8px;
          padding: 24px 26px;
        }
        .testimonial-copy {
          font-family: var(--font-display);
          font-size: 1.22rem;
          font-style: italic;
          line-height: 1.4;
          color: var(--color-dark-brown);
          margin-bottom: 14px;
        }
        .testimonial-name {
          font-family: var(--font-body);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-brand-brown);
        }
        }
        @media (min-width: 900px) {
          .testimonials-layout {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 72px;
          }
        }
      `}</style>
    </section>
  );
}
