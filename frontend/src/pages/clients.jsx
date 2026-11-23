
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import "./clients.css";

/* =========================================
   HERO IMAGES
========================================= */

import heroImage1 from "../assets/fabricationnmetal.png";
import heroImage2 from "../assets/wahsingmachine.png";
import heroImage3 from "../assets/hydraulictrimming.png";

/* =========================================
   CLIENT LOGOS
========================================= */

import yamahaLogo from "../assets/yamaha.png";
import magnaLogo from "../assets/magna.png";
import myunghwaLogo from "../assets/myunghwa.png";
import youngshinLogo from "../assets/youngshin.png";
import ofleLogo from "../assets/ofle.png";
import caveoLogo from "../assets/caveo.png";
import leetechLogo from "../assets/leetech.png";

/* =========================================
   MACHINE IMAGES
========================================= */

import washingImage from "../assets/wahsingmachine.png";
import visionImage from "../assets/visionpokyok.png";
import laserImage from "../assets/lasermarking.png";
import leakImage from "../assets/leaktesting.png";
import hydraulicImage from "../assets/hydraulictrimming.png";
import dotpeenImage from "../assets/dotpeen.png";
import fumeImage from "../assets/fumeextraction.png";
import deburringImage from "../assets/electromechanicaldeburring.png";

/* =========================================
   CLIENT DATA
========================================= */

const Clients = [
  { name: "Yamaha", image: yamahaLogo },
  { name: "Magna", image: magnaLogo },
  { name: "Myunghwa", image: myunghwaLogo },
  { name: "Young Shin Automotive", image: youngshinLogo },
  { name: "Ofle", image: ofleLogo },
  { name: "Caveo", image: caveoLogo },
  { name: "Lee-Tech", image: leetechLogo },
];

/* =========================================
   ENGINEERING CAPABILITIES
========================================= */

const capabilities = [
  {
    number: "01",
    title: "Quality & Inspection",
    description:
      "Vision-based inspection, sensor systems, poka-yoke error-proofing and precision gauge sensors for reliable quality control.",
    items: [
      
    ],
  },
  {
    number: "02",
    title: "Process & Material Movement",
    description:
      "Engineering solutions that improve production processes, automate operations and support efficient material movement.",
    items: [
    
    ],
  },
  {
    number: "03",
    title: "Traceability & Smart Factory",
    description:
      "Connected manufacturing solutions supporting component identification, equipment monitoring and production traceability.",
    items: [
     
    ],
  },
];

/* =========================================
   ENGINEERING PROJECTS
========================================= */

const projects = [
  {
    number: "01",
    title: "Industrial Washing Machine",
    image: washingImage,
  },
  {
    number: "02",
    title: "Vision Poka-Yoke System",
    image: visionImage,
  },
  {
    number: "03",
    title: "Laser Marking Machine",
    image: laserImage,
  },
  {
    number: "04",
    title: "Leak Testing Rig",
    image: leakImage,
  },
  {
    number: "05",
    title: "Hydraulic Trimming SPM",
    image: hydraulicImage,
  },
  {
    number: "06",
    title: "Dot-Peen Marking System",
    image: dotpeenImage,
  },
  {
    number: "07",
    title: "Hole Punching SPM",
    image: null,
  },
  {
    number: "08",
    title: "Fume Extraction Unit",
    image: fumeImage,
  },
  {
    number: "09",
    title: "Electrochemical Deburring",
    image: deburringImage,
  },
];

/* =========================================
   TECHNOLOGIES
========================================= */

const technologies = [
  {
    number: "01",
    title: "Sensors",
    description:
      "Photoelectric, inductive, pressure and proximity units for industrial detection.",
    image: visionImage,
  },
  {
    number: "02",
    title: "PLC / HMI",
    description:
      "Programmable logic controllers and touch interfaces for machine control.",
    image: heroImage1,
  },
  {
    number: "03",
    title: "Vision Systems",
    description:
      "Automated defect, dimensional and poka-yoke checks.",
    image: visionImage,
  },
  {
    number: "04",
    title: "Hydraulics, Pneumatics & Servos",
    description:
      "High-force fluid power, precision air and electrical actuators.",
    image: hydraulicImage,
  },
  {
    number: "05",
    title: "Part Marking",
    description:
      "Laser etching and dot-peen 2D code engraving.",
    image: laserImage,
  },
  {
    number: "06",
    title: "Industrial IoT",
    description:
      "Real-time edge telemetry and cloud analytics.",
    image: washingImage,
  },
];

