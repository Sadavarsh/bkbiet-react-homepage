import React, { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Menu, X, ChevronDown, ChevronRight,
  GraduationCap, Microscope, BriefcaseBusiness, Users, BookOpen,
  Building2, Lightbulb, Globe2, Trophy, CalendarDays, MapPin,
  Phone, Mail, Instagram, Linkedin, Facebook, Youtube, Play,
  CheckCircle2, MoveUpRight, Quote, Sparkles, FlaskConical, CalendarCheck, UsersRound, Award, ArrowUpRight as ArrowUpRightIcon
} from "lucide-react";

const campus = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=88";
const students = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85";
const lab = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85";
const library = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85";
const campusLab = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=85";
const campusSports = "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=85";
const campusEvent = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85";
// Replace this URL with the Director's real portrait when it is available.
const directorPortrait = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=88";

const navItems = [
  { label: "About", links: ["About BKBIET", "Vision & Mission", "Leadership", "Accreditation"] },
  { label: "Academics", links: ["Programmes", "Departments", "Faculty", "Academic Calendar"] },
  { label: "Admissions", links: ["B.Tech Admissions", "M.Tech Admissions", "Scholarships", "Admission Enquiry"] },
  { label: "Campus Life", links: ["Campus & Facilities", "Campus Gallery", "Student Clubs", "Sports & Activities", "Hostels"] },
  { label: "Placements", links: ["Placement Highlights", "Recruiters", "Career Development", "Alumni"] },
];

const programmes = [
  { code: "01", title: "Computer Science & Engineering", text: "Build intelligent systems, software and technologies that shape tomorrow.", tag: "B.Tech", icon: "⌘" },
  { code: "02", title: "Artificial Intelligence", text: "Explore machine learning, intelligent computing and real-world AI applications.", tag: "B.Tech", icon: "✳" },
  { code: "03", title: "Data Science", text: "Turn complex data into meaningful insights and smarter decisions.", tag: "B.Tech", icon: "▥" },
  { code: "04", title: "Electronics & Communication", text: "Connect the world through electronics, communication and embedded innovation.", tag: "B.Tech", icon: "⌁" },
  { code: "05", title: "Electrical Engineering", text: "Power a sustainable future with modern electrical and energy systems.", tag: "B.Tech", icon: "ϟ" },
  { code: "06", title: "Information Technology", text: "Create digital experiences through networks, platforms and emerging technology.", tag: "B.Tech", icon: "⌘" },
];

const updates = [
  { date: "NOV 12, 2026", type: "Campus News", title: "Ideas in action: students explore the future of AI and intelligent systems", image: lab },
  { date: "OCT 28, 2026", type: "Student Life", title: "A campus full of energy, creativity and new beginnings", image: students },
  { date: "OCT 10, 2026", type: "Industry Connect", title: "Building stronger links between classroom learning and industry", image: campus },
];

function Brand() {
  return <a className="brand" href="#home" aria-label="BKBIET home">
    <div className="brand-mark"><span>BK</span><small>BIET</small></div>
    <div className="brand-name"><strong>BKBIET</strong><span>PILANI, RAJASTHAN</span></div>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return <>
    <div className="topbar"><div className="container topbar-inner">
      <span>Approved by AICTE, New Delhi <i/> Affiliated to Bikaner Technical University</span>
      <div className="top-links"><a href="#news-events">Latest Updates</a><a href="#contact">Contact</a><a href="#admissions">Student Corner ↗</a></div>
    </div></div>
    <header className="header"><div className="container nav-wrap">
      <Brand />
      <nav className={open ? "nav-links open" : "nav-links"}>
        {navItems.map(item => <div className="nav-item" key={item.label}>
          <button className={active === item.label ? "nav-trigger selected" : "nav-trigger"} onClick={() => setActive(active === item.label ? "" : item.label)}>
            {item.label}<ChevronDown size={14}/>
          </button>
          {active === item.label && <div className="dropdown">{item.links.map(link => <a href="#explore" key={link} onClick={() => {setActive("");setOpen(false)}}>{link}<ChevronRight size={14}/></a>)}</div>}
        </div>)}
      </nav>
      <a className="nav-cta" href="#admissions">Apply now <ArrowUpRight size={16}/></a>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div></header>
  </>;
}

