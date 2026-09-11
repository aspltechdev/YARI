import "./Industries.css";

/* =====================================================
   INDUSTRY HERO SLIDES
   ===================================================== */

const industrySlides = [
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
  },
];


/* =====================================================
   INDUSTRIES
   ===================================================== */

const industries = [
  {
    title: "Automotive & Engineering",

    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=90",

    description:
      "Precision Engineering And Manufacturing Solutions For Automotive Components, Assemblies, And Industrial Applications.",

    items: [
      "Chassis Components",
      "VIN Identification",
      "Engine Parts",
      "Part Serialisation",
    ],
  },

  {
    title: "Machinery & Equipment",

    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=90",

    description:
      "Precision Engineering And Manufacturing Solutions For Aerospace And Defence Components, Assemblies, And Specialized Applications.",

    items: [
      "Custom Equipment Parts",
      "Precision Fabrication",
      "Machine Assemblies",
      "Sheet-Metal Components",
    ],
  },

  {
    title: "Industrial Engineering",

    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=90",

    description:
      "Optimizing Industrial Processes, Production Systems, And Manufacturing Workflows For Improved Efficiency And Performance.",

    items: [
      "Process & Production Engineering",
      "Manufacturing Optimization",
      "Workflow & Process Improvement",
      "Industrial Automation Support",
    ],
  },

  {
    title: "Aerospace",

    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=90",

    description:
      "Precision Engineering And Manufacturing Solutions For Aerospace Components, Structures, And Specialized Applications.",

    items: [
      "Aerospace Components",
      "Precision Machining",
      "Sheet-Metal Fabrication",
      "Aerospace Assemblies",
    ],
  },

  {
    title: "Medical & Healthcare Equipment",

    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90",

    description:
      "Precision Manufacturing Solutions For Reliable Medical Components, Equipment Parts, And Specialized Healthcare Assemblies.",

    items: [
      "Medical Equipment Components",
      "Precision Fabrication",
      "Stainless Steel Components",
      "Custom Equipment Assemblies",
    ],
  },
];


/* =====================================================
   INDUSTRIES COMPONENT
   ===================================================== */

export default function Industries() {
  return (
    <main className="industries-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="industries-navbar">

        <div className="industries-nav-links">

          <a href="/">
            Home
          </a>

          <a href="/about">
            About Us
          </a>

          <a
            href="/industries"
            className="active"
          >
            Industries
          </a>

          <a href="/products">
            Products
          </a>

          <a href="/gallery">
            Gallery
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </nav>


      {/* =====================================================
          INDUSTRIES HERO
          ===================================================== */}

      <section className="industries-hero">

        {/* IMAGE SLIDER */}

        <div className="industries-slider">

          {industrySlides.map((slide, index) => (
            <div
              className="industries-slide"
              key={index}
            >

              <img
                src={slide.image}
                alt={`YARI industrial application ${index + 1}`}
              />

            </div>
          ))}

        </div>


        {/* DARK OVERLAY */}

        <div className="industries-overlay"></div>


        {/* HERO CONTENT */}

        <div className="industries-content">

          <p className="industries-eyebrow">
            INDUSTRIES
          </p>

          <h1>
            ENGINEERING SUPPORT
            <br />
            ACROSS INDUSTRIAL
            <br />
            APPLICATIONS.
          </h1>

          <p className="industries-description">
            Each Industry Section Explains The Kind Of Support YARI Can
            Present Around Its Documented Business Activities.
          </p>

        </div>


        {/* SLIDER DOTS */}

        <div className="industries-slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES INTRO
          ===================================================== */}

      <section className="industries-intro-section">

        <div className="industries-intro-container">

          <p className="industries-section-eyebrow">
            INDUSTRIAL SECTORS
          </p>

          <h2>
            Engineering Support For Industrial Requirements
          </h2>

          <p>
            YARI Design & Manufacturing Services provides engineering
            design and manufacturing-oriented support for industrial
            requirements. Our approach focuses on understanding the
            application, developing practical engineering solutions,
            and supporting manufacturing and project requirements.
          </p>

        </div>

      </section>


      {/* =====================================================
          INDUSTRY SERVICES
          ===================================================== */}

      <section className="industry-services-section">

        <div className="industry-services-container">

          {industries.map((industry, index) => (

            <article
              className="industry-service-card"
              key={index}
            >

              {/* =====================================================
                  IMAGE
                  ===================================================== */}

              <div className="industry-service-image">

                <img
                  src={industry.image}
                  alt={industry.title}
                />

              </div>


              {/* =====================================================
                  CONTENT
                  ===================================================== */}

              <div className="industry-service-content">

                <h3>
                  {industry.title}
                </h3>

                <p className="industry-service-description">
                  {industry.description}
                </p>


                {/* =====================================================
                    FEATURES
                    ===================================================== */}

                <div className="industry-service-features">

                  {industry.items.map((item, itemIndex) => (

                    <div
                      className="industry-feature"
                      key={itemIndex}
                    >

                      <span className="industry-feature-dot"></span>

                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                {/* =====================================================
                    CONTACT BUTTON
                    ===================================================== */}

                <a
                  href="/contact"
                  className="industry-service-button"
                >
                  Contact Us
                  <span>→</span>
                </a>

              </div>

            </article>

          ))}

        </div>

              {/* =====================================================
          CUSTOM APPLICATIONS
          ===================================================== */}

      <section className="industries-custom-section">

        <div className="industries-custom-overlay"></div>

        <div className="industries-custom-content">

          <p className="industries-custom-eyebrow">
            CUSTOM APPLICATIONS
          </p>

          <h2>
            Have A Requirement That Does Not Fit One Category?
          </h2>

          <p className="industries-custom-description">
            Share The Application, Drawing, Component Details Or Project
            Scope And Discuss The Suitable Engineering Service.
          </p>

          <a
            href="/contact"
            className="industries-custom-button"
          >
            Discuss Your Requirement
          </a>

        </div>

      </section>

      
      </section>

       {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="home-footer">

        <div className="footer-main">

          {/* COMPANY */}
          <div className="footer-column footer-company">

            <h3>
              YARI DESIGN &amp; MANUFACTURING SERVICES
            </h3>

            <p>
              Engineering design and manufacturing-
              <br />
              oriented services for industrial and
              <br />
              engineering requirements.
            </p>

            <div className="footer-socials">

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Twitter">
                ♥
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column footer-links">

            <h3>
              QUICK LINKS
            </h3>

            <a href="/">
              Home
            </a>

            <a href="/about">
              About Us
            </a>

            <a href="/industries">
              Industries
            </a>

            <a href="/products">
              Products
            </a>

            <a href="/gallery">
              Gallery
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h3>
              EMAIL
            </h3>

            <a
              href="mailto:yari.innovative@gmail.com"
              className="footer-email"
            >
              yari.innovative@gmail.com
            </a>

            <h3 className="footer-contact-title">
              CONTACT US
            </h3>

            <p>
              No. 4/86, 3rd Cross Street, A.G.S. Colony,
              <br />
              Velachery, Chennai, Tamil Nadu - 600042.
            </p>

          </div>


          {/* BACK TO TOP */}
          <a
            href="#"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <span>⌃</span>
            <span>⌃</span>
          </a>

        </div>


        {/* COPYRIGHT */}
        <div className="footer-bottom">

          <p>
            © 2026 YARI Design &amp; Manufacturing Services. All rights reserved.
          </p>

        </div>

      </footer>


      

    </main>
  );
}