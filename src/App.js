import { useRef } from 'react';
import './styles.css';

const OWNER_EMAIL = 'priteshdman.pd@gmail.com'; // 🔁 Replace with Pritesh's actual email

const NAV_LINKS = ['About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

const SERVICES = [
  { icon: '💃', title: 'Couple Dance', desc: 'Romantic choreography tailored for the bride & groom.' },
  { icon: '🎶', title: 'Sangeet Night', desc: 'High-energy routines that get the whole family grooving.' },
  { icon: '👨‍👩‍👧', title: 'Family Performances', desc: 'Coordinated group acts for all ages and skill levels.' },
  { icon: '✨', title: 'Wedding Entry', desc: 'Grand entry concepts that leave a lasting impression.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
  'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600',
];

const TESTIMONIALS = [
  { name: 'Shreya & Rohit', text: 'Pritesh made our sangeet the most memorable night of our lives. Every step was perfect!', loc: 'Indore' },
  { name: 'Utkarsh & Saisha', text: 'Our family performance was a showstopper. Guests are still talking about it!', loc: 'Indore' },
  { name: 'Vinay & Falguni', text: 'The wedding entry choreography was exactly what we dreamed of. Pure magic!', loc: 'Indore' },
];

export default function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const formRef = useRef();

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        {/* <div className="nav-brand">Dance Choreographer</div> */}
        <ul className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link.toLowerCase())}>{link}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay">
          <p className="hero-tagline">✦ Award-Winning Choreographer ✦</p>
          <h1 className="hero-title">Pritesh Dhiman</h1>
          <h2 className="hero-sub">Dance Choreographer</h2>
          <p className="hero-desc">Creating unforgettable wedding moments through the art of dance.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Book a Session</button>
            <button className="btn-outline" onClick={() => scrollTo('services')}>Explore Services</button>
          </div>
        </div>
        <div className="scroll-hint">↓</div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=600" alt="Pritesh Dhiman" />
          </div>
          <div className="about-text">
            <span className="section-badge">About Me</span>
            <h2>10+ Years of Crafting Dance Stories</h2>
            <p>Hi, I'm Pritesh Dhiman — a passionate wedding dance choreographer based in India. I specialize in transforming wedding celebrations into cinematic experiences through expressive, personalized choreography.</p>
            <p>From intimate couple dances to large family performances, every routine I design is unique, emotion-driven, and audience-ready.</p>
            <div className="stats-row">
              <div className="stat"><span>200+</span>Weddings</div>
              <div className="stat"><span>500+</span>Students</div>
              <div className="stat"><span>10+</span>Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section" id="services">
        <div className="section-header">
          <span className="section-badge">What I Offer</span>
          <h2>Services</h2>
        </div>
        <div className="cards-grid">
          {SERVICES.map(s => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section" id="gallery">
        <div className="section-header">
          <span className="section-badge">Moments</span>
          <h2>Gallery</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Performance ${i + 1}`} />
              <div className="gallery-overlay"><span>✦</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section" id="testimonials">
        <div className="section-header">
          <span className="section-badge">Love Stories</span>
          <h2>What Couples Say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">★★★★★</div>
              <p>"{t.text}"</p>
              <div className="testi-author">
                <strong>{t.name}</strong>
                <span>{t.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2>Book Your Session</h2>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={(e) => {
          e.preventDefault();
          const { from_name, reply_to, event_date, message } = formRef.current;
          const subject = encodeURIComponent(`Wedding Booking Request - ${from_name.value}`);
          const body = encodeURIComponent(
`Name: ${from_name.value}
Email: ${reply_to.value}
Event Date: ${event_date.value || 'Not specified'}

Message:
${message.value}`
          );
          window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
          formRef.current.reset();
        }}>
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="reply_to" placeholder="Your Email" required />
          </div>
          <input type="text" name="event_date" placeholder="Event Date" />
          <textarea rows="4" name="message" placeholder="Tell me about your wedding vision..." required></textarea>
          <button type="submit" className="btn-primary">Send Message ✦</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Pritesh Dhiman · Wedding Dance Choreographer</p>
        <p className="footer-social">
          <a href="#home">Instagram</a> · <a href="#home">YouTube</a> · <a href="#home">WhatsApp</a>
        </p>
      </footer>
    </div>
  );
}
