'use client';

import { useState, useEffect } from 'react';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 #ecddd8' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Logo */}
        <a href="#home" onClick={closeMenu} aria-label="Dainty Booth Beauty Studio home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/images/brand/dainty-booth-logo.jpeg"
            alt="Dainty Booth Beauty Studio"
            style={{ height: '40px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'var(--color-brand-brown-dark)',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}>
            Dainty Booth
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 400,
                color: '#7d5a4f',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#4e3129')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#7d5a4f')}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              backgroundColor: '#7d5a4f',
              padding: '11px 24px',
              borderRadius: '6px',
              transition: 'background-color 0.2s, transform 0.15s',
              display: 'inline-block',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#4e3129';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#7d5a4f';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Book Dainty
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: '#4e3129',
            transition: 'transform 0.25s, opacity 0.25s',
            transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: '#4e3129',
            transition: 'opacity 0.25s',
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: '#4e3129',
            transition: 'transform 0.25s, opacity 0.25s',
            transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="mobile-nav"
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #ecddd8',
            padding: '20px 24px 28px',
          }}
        >
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#4e3129',
                  borderBottom: '1px solid #f5ece8',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                display: 'block',
                marginTop: '20px',
                padding: '15px',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffffff',
                backgroundColor: '#7d5a4f',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              Book Dainty
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