function Hero() {
  return <section className="hero" id="home" style={{"--hero-image": `url(${campus})`}}>
    <div className="hero-shade"/>
    <div className="container hero-content">
      <div className="hero-kicker"><span className="kicker-line"/> AN INDUSTRY-ORIENTED & APPLICATION-DRIVEN INSTITUTE</div>
      <h1>Where ambition<br/>finds its <em>direction.</em></h1>
      <p>Discover a learning environment that turns curiosity into capability — and potential into purpose.</p>
      <div className="hero-actions"><a href="#admissions" className="btn btn-gold">Explore admissions <ArrowUpRight size={17}/></a><a href="#about" className="text-link light"><span className="play"><Play size={12} fill="currentColor"/></span> Discover BKBIET</a></div>
    </div>
    <div className="hero-bottom"><div className="container hero-bottom-inner">
      <div className="hero-location"><MapPin size={15}/> PILANI, RAJASTHAN, INDIA</div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span/></div>
      <div className="hero-index">01 <span>/</span> 03</div>
    </div></div>
  </section>;
}

function Intro() {
  return <section className="intro section-pad" id="about"><div className="container intro-grid">
    <div className="intro-label"><span className="eyebrow">A PLACE TO BEGIN</span><div className="vertical-note">EST. IN PILANI · RAJASTHAN</div></div>
    <div className="intro-main">
      <h2>Education that goes<br/>beyond the <em>classroom.</em></h2>
      <p className="intro-lead">At B.K. Birla Institute of Engineering & Technology, learning is a journey of discovery, collaboration and real-world problem solving.</p>
      <div className="intro-bottom"><p>We bring together committed faculty, industry-oriented learning and a vibrant campus culture to help students grow into confident professionals and responsible leaders.</p><a className="circle-link" href="#explore" aria-label="Explore BKBIET"><ArrowUpRight/></a></div>
    </div>
    <div className="intro-photo"><img src={students} alt="Students walking across a university campus"/><div className="photo-caption"><span>01 / THE BKBIET EXPERIENCE</span><strong>Learn with purpose.<br/>Grow with confidence.</strong></div></div>
  </div></section>;
}

function DirectorMessage() {
  return <section className="director section-pad" id="director-message">
    <div className="container director-grid">
      <div className="director-copy">
        <span className="eyebrow">A MESSAGE FROM OUR DIRECTOR</span>
        <h2>Shaping minds.<br/><em>Empowering futures.</em></h2>
        <p>Dear Students and Parents,</p>
        <p>As we navigate the complexities of the 21st century, it’s essential to recognize the importance of technological advancements and their impact on our future. At BKBIET, we’re committed to providing a holistic education that not only focuses on academic excellence but also on developing well-rounded individuals.</p>
        <p>Our goal is to equip students with the knowledge, skills, and values necessary to thrive in a rapidly changing world. We emphasize the development of critical thinking, problem-solving, and collaboration skills, as well as creativity, innovation, and leadership.</p>
        <p>Beyond academics, we encourage students to participate in extracurricular activities, sports, and community service to foster their emotional intelligence, social responsibility, and personal growth.</p>
        <p>At BKBIET, we have a dedicated team of well-qualified faculty to help the students in reaching their goals.</p>
        <p>To our students, I urge you to seize every opportunity, explore your passions, and develop a growth mindset. Stay adaptable, resilient, and open to new ideas and perspectives.</p>
        <p>To our parents, I express my gratitude for entrusting us with your child’s education. We value your partnership and look forward to working together to nurture their intellectual, emotional, and social development.</p>
        <p>Together, let’s empower our students to become leaders, innovators, and responsible citizens who can make a positive impact in the world.</p>
        <a className="director-more" href="https://www.bits-pilani.ac.in/pilani/bijay-k-rout/" target="_blank" rel="noreferrer">Click here for more details <ArrowUpRight size={16}/></a>
        <div className="director-signature"><strong>Prof. Bijay Kumar Rout, Ph.D.</strong><span>Director, B.K. Birla Group of Institutions</span></div>
      </div>
      <aside className="director-portrait-wrap">
        <div className="director-portrait"><img src={directorPortrait} alt="Director Prof. Bijay Kumar Rout"/><span className="portrait-caption">LEADERSHIP & VISION</span></div>
        <div className="director-quote-mark">“</div>
        <p className="director-side-note">Inspiring excellence through knowledge, character and innovation.</p>
      </aside>
    </div>
  </section>;
}

function Stats() {
  return <section className="stats"><div className="container stats-grid">
    <div className="stats-heading"><span className="eyebrow">THE BKBIET EDGE</span><h3>Grounded in<br/><em>possibility.</em></h3></div>
    <div className="stat"><strong>2011</strong><span>Building futures<br/>since</span></div>
    <div className="stat"><strong>7<span>+</span></strong><span>Engineering<br/>programmes</span></div>
    <div className="stat"><strong>01</strong><span>Connected<br/>campus community</span></div>
    <div className="stat"><strong>∞</strong><span>Ways to learn,<br/>create and grow</span></div>
  </div></section>;
}

