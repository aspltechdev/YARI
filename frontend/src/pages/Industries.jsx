import "./Industries.css";
import Footer from "../components/Footer.jsx";
import washingImage from "../assets/wahsingmachine.png";
import fabricationImage from "../assets/fabricationnmetal.png";
import visionImage from "../assets/visionpokyok.png";
import logo from "../assets/logo.png";
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

const industries = [
  {
    id: 1,
    title: "Industrial Engineering",
    image: visionImage,
    description: "Engineering design and consultancy support for industrial and manufacturing applications.",
    features: ["Engineering design support", "Industrial project requirements", "Technical planning"],
  },
  {
    id: 2,
    title: "Manufacturing",
    image: washingImage,
    description: "Manufacturing-related services supporting industrial components and production requirements.",
    features: ["Manufacturing support", "Component processing", "Production requirements"],
  },
  {
    id: 3,
    title: "Fabrication & Metal",
    image: fabricationImage,
    description: "Fabrication-related work and metal treatment services for industrial applications.",
    features: ["Fabricated metal products", "Metal treatment-related work", "Custom fabrication support"],
  },
  {
    id: 4,
    title: "Automotive",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=90",
    description: "Engineering and manufacturing support for automotive components and related applications.",
    features: ["Component-related applications", "Engineering support", "Manufacturing requirements"],
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
            <a to="/" className="site-logo">
      <img src={logo} alt="YARI Logo" />
    </a>
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
                alt={`YARI industrial application ${
                  index + 1
                }`}
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
            Each Industry Section Explains The Kind Of
            Support YARI Can Present Around Its
            Documented Business Activities.
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
          INDUSTRY SERVICES
          ===================================================== */}

      <section className="industry-services-section">

        <div className="industry-services-container">

          {industries.map((industry) => (
            <article className="industry-service-card" key={industry.id}>
              <div className="industry-service-image">
                <img src={industry.image} alt={industry.title} loading="lazy" />
              </div>

              <div className="industry-service-content">
                <h3>{industry.title}</h3>
                <p className="industry-service-description">{industry.description}</p>

                <div className="industry-service-features">
                  {industry.features.map((feature, featureIndex) => (
                    <div className="industry-feature" key={featureIndex}>
                      <span className="industry-feature-dot"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="industry-service-button">
                  Contact Us <span>→</span>
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
              Have A Requirement That Does Not Fit
              One Category?
            </h2>

            <p className="industries-custom-description">
              Share The Application, Drawing, Component
              Details Or Project Scope And Discuss The
              Suitable Engineering Service.
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
      <Footer />

    </main>
  );
}