/* =========================================
   Clients PAGE
========================================= */

function Clients() {
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  /* AUTOMATIC HERO SLIDER */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((previous) =>
        (previous + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main className="Clients-page">

        {/* =====================================
            HERO SLIDER
        ===================================== */}

        <section className="Clients-hero">

          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`Clients-hero-slide ${
                activeSlide === index ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}

          <div className="Clients-hero-overlay">

            <div className="Clients-hero-content">

              <span className="Clients-hero-label">
                OUR NETWORK
              </span>

              <h1>
                BUILDING STRONG
                <br />
                ENGINEERING
                <br />
                COLLABORATIONS.
              </h1>

              <p>
                Working alongside manufacturing leaders to
                deliver innovative engineering, industrial
                automation and smart manufacturing solutions.
              </p>

            </div>

            <div className="Clients-hero-dots">

              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    activeSlide === index ? "active" : ""
                  }
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}

            </div>

          </div>
        </section>

        {/* =====================================
            CLIENTS & COLLABORATIONS
        ===================================== */}

        <section className="Clients-section">

          <div className="Clients-container">

            <div className="Clients-heading">

              <span className="Clients-label">
                OUR NETWORK
              </span>

              <h1>
                Notable Clients &amp; Collaborations
              </h1>

            </div>

           
<div className="Clients-logo-marquee">
  <div className="Clients-logo-track">

    {[...Clients, ...Clients].map((vendor, index) => (
      <div
        className="Clients-logo-card"
        key={`${vendor.name}-${index}`}
        aria-hidden={index >= Clients.length}
      >
        <img
          src={vendor.image}
          alt={index < Clients.length ? vendor.name : ""}
          loading="lazy"
        />
      </div>
    ))}

  </div>
</div>


            <div className="Clients-description">

           

            </div>

          </div>
        </section>

        {/* =====================================
            COLLABORATIVE ENGINEERING CAPABILITIES
        ===================================== */}

        <section className="Clients-capabilities">

          <div className="Clients-container">

            <div className="Clients-section-heading">

              <span className="Clients-label">
                INDUSTRIAL ENGINEERING CAPABILITIES
              </span>

              <h2>What We Solve</h2>

              <p>
                YARI combines mechanical engineering with
                modern automation technologies to address
                practical manufacturing challenges.
              </p>

            </div>

            <div className="Clients-capability-grid">

              {capabilities.map((item) => (
                <article
                  className="Clients-capability-card"
                  key={item.number}
                >

                  <span className="Clients-card-number">
                    {item.number}
                  </span>

                  <div className="Clients-card-line" />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <ul>
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================
            INTEGRATED TECHNOLOGIES
        ===================================== */}

        <section className="Clients-technologies">

          <div className="Clients-container">

            <div className="Clients-section-heading">

              <span className="Clients-label">
                INTEGRATED TECH STACK
              </span>

              <h2>
                Automation &amp; Smart Manufacturing Technologies
              </h2>

              <p>
                Bringing together mechanical precision,
                controls, inspection and connectivity for
                reliable shop-floor automation.
              </p>

            </div>

            <div className="Clients-technology-grid">

              {technologies.map((technology) => (
                <article
                  className="Clients-technology-card"
                  key={technology.number}
                >

                  {/* IMAGE */}

                  <div className="Clients-technology-image">
                    <img
                      src={technology.image}
                      alt={technology.title}
                      loading="lazy"
                    />
                  </div>

                  {/* CARD DETAILS */}

                  <div className="Clients-technology-content">

                    <span>{technology.number}</span>

                    <h3>{technology.title}</h3>

                    <p>{technology.description}</p>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================
            ENGINEERING PHILOSOPHY
        ===================================== */}

        <section className="Clients-philosophy">

          <div className="Clients-container">

            <span className="Clients-label">
              THE YARI APPROACH
            </span>

            <h2>
              Understand the Manufacturing Problem First,
              Then Engineer the Right Solution.
            </h2>

            <p>
              YARI brings together mechanical engineering,
              vision systems, sensors, IoT and robotics to
              develop reliable shop-floor automation solutions.
            </p>

            <Link
              to="/contact"
              className="Clients-contact-button"
            >
              Discuss Your Project
              <span>→</span>
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Clients;