function Programmes() {
  return <section className="programmes section-pad" id="explore"><div className="container">
    <div className="section-head"><div><span className="eyebrow">LEARN WHAT MOVES YOU</span><h2>Find your field.<br/><em>Shape what’s next.</em></h2></div><div className="section-side"><p>Explore programmes designed to build strong fundamentals, practical skills and a future-ready mindset.</p><a href="#admissions" className="under-link">Explore all programmes <ArrowUpRight size={16}/></a></div></div>
    <div className="programme-grid">{programmes.map((p) => <a href="#admissions" className="programme-card" key={p.code}>
      <div className="programme-top"><span>{p.code} / {p.tag}</span><span className="programme-icon">{p.icon}</span></div>
      <h3>{p.title}</h3><p>{p.text}</p><div className="programme-foot"><span>Discover programme</span><ArrowUpRight size={18}/></div>
    </a>)}</div>
  </div></section>;
}

function Experience() {
  const features = [
    {icon:<Microscope/>, title:"Learn by doing", text:"Hands-on learning, laboratories and project-based experiences."},
    {icon:<Lightbulb/>, title:"Think beyond", text:"An environment that encourages curiosity, creativity and innovation."},
    {icon:<BriefcaseBusiness/>, title:"Connect with industry", text:"Industry interaction, internships and career-focused development."},
    {icon:<Users/>, title:"Find your community", text:"Student clubs, technical chapters, sports and cultural activities."}
  ];
  return <section className="experience section-pad"><div className="container experience-grid">
    <div className="experience-image"><img src={lab} alt="Engineering students working in a modern laboratory"/><div className="image-stamp"><Sparkles size={18}/><span>Curiosity<br/>in motion</span></div></div>
    <div className="experience-copy"><span className="eyebrow">MORE THAN A DEGREE</span><h2>Make room for<br/><em>what’s possible.</em></h2><p className="muted">The best learning happens when ideas meet action. At BKBIET, students are encouraged to experiment, collaborate and take on challenges that prepare them for the world beyond campus.</p>
      <div className="feature-list">{features.map((f,i)=><div className="feature" key={f.title}><div className="feature-icon">{f.icon}</div><div><h4>{f.title}</h4><p>{f.text}</p></div><span className="feature-no">0{i+1}</span></div>)}</div>
    </div>
  </div></section>;
}

function Campus() {
  return <section className="campus section-pad"><div className="container">
    <div className="section-head campus-head"><div><span className="eyebrow">LIFE AT BKBIET</span><h2>Find your people.<br/><em>Make your mark.</em></h2></div><div className="section-side"><p>A campus is more than a place to study. It is where friendships begin, talents find a stage and lifelong memories take shape.</p><a href="#contact" className="under-link">Explore campus life <ArrowUpRight size={16}/></a></div></div>
    <div className="campus-gallery">
      <div className="campus-large"><img src={campus} alt="University campus building"/><div className="gallery-label"><span>01 / CAMPUS</span><strong>A place to belong.</strong></div></div>
      <div className="campus-small"><img src={library} alt="University library"/><div className="gallery-label"><span>02 / LEARNING SPACES</span><strong>Space to explore.</strong></div></div>
      <div className="campus-quote"><Quote size={27}/><p>Great things happen when bright minds come together.</p><span>THE BKBIET SPIRIT</span></div>
    </div>
  </div></section>;
}

function Placement() {
  return <section className="placement"><div className="container placement-grid">
    <div><span className="eyebrow gold-eyebrow">CAREERS & OPPORTUNITIES</span><h2>From learning<br/>to <em>leading.</em></h2><p>Build the confidence, knowledge and professional skills to take your next step. Our placement and career development initiatives connect students with opportunities to grow.</p><a href="#admissions" className="btn btn-light">Explore career support <ArrowUpRight size={17}/></a></div>
    <div className="placement-panel"><div className="panel-top"><span>PLACEMENT SNAPSHOT</span><BriefcaseBusiness size={20}/></div><div className="panel-big">117<span>+</span></div><p>Recruiters in the 2022–23 placement summary</p><div className="panel-divider"/><div className="panel-row"><span>Job offers recorded</span><strong>136</strong></div><div className="panel-row"><span>Recruiter engagement</span><strong>Across sectors</strong></div><small>Historical figures from the institute's published 2022–23 placement summary.</small></div>
  </div></section>;
}

