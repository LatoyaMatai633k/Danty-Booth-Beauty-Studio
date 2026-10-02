'use client';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#000000',
      color: 'var(--color-white)',
      paddingTop: '64px',
      paddingBottom: '32px',
    }}>
      <div className="container">
        {/* Top grid */}
        <div className="footer-grid" style={{ display: 'grid', gap: '48px', marginBottom: '56px' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/images/brand/dainty-booth-footer-logo.png"
                alt="Dainty Booth Beauty Studio"
                style={{ height: '156px', maxWidth: '240px', width: 'auto', objectFit: 'contain', marginBottom: '16px' }}
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              maxWidth: '280px',
            }}>
              Personalised facial and skincare experiences designed to help you feel cared for, confident and beautiful in your own skin.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '28px',
                padding: '12px 24px',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '6px',
                transition: 'border-color 0.2s, background-color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-dusty-pink)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,160,154,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Dainty
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '20px',
            }}>
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.7)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-white)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '20px',
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>WhatsApp / Primary</p>
                <a href="tel:+27640325011" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>064 032 5011</a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Alternative</p>
                <a href="tel:+27792422395" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>079 242 2395</a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '20px',
            }}>
              Pop Up Locations
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Vryheid', 'Ladysmith', 'Newcastle', 'Johannesburg', 'Durban'].map((city) => (
                <li key={city} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-dusty-pink)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
            &copy; {year} Dainty Booth Beauty Studio. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>
            Personalised beauty experiences across South Africa.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
