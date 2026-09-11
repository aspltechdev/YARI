import "./About.css";

const heroSlides = [
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
   VALUE ICONS
   ===================================================== */

function QualityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 7.2L13.45 10.1L16.65 10.55L14.3 12.8L14.85 16L12 14.5L9.15 16L9.7 12.8L7.35 10.55L10.55 10.1L12 7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 2.5V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12 19V21.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M2.5 12H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M19 12H21.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M5.3 5.3L7.1 7.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M16.9 16.9L18.7 18.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M18.7 5.3L16.9 7.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M7.1 16.9L5.3 18.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CustomerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.2 12.2L10.1 14.1C10.8 14.8 11.9 14.8 12.6 14.1L16.9 9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M6.7 10.7L4.9 12.5C4.2 13.2 4.2 14.3 4.9 15L8.2 18.3C8.9 19 10 19 10.7 18.3L12.5 16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17.3 13.3L19.1 11.5C19.8 10.8 19.8 9.7 19.1 9L15.8 5.7C15.1 5 14 5 13.3 5.7L11.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 11.2L5.5 9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M20.5 12.8L18.5 14.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 14.5C7.5 13.6 7 12.3 7 11C7 8.2 9.2 6 12 6C14.8 6 17 8.2 17 11C17 12.3 16.5 13.6 15.5 14.5C14.7 15.2 14.2 16 14.1 17H9.9C9.8 16 9.3 15.2 8.5 14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M10 20H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M10.5 17.5H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M12 2V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M4.9 4.9L6.3 6.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M19.1 4.9L17.7 6.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =====================================================
   ABOUT PAGE
   ===================================================== */

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="about-navbar">

        <div className="about-nav-links">

          <a href="/">
            Home
          </a>

          <a href="/about" className="active">
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

      </nav>


      {/* =====================================================
          ABOUT HERO
          ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-slider">

          {heroSlides.map((slide, index) => (
            <div
              className="about-hero-slide"
              key={index}
            >
              <img
                src={slide.image}
                alt={`YARI engineering slide ${index + 1}`}
              />
            </div>
          ))}

        </div>


        <div className="about-hero-overlay"></div>


        <div className="about-hero-content">

          <p className="about-hero-eyebrow">
            WHY YARI
          </p>

          <h1>
            ENGINEERING DESIGN
            <br />
            WITH A MANUFACTURING
            <br />
            MINDSET.
          </h1>

          <p className="about-hero-description">
            Detailed Company Profile, Background, Approach And Service
            Capabilities.
          </p>

        </div>


        <div className="about-slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
          ===================================================== */}

      <section className="who-we-are-section">

        <div className="who-we-are-container">

          <div className="who-we-are-image">

            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=90"
              alt="YARI engineering and manufacturing"
            />

          </div>


          <div className="who-we-are-content">

            <p className="about-section-eyebrow">
              WHO WE ARE
            </p>

            <h2>
              Chennai-Based Engineering And
              <br />
              Manufacturing Services
            </h2>

            <p className="who-intro">
              YARI Design & Manufacturing Services (OPC) Private Limited
              Is Recorded As An Active Company Incorporated On 4 May 2018
              And Registered With RoC Chennai.
            </p>

            <p>
              Public Business Records Associate The Company With
              Engineering Design And Consultancy. GST Activity
              Classifications Also Identify Engineering Services For
              Industrial And Manufacturing Projects, Maintenance/Repair
              Of Fabricated Metal Products, Job Work Related To
              Fabricated Metal Products And Metal Treatment, And
              Project-Management Services.
            </p>

            <p>
              The Website Therefore Presents YARI As An
              Engineering-Focused Business Serving Industrial And
              Manufacturing Requirements Without Adding Unsupported
              Claims.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
          ===================================================== */}

      <section className="about-values-section">

        <div className="about-values-container">

          <p className="about-section-eyebrow">
            OUR VALUES
          </p>

          <h2 className="about-section-title">
            Our Guiding Principles
          </h2>

          <p className="about-section-description">
            Focused On Quality, Driven By Innovation, Built On Trust.
          </p>


          <div className="values-grid">

            {/* VALUE 1 */}

            <div className="value-card">

              <div className="value-icon">
                <QualityIcon />
              </div>

              <div className="value-content">

                <h3>
                  Quality First
                </h3>

                <p>
                  Precision, Reliability, And Consistent Quality In Every
                  Solution.
                </p>

              </div>

            </div>


            {/* VALUE 2 */}

            <div className="value-card">

              <div className="value-icon">
                <EngineeringIcon />
              </div>

              <div className="value-content">

                <h3>
                  Engineering Excellence
                </h3>

                <p>
                  Expertise-Driven Design And Manufacturing Solutions.
                </p>

              </div>

            </div>


            {/* VALUE 3 */}

            <div className="value-card">

              <div className="value-icon">
                <CustomerIcon />
              </div>

              <div className="value-content">

                <h3>
                  Customer Focus
                </h3>

                <p>
                  Understanding Requirements And Delivering The Right
                  Solutions.
                </p>

              </div>

            </div>


            {/* VALUE 4 */}

            <div className="value-card">

              <div className="value-icon">
                <InnovationIcon />
              </div>

              <div className="value-content">

                <h3>
                  Innovation
                </h3>

                <p>
                  Continuously Improving Technology, Processes, And
                  Performance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR ENGINEERING APPROACH
          ===================================================== */}

      <section className="engineering-approach-section">

        {/* DARK BACKGROUND */}

        <div className="engineering-dark-bg"></div>


        <div className="engineering-approach-container">

          {/* HEADING */}

          <div className="engineering-approach-heading">

            <p className="about-section-eyebrow">
              OUR ENGINEERING APPROACH
            </p>

            <h2 className="engineering-approach-title">
              Understand. Design. Support. Deliver.
            </h2>

            <p className="engineering-approach-description">
              A Clear Process Helps Customers Understand How An Enquiry Can
              Move From Requirement To Practical Engineering Support.
            </p>

          </div>


          {/* APPROACH CARDS */}

          <div className="approach-grid">

            {/* STEP 01 */}

            <div className="approach-card">

              <span className="approach-number">
                01
              </span>

              <h3>
                Understand
              </h3>

              <p>
                Review The Requirement, Application, Drawings And
                Expected Outcome.
              </p>

            </div>


            {/* STEP 02 */}

            <div className="approach-card">

              <span className="approach-number">
                02
              </span>

              <h3>
                Engineer
              </h3>

              <p>
                Develop Or Support The Appropriate Engineering Design
                And Documentation.
              </p>

            </div>


            {/* STEP 03 */}

            <div className="approach-card">

              <span className="approach-number">
                03
              </span>

              <h3>
                Manufacture
              </h3>

              <p>
                Coordinate Manufacturing/Fabrication-Oriented
                Requirements Where Applicable.
              </p>

            </div>


            {/* STEP 04 */}

            <div className="approach-card">

              <span className="approach-number">
                04
              </span>

              <h3>
                Support
              </h3>

              <p>
                Provide Project, Maintenance Or Engineering Support
                Based On The Requirement.
              </p>

            </div>

          </div>

        </div>

      </section>

{/* =====================================================
    START A PROJECT / CTA
    ===================================================== */}

<section className="start-project-section">

  <div className="start-project-overlay"></div>

  <div className="start-project-content">

    <p className="start-project-eyebrow">
      START A PROJECT
    </p>

    <h2>
      Let’s Build Your Next Industrial Solution
    </h2>

    <p className="start-project-description">
      Partner With Quality Engineering Solutions For Reliable Industrial
      Marking Technologies That Deliver Precision, Durability,
      And Long-Term Performance.
    </p>

    <a
      href="/contact"
      className="start-project-button"
    >
      Request A Quote
    </a>

  </div>

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