function Updates() {
  return <section className="updates section-pad" id="updates"><div className="container">
    <div className="section-head"><div><span className="eyebrow">WHAT’S HAPPENING</span><h2>Campus stories &<br/><em>latest updates.</em></h2></div><div className="section-side"><p>Stay close to the ideas, achievements and moments shaping our campus community.</p><a href="#contact" className="under-link">View all updates <ArrowUpRight size={16}/></a></div></div>
    <div className="updates-grid">{updates.map((u,i)=><a href="#contact" className="update-card" key={u.title}><div className="update-image"><img src={u.image} alt="Campus update"/><span className="update-arrow"><ArrowUpRight/></span></div><div className="update-meta"><span>{u.type}</span><span>{u.date}</span></div><h3>{u.title}</h3><span className="read-more">Read story <ArrowRight size={15}/></span></a>)}</div>
  </div></section>;
}

function NewsEvents() {
  const news = [
    { category: "CAMPUS NEWS", title: "Student innovation and project showcases", text: "A look at the ideas, teamwork and practical learning happening across campus.", date: "LATEST UPDATE", image: lab },
    { category: "STUDENT LIFE", title: "Clubs, culture and campus community", text: "Explore the activities that bring students together beyond the classroom.", date: "CAMPUS STORY", image: students },
    { category: "ACADEMIC LIFE", title: "Learning through collaboration", text: "Discover how collaborative projects help students build confidence and skills.", date: "INSTITUTE UPDATE", image: campusEvent },
  ];
  const events = [
    { date: "DATE TO BE ANNOUNCED", title: "Technical seminars & expert talks", type: "ACADEMIC" },
    { date: "DATE TO BE ANNOUNCED", title: "Student cultural and club activities", type: "CAMPUS LIFE" },
    { date: "DATE TO BE ANNOUNCED", title: "Sports and inter-college events", type: "SPORTS" },
  ];
  return <section className="news-events section-pad" id="news-events"><div className="container">
    <div className="section-head"><div><span className="eyebrow">NEWSROOM & CAMPUS CALENDAR</span><h2>News, ideas &<br/><em>what’s coming up.</em></h2></div><div className="section-side"><p>Keep up with campus stories and discover activities that make student life active, connected and inspiring.</p><a href="https://bkbiet.ac.in/" target="_blank" rel="noreferrer" className="under-link">Visit official website <ArrowUpRight size={16}/></a></div></div>
    <div className="news-events-grid">
      <div className="news-column"><div className="subsection-heading"><div><span className="eyebrow">FROM THE CAMPUS</span><h3>Latest news</h3></div><span className="news-count">03 STORIES</span></div>
        <div className="news-cards">{news.map((item)=><article className="news-card" key={item.title}><img src={item.image} alt="Campus news"/><div className="news-card-copy"><div className="news-card-meta"><span>{item.category}</span><span>{item.date}</span></div><h4>{item.title}</h4><p>{item.text}</p></div></article>)}</div>
        <p className="content-note">News cards are sample content for this static homepage. Replace them with verified institute announcements.</p>
      </div>
      <aside className="events-column"><div className="subsection-heading"><div><span className="eyebrow">SAVE THE DATE</span><h3>Upcoming events</h3></div><CalendarCheck size={22}/></div>
        <div className="event-list">{events.map((event,i)=><div className="event-item" key={event.title}><div className="event-number">0{i+1}</div><div className="event-info"><span>{event.type}</span><h4>{event.title}</h4><small>{event.date}</small></div><ArrowUpRight size={18}/></div>)}</div>
        <a className="events-link" href="https://bkbiet.ac.in/" target="_blank" rel="noreferrer">Check institute announcements <ArrowUpRight size={16}/></a>
      </aside>
    </div>
  </div></section>;
}

function CampusGallery() {
  const photos = [
    { image: campus, label: "CAMPUS & ARCHITECTURE", title: "A place to belong" },
    { image: library, label: "LEARNING SPACES", title: "Room to discover" },
    { image: campusLab, label: "LABS & INNOVATION", title: "Ideas into action" },
    { image: campusSports, label: "SPORTS & WELLNESS", title: "Find your strength" },
    { image: campusEvent, label: "STUDENT COMMUNITY", title: "Moments together" },
  ];
  return <section className="gallery-section section-pad" id="campus-gallery"><div className="container">
    <div className="section-head"><div><span className="eyebrow">A GLIMPSE OF CAMPUS LIFE</span><h2>Spaces to learn.<br/><em>Memories to make.</em></h2></div><div className="section-side"><p>Explore the places and experiences that shape everyday life at BKBIET, from learning spaces to student activities.</p></div></div>
    <div className="photo-gallery">{photos.map((photo,i)=><figure className={`gallery-tile gallery-tile-${i+1}`} key={photo.label}><img src={photo.image} alt={photo.title}/><figcaption><span>{photo.label}</span><strong>{photo.title}</strong></figcaption></figure>)}</div>
    <p className="content-note">Illustrative campus photographs. Replace with approved BKBIET campus photographs before publishing.</p>
  </div></section>;
}

