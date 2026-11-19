
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./career.css";

import mechanicalImage from "../assets/fabricationnmetal.png";
import automationImage from "../assets/hydraulictrimming.png";
import visionImage from "../assets/visionpokyok.png";
import iotImage from "../assets/wahsingmachine.png";
import manufacturingImage from "../assets/electromechanicaldeburring.png";

// HERO BACKGROUND IMAGES
const heroImages = [
  mechanicalImage,
  automationImage,
  visionImage,
];

// CAREER AREAS
const careerAreas = [
  {
    number: "01",
    title: "Mechanical Design Engineering",
    description:
      "Work on machine design, 3D CAD modelling, mechanisms, fixtures, fabrication and custom special-purpose machines.",
    tags: ["3D CAD", "Machine Design", "SPM"],
    image: mechanicalImage,
  },
  {
    number: "02",
    title: "Industrial Automation",
    description:
      "Contribute to automation projects involving PLC logic, HMI interfaces, sensors, actuators and machine integration.",
    tags: ["PLC", "HMI", "Automation"],
    image: automationImage,
  },
  {
    number: "03",
    title: "Vision & Quality Inspection",
    description:
      "Explore camera-based inspection, image processing, defect detection, component verification and poka-yoke systems.",
    tags: ["Machine Vision", "Inspection", "Poka-Yoke"],
    image: visionImage,
  },
  {
    number: "04",
    title: "Smart Manufacturing & IoT",
    description:
      "Work with machine monitoring, industrial connectivity, real-time data and smart manufacturing technologies.",
    tags: ["IoT", "Monitoring", "Connectivity"],
    image: iotImage,
  },
  {
    number: "05",
    title: "Manufacturing & Assembly",
    description:
      "Get involved in machining, fabrication, mechanical assembly, testing and commissioning of industrial equipment.",
    tags: ["Fabrication", "Assembly", "Testing"],
    image: manufacturingImage,
  },
];

// WHAT WE VALUE
const qualities = [
  {
    number: "01",
    title: "Problem-Solving Mindset",
    description:
      "Understand manufacturing challenges and approach them with practical engineering solutions.",
  },
  {
    number: "02",
    title: "Technical Curiosity",
    description:
      "Be interested in learning about mechanical systems, automation, sensors and emerging technologies.",
  },
  {
    number: "03",
    title: "Hands-on Approach",
    description:
      "Enjoy working with real machines, engineering concepts, testing and implementation.",
  },
  {
    number: "04",
    title: "Team Collaboration",
    description:
      "Work together across mechanical, electrical and automation disciplines to deliver solutions.",
  },
];

// ENGINEERING JOURNEY
const journey = [
  "Understand",
  "Concept",
  "Design",
  "Build",
  "Automate",
  "Validate",
];

