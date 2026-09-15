import { useEffect, useState } from "react";
import "./Industries.css";
import Footer from "../components/Footer.jsx";

/* =====================================================
   API
   ===================================================== */

const API_URL = "http://localhost:5000";

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
   IMAGE URL HELPER
   ===================================================== */

const getImageUrl = (image) => {
  if (!image) {
    return "";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  if (image.startsWith("/")) {
    return `${API_URL}${image}`;
  }

  return `${API_URL}/${image}`;
};

/* =====================================================
   INDUSTRIES COMPONENT
   ===================================================== */

export default function Industries() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =====================================================
     LOAD INDUSTRIES FROM BACKEND
     ===================================================== */

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/industries`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Unable to load industries."
          );
        }

        setIndustries(
          Array.isArray(result.data)
            ? result.data
            : []
        );
      } catch (err) {
        console.error(
          "Error loading industries:",
          err
        );

        setError(
          "Unable to load industries at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

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

          {/* LOADING */}

          {loading && (
            <div className="industries-loading">
              Loading industries...
            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="industries-error">
              {error}
            </div>
          )}


          {/* NO INDUSTRIES */}

          {!loading &&
            !error &&
            industries.length === 0 && (
              <div className="industries-empty">
                No industries are currently available.
              </div>
            )}


          {/* INDUSTRIES */}

          {!loading &&
            !error &&
            industries.map((industry) => (

              <article
                className="industry-service-card"
                key={industry.id}
              >

                {/* =====================================================
                    IMAGE
                    ===================================================== */}

                <div className="industry-service-image">

                  {industry.image ? (
                    <img
                      src={getImageUrl(
                        industry.image
                      )}
                      alt={industry.title}
                    />
                  ) : (
                    <div className="industry-service-no-image">
                      No Image
                    </div>
                  )}

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

                  {Array.isArray(
                    industry.features
                  ) &&
                    industry.features.length > 0 && (

                      <div className="industry-service-features">

                        {industry.features.map(
                          (
                            feature,
                            featureIndex
                          ) => (

                            <div
                              className="industry-feature"
                              key={
                                featureIndex
                              }
                            >

                              <span className="industry-feature-dot"></span>

                              <span>
                                {feature}
                              </span>

                            </div>

                          )
                        )}

                      </div>

                    )}


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