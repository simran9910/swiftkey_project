import { useEffect, useMemo, useState } from 'react';
import './App.css';

const transitionTypes = ['bars', 'vortex', 'blinds', 'checkerboard', 'box'];

const getRandomTransition = () =>
  transitionTypes[Math.floor(Math.random() * transitionTypes.length)];

const heroSlides = [
  {
    image: '/assets/cakecity.jpeg',
    label: 'Welcome',
    titleLine1: 'Welcome',
    titleLine2: 'to SwiftKey',
    subtitle: 'Your premium construction partner',
    text: 'We deliver high-quality construction and hospitality solutions across Kenya.',
  },
  {
    image: '/assets/artcafe.jpeg',
    label: 'Luxury Construction',
    titleLine1: 'Building',
    titleLine2: 'Modern Spaces',
    subtitle: 'Premium hospitality and commercial interiors',
    text: 'We create elegant restaurants, cafés, and hospitality spaces with modern construction solutions.',
  },
  {
    image: '/assets/kangauri.jpeg',
    label: 'Interior Excellence',
    titleLine1: 'Crafting',
    titleLine2: 'Elegant Interiors',
    subtitle: 'Designed for comfort and functionality',
    text: 'SwiftKey delivers stylish interiors with durable finishes and exceptional customer experiences.',
  },
  {
    image: '/assets/image22.jpeg',
    label: 'Trusted Engineering',
    titleLine1: 'Innovative',
    titleLine2: 'Construction Solutions',
    subtitle: 'Reliable execution with premium quality',
    text: 'From planning to execution, we provide high-end construction and fit-out services across Kenya.',
  },
  {
    image: '/assets/project-mammam-vietnamese.png',
    label: 'Commercial Kitchen Specialists',
    titleLine1: 'Precision.',
    titleLine2: 'Performance.',
    subtitle: 'Construction & hospitality spaces delivered with unmatched quality.',
    text: 'SwiftKey Development Limited designs, builds, fabricates, fits out, and maintains commercial kitchens and hospitality environments across Kenya.',
  },
  {
    image: '/assets/project-mam-mam.png',
    label: 'Restaurant Interiors',
    titleLine1: 'Spaces',
    titleLine2: 'That Inspire.',
    subtitle: 'Efficient layouts with a premium customer experience.',
    text: 'We plan dining, service, and operational zones so restaurants can move smoothly, look refined, and perform every single day.',
  },
  {
    image: '/assets/project-cake-city-luqman.png',
    label: 'Food Service Fit-Outs',
    titleLine1: 'Built',
    titleLine2: 'To Last.',
    subtitle: 'Durable finishes crafted for high-use commercial spaces.',
    text: 'From stainless steel fabrication to interior fixtures, every detail is selected for hygiene, longevity, and visual quality.',
  },
  {
    image: '/assets/project-artcaffe-redhill.png',
    label: 'Premium Interior Solutions',
    titleLine1: 'Designed',
    titleLine2: 'For Impact.',
    subtitle: 'Modern commercial interiors with elegance and functionality.',
    text: 'We create visually stunning and highly practical environments tailored for restaurants, cafés, and hospitality businesses.',
  },
];

const services = [
  [
    'Design Services',
    'Commercial kitchen design, space planning, functional layouts, and custom designs tailored to client operations and standards.',
  ],
  [
    'Civil & Building Construction',
    'General civil works, structural and finishing works, renovations, remodeling, and commercial construction delivery.',
  ],
  // [
  //   'Metal Fabrication',
  //   'Stainless steel shelving, counters, hoods, cabinets, workstations, and custom metal works for hygiene compliance.',
  // ],
  [
    'Fit-Outs',
    'Complete kitchen fit-outs, fabricated unit installation, fixtures, and hospitality or commercial interior fit-outs.',
  ],
  [
    'Maintenance Services',
    'Preventive and corrective maintenance, repairs, upgrades, and ongoing support for reliable long-term performance.',
  ],
];