function career() {
  const [activeHero, setActiveHero] = useState(0);

  // AUTOMATIC HERO SLIDER — EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // EMAIL DETAILS
  const emailSubject = encodeURIComponent(
    "Career Opportunity - YARI"
  );

  const emailBody = encodeURIComponent(
    "Hello YARI Team,\n\nI am interested in exploring career opportunities at YARI.\n\nName:\nArea of Interest:\nExperience:\nContact Number:\n\nPlease find my resume attached.\n\nThank you."
  );

  return (
    <>
      <Navbar />

      <main className="careers-page">

        {/* =====================================
            HERO SECTION WITH IMAGE SLIDER
        ====================================== */}

        <section className="careers-hero">

          {/* BACKGROUND SLIDES */}
          <div className="careers-hero-slides">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`careers-hero-slide ${
                  activeHero === index ? "active" : ""
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>

          {/* DARK OVERLAY */}
          <div className="careers-hero-shade"></div>

          {/* HERO CONTENT */}
          <div className="careers-hero-overlay">
            <div className="careers-container">

              <span className="careers-eyebrow">
                BUILD YOUR FUTURE WITH YARI
              </span>

              <h1>
                Engineer Ideas.
                <br />
                Build What's Next.
              </h1>

              <p>
                Be part of an engineering environment where mechanical
                innovation, industrial automation and smart manufacturing
                come together to solve real-world challenges.
              </p>

              <a
                href="#career-opportunities"
                className="careers-button"
              >
                Explore Career Areas <span>→</span>
              </a>

            </div>
          </div>

          {/* SLIDER DASH INDICATORS */}
          <div className="careers-hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`careers-hero-dot ${
                  activeHero === index ? "active" : ""
                }`}
                onClick={() => setActiveHero(index)}
                aria-label={`Show background image ${index + 1}`}
                aria-pressed={activeHero === index}
              />
            ))}
          </div>

        </section>

        {/* =====================================
            INTRODUCTION
        ====================================== */}

        <section className="careers-intro">
          <div className="careers-container careers-intro-grid">

            <div className="careers-intro-heading">
              <span className="careers-label">
                CAREERS AT YARI
              </span>

              <h2>
                Engineering Practical Solutions.
                <br />
                Creating Real Impact.
              </h2>
            </div>

            <div className="careers-intro-text">
              <p>
                At YARI, engineering starts with understanding the
                manufacturing problem. Our work brings together mechanical
                engineering, automation, vision systems, sensors, IoT
                and robotics to develop reliable shop-floor solutions.
              </p>

              <p>
                We welcome people who are curious about engineering,
                enjoy solving practical problems and want to contribute
                to the future of manufacturing.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================
            CAREER AREAS
        ====================================== */}

        <section
          className="careers-areas"
          id="career-opportunities"
        >
          <div className="careers-container">

            <div className="careers-heading">
              <span className="careers-label">
                EXPLORE YOUR INTEREST
              </span>

              <h2>Areas You Can Grow In</h2>

              <p>
                Explore the engineering disciplines connected to
                YARI's manufacturing and automation projects.
              </p>
            </div>

            <div className="careers-area-grid">
              {careerAreas.map((area) => (
                <article
                  className="careers-area-card"
                  key={area.number}
                >

                  <div className="careers-area-image">
                    <img
                      src={area.image}
                      alt={area.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="careers-area-content">

                    <span className="careers-number">
                      {area.number}
                    </span>

                    <div className="careers-card-line"></div>

                    <h3>{area.title}</h3>

                    <p>{area.description}</p>

                    <div className="careers-tags">
                      {area.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================
            WHAT WE VALUE
        ====================================== */}

        <section className="careers-values">
          <div className="careers-container">

            <div className="careers-heading">
              <span className="careers-label">
                WHAT WE VALUE
              </span>

              <h2>Bring Your Engineering Mindset</h2>

              <p>
                We value the qualities that help turn manufacturing
                challenges into practical engineering solutions.
              </p>
            </div>

            <div className="careers-values-grid">
              {qualities.map((quality) => (
                <article
                  className="careers-value-card"
                  key={quality.number}
                >
                  <span>{quality.number}</span>

                  <h3>{quality.title}</h3>

                  <p>{quality.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================
            ENGINEERING EXPOSURE
        ====================================== */}

        <section className="careers-exposure">
          <div className="careers-container">

            <span className="careers-label">
              BE PART OF THE PROCESS
            </span>

            <h2>
              From Engineering Concepts to Production Reality
            </h2>

            <p>
              YARI's structured approach connects requirement understanding,
              concept development, design, fabrication, automation,
              validation and commissioning.
            </p>

            <div className="careers-journey">
              {journey.map((step, index) => (
                <div
                  className="careers-journey-step"
                  key={step}
                >
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================
            APPLICATION CTA
        ====================================== */}

        <section className="careers-apply">
          <div className="careers-container">

            <span className="careers-label">
              TAKE THE NEXT STEP
            </span>

            <h2>
              Interested in Building
              <br />
              the Future of Manufacturing?
            </h2>

            <p>
              Tell us about your background, technical interests and
              how you would like to contribute to YARI.
            </p>

            <a
              className="careers-button"
              href={`mailto:info@yaridms.in?subject=${emailSubject}&body=${emailBody}`}
            >
              Share Your Resume <span>→</span>
            </a>

            <p className="careers-email-note">
              Email your resume to{" "}
              <a href="mailto:info@yaridms.in">
                info@yaridms.in
              </a>
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default career;
