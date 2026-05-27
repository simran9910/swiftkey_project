import { useEffect, useMemo, useState } from 'react';
import './App.css';

const transitionTypes = ['bars', 'vortex', 'blinds', 'checkerboard', 'box'];

const getRandomTransition = () => transitionTypes[Math.floor(Math.random() * transitionTypes.length)];

const heroSlides = [

  {
    image: '/assets/hero-showroom.png',
    label: 'Welcome',
    titleLine1: 'Welcome',
    titleLine2: 'to SwiftKey',
    subtitle: 'Your premium construction partner',
    text: 'We deliver high-quality construction and hospitality solutions across Kenya.',
  },


  {
    image: '/assets/image66.jpeg',
    label: 'Luxury Construction',
    titleLine1: 'Building',
    titleLine2: 'Modern Spaces',
    subtitle: 'Premium hospitality and commercial interiors',
    text: 'We create elegant restaurants, cafés, and hospitality spaces with modern construction solutions.',
  },

  {
    image: '/assets/image2.jpeg',
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
  ['Design Services', 'Commercial kitchen design, space planning, functional layouts, and custom designs tailored to client operations and standards.'],
  ['Civil & Building Construction', 'General civil works, structural and finishing works, renovations, remodeling, and commercial construction delivery.'],
  ['Metal Fabrication', 'Stainless steel shelving, counters, hoods, cabinets, workstations, and custom metal works for hygiene compliance.'],
  ['Fit-Outs', 'Complete kitchen fit-outs, fabricated unit installation, fixtures, and hospitality or commercial interior fit-outs.'],
  ['Maintenance Services', 'Preventive and corrective maintenance, repairs, upgrades, and ongoing support for reliable long-term performance.'],
];

const projects = [

  {
    image: '/assets/image66.jpeg',
    name: 'Urban Spice Lounge',
    category: 'Luxury Restaurant Interiors',
    scope: 'Restaurant fit-out and dining environment',
    points: [
      'Designed and developed a modern restaurant space focused on delivering a premium dining experience.',
      'Planned an efficient layout that supports smooth customer flow and optimized service operations.',
      'Used high-quality materials and refined finishes to create a stylish and comfortable environment.',
      'Implemented ambient and feature lighting to enhance the dining atmosphere and highlight key areas.',
    ],
  },

  {
    image: '/assets/project-mam-mam.png',
    name: 'The Golden Fork Café',
    category: 'Premium Café Design',
    scope: 'Premium café design and customer experience',
    points: [
      'Created a contemporary café interior with elegant seating and warm ambience.',
      'Designed efficient service and kitchen layouts for smooth workflow.',
      'Integrated decorative lighting and modern textures for a premium visual appeal.',
      'Focused on customer comfort with functional and aesthetic furniture placement.',
    ],
  },

  {
    image: '/assets/image2.jpeg',
    name: 'Elite Dining Hub',
    category: 'Commercial Restaurant Design',
    scope: 'Restaurant branding and interior execution',
    points: [
      'Developed a visually appealing dining environment with modern finishes.',
      'Optimized customer movement and staff operational efficiency.',
      'Used custom lighting concepts to enhance mood and branding.',
      'Delivered a durable and stylish commercial dining setup.',
    ],
  },

  {
    image: '/assets/image44.jpeg',
    name: 'Skyline Bistro Interiors',
    category: 'Luxury Restaurant Interiors',
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
    name: 'Cake City TRM',
    category: 'Bakery & Dessert Spaces',
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
    image: '/assets/project-art-caffe.png',
    name: 'Art Caffe Lavington',
    category: 'Contemporary Café Interiors',
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
    image: '/assets/project-cake-city-nord.png',
    name: 'Cake City Nord Mall',
    category: 'Retail Bakery Architecture',
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
    name: 'Artcaffe Redhill',
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
    name: 'Cake City Luqman Station',
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
    name: 'Mammam Vietnamese Dining',
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
    name: 'Joto Ramen House',
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
    name: 'Dijo Westland',
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

const categories = ['All', 'Modern Interiors & Fit-outs', 'Civil & Metal Engineering'];

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
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [transitionType, setTransitionType] = useState('bars');
  const [activeProject, setActiveProject] = useState(0);

  // Topbar scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-slide interval with random transition
  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionType(getRandomTransition());
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5800);
    return () => clearInterval(timer);
  }, []);

  // IntersectionObserver for scroll-reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
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
    setActiveSlide((c) => (c + 1) % heroSlides.length);
  };

  const slidePrev = () => {
    setTransitionType(getRandomTransition());
    setActiveSlide((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleProjectExpand = (projectName) => {
    setExpandedProjects((current) => ({
      ...current,
      [projectName]: !current[projectName],
    }));
  };

  const slide = heroSlides[activeSlide];

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setActiveProject(0);
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredProjects.length) return undefined;
    const timer = setInterval(() => {
      setActiveProject((current) => (current + 1) % filteredProjects.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [filteredProjects.length]);

  const activeProjectData = filteredProjects[activeProject];

  const projectNext = () => {
    if (!filteredProjects.length) return;
    setActiveProject((current) => (current + 1) % filteredProjects.length);
  };

  const projectPrev = () => {
    if (!filteredProjects.length) return;
    setActiveProject((current) => (current - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    alert('Thank you! Your query has been submitted.');
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      {/* Decorative Ambient Background Blobs */}
      <div className="ambient-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ======= FIXED FLOATING HEADER ======= */}
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="SwiftKey Development Limited">
          <img
            src="/assets/image copy 2.png"
            alt="SwiftKey Development Limited"
            className="brand-logo"
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Us</a>
          <a className="header-cta" href="#contact">Request a Quote</a>
        </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a className="mobile-header-cta" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Request a Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ======= FULL-SCREEN CINEMATIC HERO SLIDER ======= */}
        <section className="hero-section" id="home" aria-label="Hero Showcase">
          {/* Gradient overlay */}
          <div className="hero-overlay" aria-hidden="true" />

          {/* Full-screen slide stack */}
          <div className="hero-media" aria-hidden="true">
            {heroSlides.map((item, index) => (
              <div
                className={`hero-slide ${transitionType} ${index === activeSlide ? 'is-active' : ''}`}
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

          {/* Text overlay */}
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
                <a className="primary-action" href="#contact" id="hero-cta-primary">Request Consultation</a>
                <a className="secondary-action" href="#projects" id="hero-cta-secondary">View Projects ↓</a>
              </div>
            </div>
          </div>

          {/* Arrow controls */}
          <button className="slider-arrow arrow-prev" onClick={slidePrev} aria-label="Previous Slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="slider-arrow arrow-next" onClick={slideNext} aria-label="Next Slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <div className="transition-chip">{transitionType} transition</div>

          {/* Bottom controls bar */}
          {/* <div className="slider-controls-bottom">
            <div className="slider-dots">
              {heroSlides.map((item, index) => (
                <button
                  aria-label={`Go to slide ${index + 1}: ${item.label}`}
                  className={index === activeSlide ? 'is-active' : ''}
                  key={item.label}
                  onClick={() => { setTransitionType(getRandomTransition()); setActiveSlide(index); }}
                  type="button"
                />
              ))}
            </div>
            <div className="slider-progress-track">
              <div key={activeSlide} className="slider-progress-bar" />
            </div>
            <span className="slide-count-display">
              <strong>{String(activeSlide + 1).padStart(2, '0')}</strong>
              <em> / {String(heroSlides.length).padStart(2, '0')}</em>
            </span>
          </div> */}

          {/* Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-indicator-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ======= STATS BAND ======= */}
        <section className="stats-band reveal" aria-label="Company highlights">
          <div className="stat-item">
            <strong>2025</strong>
            <span>Incorporated</span>
          </div>
          <div className="stat-item">
            <strong>12+</strong>
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


        {/* ======= ABOUT ======= */}
        <section className="section about-section reveal" id="about">

          {/* SECTION HEADING */}
          <div className="section-heading about-heading">
            <div>
              <p className="eyebrow">About Us</p>

              <h2>
                Built for businesses that demand quality, reliability, and precision.
              </h2>
            </div>

            <p className="about-top-text">
              SwiftKey Development Limited is a Kenyan-owned private limited company
              specializing in commercial construction, kitchen planning, fabrication,
              fit-outs, and maintenance solutions for hospitality and food-service
              industries.
            </p>
          </div>

          {/* ABOUT CONTENT */}
          <div className="about-showcase">

            <div className="about-full-wrapper">

              {/* MAIN FULL WIDTH CARD */}
              <div className="about-full-card">

                {/* <span className="about-badge"></span> */}

                <h3>Creative Planning Professional Execution.</h3>

                <p>
                  Incorporated on 11th February 2025, SwiftKey Development Limited
                  was established with a vision to deliver premium construction and
                  hospitality solutions tailored for modern commercial environments.
                </p>

                <p>
                  We specialize in commercial kitchen construction, stainless steel
                  fabrication, restaurant interiors, fit-outs, and maintenance
                  services for hotels, restaurants, cafés, bars, institutions,
                  and food-service establishments.
                </p>

                <p>
                  Our team focuses on combining functionality, durability,
                  hygiene, and modern aesthetics to create spaces that perform
                  efficiently while maintaining a premium appearance.
                </p>

                <p>
                  With a commitment to professionalism, innovation, and long-term
                  client relationships, we ensure every project is delivered with
                  dependable execution, exceptional craftsmanship, and ongoing support.
                </p>

              </div>

              {/* FEATURE CARDS */}
              <div className="about-cards-grid">

                <div className="about-mini-card">
                  <span>Design</span>

                  <strong>Smart Planning</strong>

                  <small>
                    Efficient layouts designed for smooth day-to-day operations.
                  </small>
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

        {/* ======= SPECIALIZATION ======= */}
        <section className="section specialization-section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Core Specialization</p>
            <h2>Commercial kitchen spaces designed from concept to completion.</h2>
            <p>
              Our solutions support efficiency, safety, hygiene, durability, and modern design for
              active hospitality and food service environments.
            </p>
          </div>
          <div className="approach-grid">
            <span>Client-centered planning</span>
            <span>Practical layouts</span>
            <span>Quality materials</span>
            <span>Skilled workmanship</span>
            <span>Safety &amp; hygiene standards</span>
          </div>
        </section>

        {/* ======= SERVICES ======= */}
        <section className="section services-section reveal" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Professional delivery across every stage of the project.</h2>
            </div>
            <p>
              We combine planning, construction, fabrication, installation, and maintenance into a
              single coordinated workflow for commercial clients.
            </p>
          </div>

          <div className="service-grid">
            {services.map(([title, text], index) => (
              <article className="service-card" key={title} style={{ '--stagger': index }}>
                <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ======= PROJECTS ======= */}
        <section className="section projects-section reveal" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Recent Projects</p>
              <h2>Selected work across restaurants, cafes, and retail food spaces.</h2>
            </div>
            <p>
              These projects show SwiftKey's focus on operational planning, practical execution,
              durable finishes, and polished customer-facing environments.
            </p>
          </div>
          <div className="projects-slider">
            <div className="projects-track">

              {[...projects, ...projects].map((project, index) => (
                <div className="project-slide-card" key={index}>

                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* {activeProjectData && (
            <div className="project-slider-shell">
              <button className="project-nav project-nav-left" onClick={projectPrev} aria-label="Previous project">
                ‹
              </button>

              <article className="featured-project-card" key={activeProjectData.name}>
                <div className="featured-project-image">
                  <img alt={activeProjectData.name} src={activeProjectData.image} loading="lazy" />
                  <span className="project-category-tag">{activeProjectData.category}</span>
                  <div className="project-shine" />
                </div>

                <div className="featured-project-content">
                  <span className="project-scope">{activeProjectData.scope}</span>
                  <h3>{activeProjectData.name}</h3>
                  <ul className="project-points-list">
                    {activeProjectData.points
                      .slice(0, expandedProjects[activeProjectData.name] ? activeProjectData.points.length : 3)
                      .map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                  </ul>

                  {activeProjectData.points.length > 3 && (
                    <button
                      className="project-toggle-details-btn"
                      onClick={() => toggleProjectExpand(activeProjectData.name)}
                      aria-label={
                        expandedProjects[activeProjectData.name]
                          ? `Show less about ${activeProjectData.name}`
                          : `Show all details about ${activeProjectData.name}`
                      }
                    >
                      {expandedProjects[activeProjectData.name] ? 'Show Less ↑' : 'Show All Details ↓'}
                    </button>
                  )}
                </div>
              </article>

              <button className="project-nav project-nav-right" onClick={projectNext} aria-label="Next project">
                ›
              </button>
            </div>
          )} */}
        </section>

        {/* ======= INDUSTRIES ======= */}
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

        {/* ======= COMMITMENT BAND ======= */}
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

        {/* ======= CONTACT QUERY FORM ======= */}
        <section className="section contact-section reveal" id="contact">
          <div className="contact-query-box">
            <div className="contact-copy">
              <p className="eyebrow">Contact Us</p>
              <h2>Have any query? Ask us directly.</h2>
              <p>
                Share your project requirement, service question, quotation request, or any other query.
                Our team will connect with you and guide you with the right solution.
              </p>

              <div className="contact-info-cards">

                {/* EMAIL */}
                <a
                  href="mailto:swiftkeydevelopment@gmail.com"
                  className="info-card"
                >
                  <div className="info-icon">
                    ICON
                  </div>

                  <div className="info-text">
                    <span className="info-label">Email Address</span>
                    <span className="info-value">
                      swiftkeydevelopment@gmail.com
                    </span>
                  </div>
                </a>

                {/* ADDRESS */}
                <div className="info-card">

                  <div className="info-icon">
                    LOCATION ICON
                  </div>

                  <div className="info-text">
                    <span className="info-label">Postal Address</span>

                    <span className="info-value">
                      P.O. Box 76560-00508, Nairobi, Kenya
                    </span>
                  </div>

                </div>

                {/* TAX */}
                <div className="info-card">

                  <div className="info-icon">
                    TAX ICON
                  </div>

                  <div className="info-text">
                    <span className="info-label">
                      Tax Registration
                    </span>

                    <span className="info-value">
                      KRA PIN: P052403621Q
                    </span>
                  </div>


                </div>
              </div>

            </div>

            <form className="query-form" onSubmit={handleQuerySubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Write your query..." rows="5" required />
              <div className="form-actions">
                <button type="submit">Send Query</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div>
          <a className="brand" href="#home" aria-label="SwiftKey Development Limited">
            <img
              src="/assets/image copy 2.png"
              alt="SwiftKey Development Limited"
              className="contact-logo"
            />
          </a>
          <p>Building quality solutions for construction and hospitality spaces across Kenya.</p>
        </div>

        <address>
          <strong>Contact Information</strong>
          <span>+254 708 022458 / +254 720 554611</span>
          <a href="mailto:tarun@swiftkey.co.ke">swiftkeydevelopment@gmail.com</a>
          <span>KRA PIN: P052403621Q</span>
        </address>

        <div className="footer-links">
          <strong>Navigate</strong>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
