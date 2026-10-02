'use client';

import LocationMap from './LocationMap';

const WHATSAPP_URL =
  'https://wa.me/27640325011?text=Hi%20Dainty%20Booth%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20treatment.';

const locations = [
  { city: 'Vryheid', province: 'KwaZulu Natal' },
  { city: 'Ladysmith', province: 'KwaZulu Natal' },
  { city: 'Newcastle', province: 'KwaZulu Natal' },
  { city: 'Johannesburg', province: 'Gauteng' },
  { city: 'Durban', province: 'KwaZulu Natal' },
];

export default function Locations() {
  return (
    <section id="locations" className="section" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="container">
        <div className="locations-grid">
          <div>
            <p className="eyebrow">Locations</p>
            <h2 className="locations-title">Beauty That <em>Comes to You</em></h2>
            <p className="locations-intro">Dainty Booth is not confined to a single space. Through carefully arranged pop up experiences, treatments are brought directly to women across South Africa. Connect with us on WhatsApp to find out when Dainty Booth is coming to your city.</p>
            <div className="locations-list">
              {locations.map((location, index) => <div className="location-row" key={location.city}><div className="location-name"><span className="location-number">{String(index + 1).padStart(2, '0')}</span><div><p>{location.city}</p><small>{location.province}</small></div></div><span className="location-dot" aria-hidden="true" /></div>)}
            </div>
            <p className="locations-note">Pop up dates and availability change regularly. Message Dainty Booth directly to confirm upcoming dates in your area.</p>
            <a className="locations-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Check Availability on WhatsApp</a>
          </div>
          <div className="map-column"><LocationMap /><div className="map-note"><span aria-hidden="true">◌</span><p><strong>Pop up schedule:</strong> Dates change with each tour. Follow Dainty Booth on social media or send a WhatsApp message to stay updated on your city&apos;s next visit.</p></div></div>
        </div>
      </div>
      <style>{`
        .locations-grid { display:grid; gap:64px; align-items:center; } .locations-title { font-size:clamp(2rem,4vw,3rem); font-weight:300; color:var(--color-dark-brown); line-height:1.15; margin-bottom:20px; } .locations-intro,.locations-note { font-family:var(--font-body); font-size:1rem; font-weight:300; color:var(--color-text-muted); line-height:1.8; } .locations-intro { margin-bottom:36px; } .locations-list { display:flex; flex-direction:column; } .location-row { display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid var(--color-border-light); } .location-row:last-child { border-bottom:0; } .location-name { display:flex; align-items:center; gap:16px; } .location-number { font-family:var(--font-display); font-size:1.5rem; font-weight:300; color:var(--color-border); min-width:32px; } .location-name p { font-family:var(--font-display); font-size:1.3rem; color:var(--color-dark-brown); } .location-name small { font-family:var(--font-body); font-size:.75rem; color:var(--color-text-muted); letter-spacing:.04em; } .location-dot { width:10px; height:10px; border-radius:50%; background:var(--color-brand-pink-deep); box-shadow:0 0 0 4px var(--color-blush-light); } .locations-note { margin:36px 0 20px; font-size:.875rem; line-height:1.7; } .locations-cta { display:inline-flex; align-items:center; padding:14px 28px; border-radius:6px; background:var(--color-warm-brown); color:var(--color-white); font-family:var(--font-body); font-size:.8rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; transition:background-color .2s,transform .15s; } .locations-cta:hover { background:var(--color-dark-brown); transform:translateY(-2px); } .map-column { display:flex; flex-direction:column; gap:16px; } .location-map { height:420px; width:100%; border:1px solid var(--color-border-light); border-radius:8px; overflow:hidden; background:var(--color-blush-light); } .location-map .leaflet-control-attribution { font-family:var(--font-body); font-size:9px; } .dainty-map-pin { background:transparent; border:0; } .dainty-map-pin span { display:block; width:16px; height:16px; border-radius:50% 50% 50% 0; background:var(--color-brand-pink-deep); border:2px solid var(--color-white); box-shadow:0 2px 5px rgba(78,49,41,.24); transform:rotate(-45deg); } .leaflet-tooltip { border:1px solid var(--color-border); border-radius:4px; color:var(--color-dark-brown); font-family:var(--font-body); font-size:.72rem; } .map-note { background:var(--color-white); border:1px solid var(--color-border); border-radius:6px; padding:20px 24px; display:flex; align-items:flex-start; gap:14px; } .map-note span { color:var(--color-warm-brown); font-size:1.4rem; line-height:1; } .map-note p { font-family:var(--font-body); font-size:.85rem; font-weight:300; color:var(--color-text-muted); line-height:1.65; } .map-note strong { color:var(--color-dark-brown); font-weight:500; } @media (min-width:900px) { .locations-grid { grid-template-columns:1fr 1fr; } } @media (max-width:640px) { .location-map { height:340px; } }
      `}</style>
    </section>
  );
}
