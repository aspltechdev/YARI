import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/contact-hero-1.jpg",
    },
    {
      image: "/images/contact-hero-2.jpg",
    },
    {
      image: "/images/contact-hero-3.jpg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend / CRM / email service here.
    alert("Thank you. Your enquiry has been submitted.");
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="contact-navbar">

        <div className="contact-nav-links">

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

          <a
            href="/contact"
            className="active"
          >
            Contact
          </a>

        </div>

      </nav>


      {/* =====================================================
          CONTACT HERO
          ===================================================== */}

      <section className="contact-hero">

        <div className="contact-slider">

          {heroSlides.map((slide, index) => (

            <div
              className={`contact-slide ${
                index === currentSlide ? "active" : ""
              }`}
              key={index}
            >

              <img
                src={slide.image}
                alt={`Contact engineering ${index + 1}`}
              />

            </div>

          ))}

        </div>


        {/* HERO OVERLAY */}

        <div className="contact-hero-overlay"></div>


        {/* HERO CONTENT */}

        <div className="contact-hero-content">

          <p className="contact-hero-eyebrow">
            CONTACT
          </p>

          <h1>
            LET'S DISCUSS YOUR
            <br />
            ENGINEERING REQUIREMENT
          </h1>

          <p className="contact-hero-description">
            Send Your Project Scope, Service Requirement Or Enquiry To The YARI Team.
          </p>

        </div>


        {/* HERO DOTS */}

        <div className="contact-slider-dots">

          <span
            className={currentSlide === 0 ? "active" : ""}
            onClick={() => setCurrentSlide(0)}
          ></span>

          <span
            className={currentSlide === 1 ? "active" : ""}
            onClick={() => setCurrentSlide(1)}
          ></span>

          <span
            className={currentSlide === 2 ? "active" : ""}
            onClick={() => setCurrentSlide(2)}
          ></span>

        </div>

      </section>


      {/* =====================================================
          GET IN TOUCH / ENQUIRY SECTION
          ===================================================== */}

      <section className="contact-enquiry-section">

        <div className="contact-enquiry-container">


          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div className="contact-information">

            <p className="contact-section-label">
              GET IN TOUCH
            </p>

            <h2>
              Have An Engineering Or
              <br />
              Manufacturing Requirement?
            </h2>

            <p className="contact-information-description">
              Share Your Requirement With The YARI Team So The Appropriate
              Engineering, Fabrication Or Project-Support Service Can Be Discussed.
            </p>


            {/* INFORMATION CARD */}

            <div className="contact-details-card">


              {/* REGISTERED OFFICE */}

              <div className="contact-detail">

                <h3>
                  Registered Office
                </h3>

                <p>
                  No. 4/86, 3rd Cross Street, A.G.S Colony,
                  Velachery, Chennai, Tamil Nadu
                  <br />
                  600042, India
                </p>

              </div>


              {/* EMAIL */}

              <div className="contact-detail">

                <h3>
                  Email
                </h3>

                <p>
                  Yari.Innovative@Gmail.Com
                </p>

              </div>


              {/* BUSINESS FOCUS */}

              <div className="contact-detail">

                <h3>
                  Business Focus
                </h3>

                <p>
                  Engineering Design, Manufacturing Services,
                  Fabricated-Metal Related Work And Industrial Project Support.
                </p>

              </div>


              {/* BUSINESS HOURS */}

              <div className="contact-detail">

                <h3>
                  Business Hours
                </h3>

                <p>
                  To Be Confirmed By YARI Before Publishing As Official Information.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT ENQUIRY FORM
              ================================================= */}

          <div className="contact-form-card">

            <h3>
              Send An Enquiry
            </h3>


            <form onSubmit={handleSubmit}>


              {/* NAME + COMPANY */}

              <div className="contact-form-row">

                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />

                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                />

              </div>


              {/* EMAIL + PHONE */}

              <div className="contact-form-row">

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                />

              </div>


              {/* SERVICE */}

              <div className="contact-form-full">

                <select
                  name="service"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Service
                  </option>

                  <option value="engineering-design">
                    Engineering Design
                  </option>

                  <option value="manufacturing">
                    Manufacturing
                  </option>

                  <option value="fabrication">
                    Fabrication
                  </option>

                  <option value="industrial-engineering">
                    Industrial Engineering
                  </option>

                  <option value="automotive">
                    Automotive Engineering
                  </option>

                  <option value="machinery">
                    Machinery & Equipment
                  </option>

                  <option value="aerospace">
                    Aerospace
                  </option>

                  <option value="medical">
                    Medical & Healthcare Equipment
                  </option>

                </select>

              </div>


              {/* PROJECT / REQUIREMENT */}

              <div className="contact-form-full">

                <textarea
                  name="project"
                  placeholder="Project / Requirement"
                  rows="4"
                ></textarea>

              </div>


              {/* MESSAGE */}

              <div className="contact-form-full">

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                ></textarea>

              </div>


              {/* FILE UPLOAD */}

              <div className="contact-file-upload">

                <input
                  type="file"
                  id="project-file"
                  name="file"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                Submit Enquiry
              </button>


              <p className="contact-form-note">
                Connect The Form To Your Email, CRM Or Backend Before Production Use.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION SECTION
          ===================================================== */}

      <section className="contact-location-section">

        <div className="contact-location-container">


          {/* LOCATION LABEL */}

          <p className="contact-location-label">
            LOCATION
          </p>


          {/* LOCATION TITLE */}

          <h2 className="contact-location-title">
            Chennai, Tamil Nadu
          </h2>


          {/* LOCATION DESCRIPTION */}

          <p className="contact-location-description">
            For The Final Website, Add The Verified Google Maps Embed
            For The Current YARI Office Location.
          </p>


          {/* GOOGLE MAP */}

          <div className="contact-map-wrapper">

            <iframe
              title="YARI Location - Chennai Tamil Nadu"
              src="https://www.google.com/maps?q=Velachery%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>

          </div>

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

    </div>
  );
};

export default Contact;