const projects = [
  {
    image: '/assets/artcafe.jpeg',
    category: 'Artcafe',
    scope: 'Restaurant fit-out and dining environment',
    points: [
      'Designed and developed a modern restaurant space focused on delivering a premium dining experience.',
      'Planned an efficient layout that supports smooth customer flow and optimized service operations.',
      'Used high-quality materials and refined finishes to create a stylish and comfortable environment.',
      'Implemented ambient and feature lighting to enhance the dining atmosphere and highlight key areas.',
    ],
  },
  {
    image: '/assets/cakecity.jpeg',
    category: 'Cake City Luqman Petrol Station',
    scope: 'Premium café design and customer experience',
    points: [
      'Created a contemporary café interior with elegant seating and warm ambience.',
      'Designed efficient service and kitchen layouts for smooth workflow.',
      'Integrated decorative lighting and modern textures for a premium visual appeal.',
      'Focused on customer comfort with functional and aesthetic furniture placement.',
    ],
  },
  {
    image: '/assets/mummam.jpeg',
    category: 'Mammam Vietnamese Restaurant Westland',
    scope: 'Restaurant branding and interior execution',
    points: [
      'Developed a visually appealing dining environment with modern finishes.',
      'Optimized customer movement and staff operational efficiency.',
      'Used custom lighting concepts to enhance mood and branding.',
      'Delivered a durable and stylish commercial dining setup.',
    ],
  },
  {
    image: '/assets/artcafe.jpeg',
    category: 'Artcaffe Redhill',
    scope: 'Restaurant fit-out and dining environment',
    points: [
      'Designed and developed a modern restaurant space focused on delivering a premium dining experience.',
      'Planned an efficient layout that supports smooth customer flow and optimized service operations.',
      'Used high-quality materials and refined finishes to create a stylish and comfortable environment.',
      'Implemented ambient and feature lighting to enhance the dining atmosphere and highlight key areas.',
    ],
  },
  {
    image: '/assets/project-cake-city.png',
    category: 'Joto Ramen Japanese Restaurant',
    scope: 'Bakery retail planning and display counters',
    points: [
      'Designed a premium bakery retail space focused on creating a warm and welcoming customer atmosphere.',
      'Optimized the store layout to improve product visibility and enhance the overall shopping flow.',
      'Used high-quality materials and elegant finishes to build a modern and durable interior.',
      'Implemented focused lighting solutions to highlight cakes and display counters effectively.',
      'Delivered a visually appealing bakery environment that aligns with brand identity.',
    ],
  },
  {
    image: '/assets/Dijowestland4.jpeg',
    category: 'Dijo Westland',
    scope: 'Cafe interior and commercial hospitality space',
    points: [
      'Developed a stylish café interior combining modern design with a comfortable customer experience.',
      'Planned a functional layout that balances seating space and service efficiency.',
      'Incorporated premium textures, materials, and décor elements to create a sophisticated ambiance.',
      'Enhanced the space with strategic lighting and aesthetic design details.',
      'Created an inviting café environment that encourages customers to relax and socialize.',
    ],
  },
  {
    image: '/assets/kangauri1.jpeg',
    category: 'Kangauri',
    scope: 'Retail bakery outlet and showcase design',
    points: [
      'Developed a stylish retail shop with a modern, welcoming ambiance.',
      'Designed open-plan layouts to optimize product display and customer flow.',
      'Used premium finishes and durable materials to ensure a high-quality shopping environment.',
      'Integrated attractive lighting and décor to highlight products and enhance the shopping experience.',
      'Delivered a functional and aesthetically pleasing store aligned with brand identity.',
    ],
  },
  {
    image: '/assets/project-artcaffe-redhill.png',
    category: 'Premium Coffee Spaces',
    scope: 'Cozy suburban cafe construction and fit-out',
    points: [
      'Executed a modern café construction with natural lighting and elegant finishes.',
      'Created versatile seating layouts to optimize both space and customer flow.',
      'Installed premium flooring, wall treatments, and ceiling designs for a stylish ambiance.',
      'Integrated cozy and functional interior elements tailored to café culture.',
      'Delivered the project on schedule with high-quality construction standards.',
    ],
  },
  {
    image: '/assets/project-cake-city-luqman.png',
    category: 'Express Food Outlet Design',
    scope: 'Express bakery fit-out and layout planning',
    points: [
      'Developed a stylish bakery outlet with functionality and customer comfort in focus.',
      'Constructed interiors that blend elegance with Cake City branding.',
      'Optimized seating and service areas for smooth customer flow.',
      'Installed durable finishes ensuring long-lasting usability.',
      'Delivered the project within strict deadlines and quality benchmarks.',
    ],
  },
  {
    image: '/assets/project-mammam-vietnamese.png',
    category: 'Ethnic Restaurant Spaces',
    scope: 'Ethnic dining construction and thematic interior',
    points: [
      'Executed construction reflecting authentic Vietnamese dining culture.',
      'Applied modern interior finishes to enhance guest comfort and style.',
      'Constructed functional dining areas with efficient seating arrangements.',
      'Integrated premium materials to balance tradition with modern design.',
      'Delivered a unique restaurant space aligned with the client cultural theme.',
    ],
  },
  {
    image: '/assets/project-joto-ramen.png',
    category: 'Japanese Dining Concepts',
    scope: 'Thematic restaurant interior and noodle bar layout',
    points: [
      'Constructed interiors inspired by traditional Japanese minimalism.',
      'Developed a dining setup tailored for authentic ramen experiences.',
      'Integrated natural materials and subtle lighting to reflect Japanese culture.',
      'Optimized floor plan to balance seating capacity and comfort.',
      'Delivered a modern yet culturally rooted dining space with precision.',
    ],
  },
  {
    image: '/assets/hero-showroom.png',
    category: 'Civil & Metal Engineering',
    scope: 'Commercial kitchen construction and metal fabrication',
    points: [
      'Specialized in commercial construction and metal fabrication for hospitality spaces.',
      'Executed fit-outs and structural work for cafes, restaurants, bars, and hotels.',
      'Delivered high-quality finishes and durable solutions for dynamic interiors.',
      'Provided complete maintenance solutions ensuring operational efficiency.',
      'Completed projects on schedule while maintaining superior construction standards.',
    ],
  },
];