function Alumni() {
  return <section className="alumni-section section-pad" id="alumni"><div className="container alumni-layout">
    <div className="alumni-intro"><span className="eyebrow gold-eyebrow">CONNECTED FOR LIFE</span><h2>Once BKBIET.<br/><em>Always connected.</em></h2><p>Our alumni are an important part of the BKBIET community. Stay connected, share your journey, support current students and help create opportunities for the next generation.</p><div className="alumni-actions"><a className="btn btn-gold" href="mailto:alumni@bkbiet.ac.in?subject=BKBIET%20Alumni%20Connect">Connect with alumni <ArrowUpRight size={17}/></a><a className="alumni-text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Find your network <ArrowUpRight size={15}/></a></div></div>
    <div className="alumni-feature"><div className="alumni-feature-icon"><UsersRound size={25}/></div><span className="eyebrow">THE ALUMNI NETWORK</span><h3>Your experience can<br/>inspire the next chapter.</h3><p>Offer a mentoring conversation, share a career insight or tell us about your professional journey.</p><div className="alumni-feature-bottom"><span><Award size={17}/> MENTOR · INSPIRE · CONNECT</span><ArrowUpRight size={20}/></div></div>
  </div><div className="container alumni-bottom"><span>ALUMNI COMMUNITY</span><p>Have an update, achievement or story to share?</p><a href="mailto:alumni@bkbiet.ac.in?subject=Alumni%20story">Share your story <ArrowUpRight size={15}/></a></div>
  <div className="container"><p className="content-note alumni-note">Alumni contact details and network links are placeholders. Confirm the official alumni contact and channels before publishing.</p></div>
  </section>;
}

function CTA() {
  return <section className="cta" id="admissions"><div className="container cta-inner"><div><span className="eyebrow gold-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to make<br/><em>something happen?</em></h2><p>Take the first step towards a future shaped by knowledge, curiosity and possibility.</p></div><a className="btn btn-gold cta-button" href="https://bkbiet.ac.in/" target="_blank" rel="noreferrer">Visit official website <ArrowUpRight size={18}/></a></div></section>;
}

function Footer() {
  return <footer className="footer" id="contact"><div className="container">
    <div className="footer-main"><div className="footer-brand"><Brand/><p>An industry-oriented and application-driven institute, committed to helping students learn, innovate and lead.</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="LinkedIn"><Linkedin/></a><a href="#contact" aria-label="Facebook"><Facebook/></a><a href="#contact" aria-label="YouTube"><Youtube/></a></div></div>
      <div className="footer-col"><h4>Explore</h4><a href="#about">About BKBIET</a><a href="#explore">Academics</a><a href="#admissions">Admissions</a><a href="#news-events">News & Events</a></div>
      <div className="footer-col"><h4>Discover</h4><a href="#explore">Programmes</a><a href="#campus-gallery">Campus Gallery</a><a href="#admissions">Placements</a><a href="#alumni">Alumni</a></div>
      <div className="footer-col contact-col"><h4>Get in touch</h4><span><MapPin/> B.K. Birla Institute of Engineering & Technology, Pilani, Rajasthan, India</span><a href="mailto:admissions@bkbiet.ac.in"><Mail/> admissions@bkbiet.ac.in</a><a href="https://bkbiet.ac.in/" target="_blank" rel="noreferrer"><Globe2/> bkbiet.ac.in</a></div>
    </div><div className="footer-bottom"><span>© 2026 B.K. Birla Institute of Engineering & Technology, Pilani.</span><span>Designed for learning. Built for the future.</span><a href="#home">Back to top ↑</a></div>
  </div></footer>;
}

export default function App() {
  return <><Header/><main><Hero/><Intro/><DirectorMessage/><Stats/><Programmes/><Experience/><Campus/><CampusGallery/><Placement/><NewsEvents/><Updates/><Alumni/><CTA/></main><Footer/></>;
}