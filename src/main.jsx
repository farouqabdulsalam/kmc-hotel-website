import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BedDouble, CalendarDays,
  Check, ChevronDown, Coffee, Dumbbell, MapPin, Menu, MessageCircle,
  ShieldCheck, Sparkles, Utensils, Waves, Wifi, X
} from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "2347034927988"; // Publicly listed hotel phone; confirm WhatsApp availability before launch.
const demoRooms = [
  {
    name: "Hotel Exterior", type: "A first look at kMC", price: "View details",
    image: "/images/kmc-building-front.webp",
    details: "A view of the hotel building and its contemporary exterior."
  },
  {
    name: "Outdoor Grounds", type: "Arrive and settle in", price: "View details",
    image: "/images/kmc-exterior-garden.jpg",
    details: "See the landscaped approach and outdoor setting around the property."
  },
  {
    name: "Fitness Centre", type: "Make time for wellness", price: "View details",
    image: "/images/kmc-gym.jpg",
    details: "The fitness space pictured at the property, with cardio and exercise equipment."
  },
  {
    name: "Evening Ambience", type: "A glimpse of the property", price: "View details",
    image: "/images/kmc-exterior-night.jpg",
    details: "An evening view of the building and its illuminated entrance."
  }
];

const facilities = [
  { icon: Coffee, title: "Bakery", copy: "A convenient stop for bakery treats and refreshments." },
  { icon: Utensils, title: "Lounge", copy: "A relaxed place to meet, unwind and spend time." },
  { icon: Dumbbell, title: "Gym", copy: "An on-site fitness space with exercise equipment." },
  { icon: BedDouble, title: "KMC Grocery", copy: "Everyday grocery convenience within the property." },
  { icon: Sparkles, title: "Specialty Shop", copy: "An additional retail convenience on the property." },
  { icon: Waves, title: "Laundry", copy: "Laundry services for added convenience during your stay." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [room, setRoom] = useState("Accommodation enquiry");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 guests");

  const bookingMessage = (selectedRoom = room) => {
    const message = `Hello kMC Hotel, I would like to enquire about a reservation.%0A%0ARoom: ${encodeURIComponent(selectedRoom)}%0ACheck-in: ${encodeURIComponent(checkIn || "To be confirmed")}%0ACheck-out: ${encodeURIComponent(checkOut || "To be confirmed")}%0AGuests: ${encodeURIComponent(guests)}%0A%0APlease confirm availability and the current rate.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const navItems = [["Discover kMC", "#rooms"], ["Facilities", "#experience"], ["Our story", "#story"], ["Gallery", "#gallery"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="announcement"><span>AN INVITATION TO SLOW DOWN</span><span className="announce-dot" /> A warm welcome, every time.</div>
      <header className="header">
        <a className="brand" href="#home" aria-label="kMC Hotel home">
          <span className="brand-mark">kMC<span>.</span></span>
          <span className="brand-sub">HOTEL & HOSPITALITY</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-mobile-cta" href="#booking" onClick={() => setMenuOpen(false)}>Enquire now <ArrowUpRight size={15}/></a>
        </nav>
        <a className="header-cta" href="#booking">Make an enquiry <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <motion.p className="eyebrow light" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}}>WELCOME TO kMC HOTEL</motion.p>
            <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.1}}>Stay a while.<br/><em>Feel at home.</em></motion.h1>
            <motion.p className="hero-copy" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}>A welcoming destination in Karu, bringing accommodation, leisure and everyday conveniences together.</motion.p>
            <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}>
              <a className="button button-sand" href="#rooms">Discover kMC <ArrowUpRight size={16}/></a>
              <a className="text-link light-link" href="#story">Discover kMC <ArrowDownRight size={16}/></a>
            </motion.div>
          </div>
          <div className="hero-caption"><span>01 / 04</span><span>COMFORT, WITH CHARACTER</span></div>
        </section>

        <section className="booking-wrap" id="booking">
          <div className="booking-intro"><span className="eyebrow">PLAN YOUR STAY</span><h2>Let’s make it<br/><em>feel effortless.</em></h2></div>
          <div className="booking-panel">
            <div className="field">
              <label htmlFor="checkin"><CalendarDays size={17}/> CHECK IN</label>
              <input id="checkin" type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="checkout"><CalendarDays size={17}/> CHECK OUT</label>
              <input id="checkout" type="date" min={checkIn || undefined} value={checkOut} onChange={e=>setCheckOut(e.target.value)} />
            </div>
            <div className="field select-field">
              <label htmlFor="guests"> <BedDouble size={17}/> GUESTS</label>
              <select id="guests" value={guests} onChange={e=>setGuests(e.target.value)}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select>
              <ChevronDown className="select-chevron" size={15}/>
            </div>
            <button className="button button-dark booking-button" onClick={()=>bookingMessage()}>Enquire on WhatsApp <ArrowUpRight size={16}/></button>
          </div>
          <p className="booking-note"><ShieldCheck size={14}/> Your enquiry goes directly to the hotel team. Availability is confirmed by staff.</p>
        </section>

        <section className="rooms section-pad" id="rooms">
          <div className="section-heading">
            <div><span className="eyebrow">EXPLORE THE PROPERTY</span><h2>A closer look at<br/><em>the kMC experience.</em></h2></div>
            <p>Explore the property, its facilities and the spaces that make up a kMC stay.</p>
          </div>
          <div className="room-grid">
            {demoRooms.map((r,i)=><motion.article className="room-card" key={r.name} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay:i*.08}}>
              <div className="room-photo"><img src={r.image} alt={`${r.name} property photograph`} loading="lazy"/><span className="room-index">0{i+1}</span><button aria-label={`Enquire about ${r.name}`} onClick={()=>{setRoom(r.name);bookingMessage(r.name)}} className="room-arrow"><ArrowUpRight size={19}/></button></div>
              <div className="room-info"><div><span className="room-type">{r.type}</span><h3>{r.name}</h3></div><p>{r.details}</p><div className="room-bottom"><span className="room-price">Ask us<small> for details</small></span><button className="room-book" onClick={()=>{setRoom(r.name);bookingMessage(r.name)}}>Enquire <ArrowUpRight size={14}/></button></div></div>
            </motion.article>)}
          </div>
          
        </section>

        <section className="quote-band">
          <div className="quote-content"><span className="eyebrow light">THE kMC EXPERIENCE</span><h2>“The best stays<br/>leave room for <em>living.”</em></h2><p>Whether you are here to rest, reconnect or get things done, let the little details make a difference.</p><a href="#contact" className="text-link light-link">A little more about us <ArrowUpRight size={16}/></a></div>
          <div className="quote-visual"><img src="/images/ambient-reception-visual.jpg" alt="Warm, contemporary hotel reception design inspiration" /><span>KARU / ABUJA</span></div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-heading experience-heading"><div><span className="eyebrow">MORE THAN A ROOM</span><h2>Space for the<br/><em>moments in between.</em></h2></div><p>More than a place to stay, kMC brings useful everyday conveniences and leisure spaces together in one location.</p></div>
          <div className="facility-grid">
            {facilities.map(({icon:Icon,title,copy},i)=><div className="facility" key={title}><div className="facility-icon"><Icon size={22}/></div><span className="facility-no">0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          
        </section>

        <section className="story section-pad" id="story">
          <div className="story-photo"><img src="/images/kmc-building-front.webp" alt="kMC Hotel exterior" loading="lazy"/><span className="photo-label">A PLACE TO FEEL AT EASE</span></div>
          <div className="story-copy"><span className="eyebrow">A WARM WELCOME</span><h2>Good hospitality<br/>is in the <em>details.</em></h2><p>At kMC Hotel, we believe a memorable stay begins with how you feel. From the welcome at the door to the quiet comfort of your surroundings, every detail should help you settle in.</p><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=KMC+Hotel+Plot+MF57+Cadastral+Zone+Karu+Abuja" target="_blank" rel="noreferrer">Get directions <MapPin size={16}/></a></div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="gallery-head"><div><span className="eyebrow">A GLIMPSE OF THE STAY</span><h2>Spaces to <em>settle into.</em></h2></div><span className="gallery-note">A CLOSER LOOK AT THE kMC EXPERIENCE</span></div>
          <div className="gallery-grid">
            <figure className="gallery-feature"><img src="/images/kmc-building-front.webp" alt="kMC Hotel building exterior" loading="lazy"/><figcaption>THE HOTEL</figcaption></figure>
            <figure><img src="/images/kmc-exterior-night.jpg" alt="kMC Hotel exterior at dusk" loading="lazy"/><figcaption>EVENING VIEW</figcaption></figure>
            <figure><img src="/images/kmc-gym.jpg" alt="Fitness equipment at kMC Hotel" loading="lazy"/><figcaption>FITNESS SPACE</figcaption></figure>
            <figure><img src="/images/kmc-signage.jpg" alt="kMC Hotel property signage" loading="lazy"/><figcaption>ON-SITE SERVICES</figcaption></figure>
          </div>
          
        </section>

        <section className="contact-cta" id="contact">
          <div><span className="eyebrow light">YOUR NEXT STAY STARTS HERE</span><h2>Come as you are.<br/><em>Leave well rested.</em></h2><p>Have a question or planning a visit? Send the team an enquiry and they’ll help you take it from there.</p></div>
          <button className="button button-sand large-cta" onClick={()=>bookingMessage()}>Start a WhatsApp enquiry <MessageCircle size={17}/></button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><div className="brand footer-brand"><span className="brand-mark">kMC<span>.</span></span><span className="brand-sub">HOTEL & HOSPITALITY</span></div><p>A considered stay.<br/>A warm welcome, every time.</p><div className="footer-links"><a href="#rooms">Rooms</a><a href="#experience">Experience</a><a href="#story">Our story</a><a href="#contact">Contact</a></div><div className="footer-contact"><span>Plot MF57 Cadastral Zone, Karu, Abuja, FCT</span><a href="tel:+2347034927988">+234 703 492 7988</a><a href="https://wa.me/2347034927988">WhatsApp enquiries</a><span>© 2026 kMC Hotel</span></div></div>
        <div className="footer-bottom"><span>DESIGNED WITH CARE</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
