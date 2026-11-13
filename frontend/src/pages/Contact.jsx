import React, { useState } from "react";
import "./Contact.css";
import logo from "../assets/logo.png";
import Footer from "../components/Footer.jsx";
import whyyariImage from "../assets/whyyari.png";
import fabricationImage from "../assets/fabricationnmetal.png";
import leakageImage from "../assets/leaktesting.png";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    project: "",
    message: "",
  });


  const heroSlides = [
    {
      image: whyyariImage,
    },
    {
      image: fabricationImage,
    },
    {
      image: leakageImage,
    },
  ];

  /* =========================================================
     HANDLE INPUT CHANGE
     ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     OPEN EMAIL APPLICATION WITH ENQUIRY DETAILS
     ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `${formData.service}${
      formData.project ? ` - ${formData.project}` : ""
    }`;

    const body = `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Project / Requirement: ${formData.project}

Message:
${formData.message}`;

    const mailtoLink =
      `mailto:Yari.Innovative@Gmail.Com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      {/* <nav className="contact-navbar">

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

      </nav> */}

      <Navbar/>


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
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>


              {/* EMAIL + PHONE */}

              <div className="contact-form-row">

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              {/* SERVICE */}

              <div className="contact-form-full">

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="" disabled>
                    Service
                  </option>

                  <option value="Engineering Design">
                    Engineering Design
                  </option>

                  <option value="Manufacturing">
                    Manufacturing
                  </option>

                  <option value="Fabrication">
                    Fabrication
                  </option>

                  <option value="Industrial Engineering">
                    Industrial Engineering
                  </option>

                  <option value="Automotive Engineering">
                    Automotive Engineering
                  </option>

                  <option value="Machinery & Equipment">
                    Machinery & Equipment
                  </option>

                  <option value="Aerospace">
                    Aerospace
                  </option>

                  <option value="Medical & Healthcare Equipment">
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
                  value={formData.project}
                  onChange={handleChange}
                ></textarea>

              </div>


              {/* MESSAGE */}

              <div className="contact-form-full">

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Enquiry
              </button>

              <p className="contact-form-note">
                Your email application will open with your enquiry details.
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

          <p className="contact-location-label">
            LOCATION
          </p>

          <h2 className="contact-location-title">
            Chennai, Tamil Nadu
          </h2>

          <p className="contact-location-description">
            For The Final Website, Add The Verified Google Maps Embed
            For The Current YARI Office Location.
          </p>

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
      <Footer />

    </div>
  );
};

export default Contact;