const industries = [
  'Construction',
  'Hotels',
  'Restaurants',
  'Cafes & Cafeterias',
  'Bars & Nightlife',
  'Commercial Kitchens',
  'Institutional Facilities',
  'Retail Food Service',
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [transitionType, setTransitionType] = useState('bars');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTransitionType(getRandomTransition());
  //     setActiveSlide((current) => (current + 1) % heroSlides.length);
  //   }, 5800);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const slideNext = () => {
    setTransitionType(getRandomTransition());
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const slidePrev = () => {
    setTransitionType(getRandomTransition());
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[activeSlide];

  const filteredProjects = useMemo(() => {
    return projects;
  }, []);

  const projectNext = () => {
    if (!filteredProjects.length) return;
  };

  return (
    <div className="site-shell">
      <div className="ambient-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="SwiftKey Development Limited">
          <img
            src="/assets/image copy 2.png"
            alt="SwiftKey Development Limited"
            className="brand-logo"
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </a>
          <a href="#about">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            About
          </a>
          <a href="#services">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Services
          </a>
          <a href="#projects">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Projects
          </a>
          <a href="#contact">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contact Us
          </a>

          <a className="header-cta" href="#contact">
            Request a Quote
          </a>
        </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>

            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>

            <a
              className="mobile-header-cta"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a Quote
            </a>

            <a
              href="https://swiftkey.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Visit Main Website
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home" aria-label="Hero Showcase">
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-media" aria-hidden="true">
            {heroSlides.map((item, index) => (
              <div
                className={`hero-slide ${transitionType} ${index === activeSlide ? 'is-active' : ''
                  }`}
                key={`${item.image}-${index}`}
              >
                <div className="hero-slide-slices">
                  <div className="image-slice slice-1">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="image-slice slice-2">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="image-slice slice-3">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-copy-wrapper">
            <div key={activeSlide} className="hero-copy">
              <p className="eyebrow">{slide.label}</p>

              <h1>
                <span className="h1-line line-1">{slide.titleLine1}</span>
                <span className="h1-line line-2">{slide.titleLine2}</span>
              </h1>

              <p className="hero-lead">{slide.subtitle}</p>
              <p className="hero-text">{slide.text}</p>

              <div className="hero-actions">
                <a className="primary-action" href="#contact">
                  Request Consultation
                </a>

                <a className="secondary-action" href="#projects">
                  View Projects ↓
                </a>
              </div>
            </div>
          </div>

          <button
            className="slider-arrow arrow-prev"
            onClick={slidePrev}
            aria-label="Previous Slide"
            type="button"
          >
            ‹
          </button>

          <button
            className="slider-arrow arrow-next"
            onClick={slideNext}
            aria-label="Next Slide"
            type="button"
          >
            ›
          </button>

          <div className="transition-chip">{transitionType} transition</div>

          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-indicator-line" />
            <span>Scroll</span>
          </div>
        </section>

        <section className="stats-band reveal" aria-label="Company highlights">
          <div className="stat-item">
            <strong>2025</strong>
            <span>Incorporated</span>
          </div>

          <div className="stat-item">
            <strong>20+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="stat-item">
            <strong>5</strong>
            <span>Core Service Lines</span>
          </div>

          <div className="stat-item">
            <strong>End-To-End</strong>
            <span>Concept to Completion</span>
          </div>
        </section>

        <section className="section about-section reveal" id="about">
          <div className="section-heading about-heading">
            <div>
              <p className="eyebrow">About Us</p>

              <h2>Built for businesses that demand quality, reliability, and precision.</h2>
            </div>

            <p className="about-top-text">
              SwiftKey Development Limited is a Kenyan-owned private limited company
              specializing in commercial construction, kitchen planning, fabrication,
              fit-outs, and maintenance solutions for hospitality and food-service
              industries.
            </p>
          </div>

          <div className="about-showcase">
            <div className="about-full-wrapper">
              <div className="about-full-card">
                <h3>Creative Planning Professional Execution.</h3>

                <p>
                  Incorporated on 11th February 2025, SwiftKey Development Limited was founded with a vision to redefine modern commercial spaces through innovative construction.
                </p>

                <p>
                  We specialize in commercial fabrication and stainless steel solutions, delivering premium restaurant interiors, fit-outs, and maintenance services for hotels, restaurants, cafés, bars, institutions, and modern food-service establishments
                </p>

                <p>
                  Our team focuses on combining functionality, durability and
                  modern aesthetics to create spaces that perform efficiently while
                  maintaining a premium appearance.
                </p>

                <p>
                  With a commitment to professionalism, innovation, and long-term client
                  relationships, we ensure every project is delivered with dependable
                  execution, exceptional craftsmanship, and ongoing support.
                </p>
              </div>

              <div className="about-cards-grid">
                <div className="about-mini-card">
                  <span>Design</span>
                  <strong>Smart Planning</strong>
                  <small>Efficient layouts designed for smooth day-to-day operations.</small>
                </div>

                <div className="about-mini-card">
                  <span>Build</span>
                  <strong>Premium Quality</strong>
                  <small>
                    Durable materials, modern finishes, and professional craftsmanship.
                  </small>
                </div>

                <div className="about-mini-card">
                  <span>Support</span>
                  <strong>Reliable Maintenance</strong>
                  <small>
                    Long-term technical support to keep operations running efficiently.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section specialization-section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Core Specialization</p>

            <h2>Commercial fabrication spaces designed from concept to completion.</h2>

            <p>
              Our solutions support efficiency, safety, hygiene, durability, and modern design
              for active hospitality and food service environments.
            </p>
          </div>

          <div className="approach-grid">
            <span>Client-centered planning</span>
            <span>Practical layouts</span>
            <span>Quality materials</span>
            <span>Skilled workmanship</span>
            <span> Safety Standards</span>
            {/* <span>Safety &amp; hygiene standards</span> */}
          </div>
        </section>

        <section className="section services-section reveal" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>

              <h2>Professional delivery across every stage of the project.</h2>
            </div>

            <p>
              We combine planning, construction, fabrication, installation, and maintenance
              into a single coordinated workflow for commercial clients.
            </p>
          </div>

          <div className="service-grid">
            {services.map(([title, text], index) => (
              <article className="service-card" key={title} style={{ '--stagger': index }}>
                <span className="service-num">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section reveal" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent Projects</p>

              <h2>Selected work across restaurants, cafes, and retail food spaces.</h2>
            </div>

            <p>
              These projects show SwiftKey&apos;s focus on operational planning, practical
              execution, durable finishes, and polished customer-facing environments.
            </p>
          </div>

          <div className="projects-slider">
            <div className="projects-track">
              {filteredProjects.map((project, index) => (
                <div className="project-slide-card" key={`${project.category}-${index}`}>
                  <div className="project-image">
                    <img src={project.image} alt={project.category} />
                  </div>

                  <div className="project-content">
                    <span className="project-category">{project.category}</span>

                    {/* <h3>{project.category}</h3> */}

                    <p>{project.scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="project-next-btn" type="button" onClick={projectNext}>
            Next Project
          </button>
        </section>

        <section className="section industries-section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Industries We Serve</p>

            <h2>Solutions for high-use commercial and hospitality environments.</h2>
          </div>

          <div className="industry-list">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </section>

        <div className="commitment-band reveal">
          <div>
            <p className="eyebrow">Our Commitment</p>

            <h2>Excellence, transparency, and long-term project partnerships.</h2>
          </div>

          <p>
            We are committed to reliable execution, continuous improvement, modern design,
            regulatory awareness, and strong client relationships across every assignment.
          </p>
        </div>

        <section className="section contact-section reveal" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">Contact Us</p>

            <h2>Have any query? Ask us directly.</h2>

            <p className="contact-subtitle">
              Share your project requirement, service question, quotation request, or any
              other query. Our team will connect with you and guide you with the right
              solution.
            </p>
          </div>

          <div className="contact-cards-grid">
            <a
              href="mailto:swiftkeydevelopment@gmail.com"
              className="contact-card"
              aria-label="Send email to SwiftKey Development"
            >
              <div className="contact-icon">✉</div>

              <span className="contact-label">Email</span>

              <span className="contact-value">tarun@swiftkey.co.ke</span>
            </a>

            <a
              href="tel:+254708022458"
              className="contact-card"
              aria-label="Call SwiftKey Development"
            >
              <div className="contact-icon">☎</div>

              <span className="contact-label">Phone</span>

              <span className="contact-value">
                +254 708 022458
                <br />
               
              </span>
            </a>

            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <span className="contact-label">Postal Address</span>

              <span className="contact-value">
                P.O. Box 76560-00508
                <br />
                Nairobi, Kenya
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand" href="#home" aria-label="SwiftKey Development Limited">
            <img
              src="/assets/image copy 2.png"
              alt="SwiftKey Development Limited"
              className="contact-logo"
            />
          </a>

          <p>
            Delivering quality solutions for construction and hospitality spaces across Kenya.
          </p>
        </div>

        <address>
          <strong>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Contact Information
          </strong>

          <div className="footer-contact-item">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 21 18.91V21z" />
            </svg>
            <span>+254 708 022458 </span>
          </div>

          <div className="footer-contact-item">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:swiftkeydevelopment@gmail.com">
              swiftkeydevelopment@gmail.com
            </a>
          </div>
        </address>

        <div className="footer-links">
          <strong>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            Navigate
          </strong>

          <nav>
            <a href="#home">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
            <a href="#about">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              About
            </a>
            <a href="#services">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Services
            </a>
            <a href="#projects">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Projects
            </a>

            <a
              href="https://swiftkey.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Main Website
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;