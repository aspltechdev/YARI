import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer.jsx";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=90",
  },
];

const industries = [
  {
    title: "Industrial Engineering",
    tag: "CAD & Design Solutions",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Manufacturing",
    tag: "Reliable Metal Components",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fabrication & Metal",
    tag: "Sheet Metal Fabrication",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Automotive",
    tag: "Components And Assemblies",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85",
  },
];

/* =========================================================
   HOME PRODUCTS
   ========================================================= */

const products = [
  {
    title: "CNC Machined Metal Parts",
    description:
      "High-Precision Custom Metal Components Manufactured For Industrial And Engineering Applications.",
    slug: "cnc-machined-metal-parts",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fabricated Metal Components",
    description:
      "Custom-Fabricated Metal Parts And Assemblies For Reliable Industrial Applications.",
    slug: "fabricated-metal-components",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sheet Metal Components",
    description:
      "Precision Sheet-Metal Components Manufactured For Industrial Applications.",
    slug: "sheet-metal-components",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
  },
];

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85",
    className: "gallery-large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    className: "gallery-large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
];

export default function Home() {
  const scrollingHeroSlides = [...heroSlides, ...heroSlides];
  const scrollingIndustries = [...industries, ...industries];

  return (
    <main className="home-page">

      {/* =====================================================
          TOP NAVIGATION
          ===================================================== */}

      <nav className="top-navbar">

        <div className="nav-links">

          <Link to="/" className="active">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/industries">
            Industries
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </nav>


      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-image">

          <div className="home-hero-track">

            {scrollingHeroSlides.map((slide, index) => (

              <div
                className="home-hero-slide"
                key={index}
              >

                <img
                  src={slide.image}
                  alt={`YARI engineering and manufacturing ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </div>

        <div className="home-hero-overlay"></div>

        <div className="container home-hero-content">

          <p className="home-eyebrow">
            ENGINEERING • DESIGN • MANUFACTURING
          </p>

          <h1>
            ENGINEERING IDEAS INTO
            <br />
            PRACTICAL SOLUTIONS.
          </h1>

          <p className="home-hero-description">
            YARI Design & Manufacturing Services is a Chennai-based
            engineering business supporting industrial and manufacturing
            requirements through engineering design, fabrication-related
            work and project services.
          </p>

          <div className="home-hero-buttons">

            <Link
              to="/about"
              className="home-btn home-btn-primary"
            >
              Explore Now
            </Link>

            <Link
              to="/contact"
              className="home-btn home-btn-dark"
            >
              Get A Quote
            </Link>

          </div>

          <div className="hero-slider-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>

        </div>

      </section>


      {/* =====================================================
          AT A GLANCE
          ===================================================== */}

      <section className="home-section glance-section">

        <div className="container">

          <p className="section-eyebrow">
            AT A GLANCE
          </p>

          <h2 className="section-title">
            A Focused Engineering And
            <br />
            Manufacturing Partner.
          </h2>

          <p className="section-description">
            The Landing Page Stays Concise While The Dedicated Pages
            Provide The Detailed Information Visitors Need.
          </p>

          <div className="glance-grid">

            <div className="glance-card">
              <h3>
                Engineering Design
              </h3>

              <p>
                Design And Consultancy Support For Industrial And
                Manufacturing Projects.
              </p>
            </div>

            <div className="glance-card">
              <h3>
                Fabrication
              </h3>

              <p>
                Fabricated Metal Product And Metal-Treatment Related
                Job Work.
              </p>
            </div>

            <div className="glance-card">
              <h3>
                Project Support
              </h3>

              <p>
                Engineering And Project-Management Support For
                Industrial Applications.
              </p>
            </div>

            <div className="glance-card">
              <h3>
                Maintenance
              </h3>

              <p>
                Maintenance And Repair Support Associated With
                Fabricated Metal Products.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY YARI
          ===================================================== */}

      <section className="why-yari-section">

        <div className="why-yari-container container">

          <div className="why-yari-image">

            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=90"
              alt="Engineering team working together"
            />

          </div>

          <div className="why-yari-content">

            <p className="section-eyebrow">
              WHY YARI
            </p>

            <h2>
              Practical Engineering
              <br />
              Support For Real Project
              <br />
              Requirements.
            </h2>

            <p>
              YARI's public business profile connects engineering
              services with industrial/manufacturing projects and
              fabricated-metal related activities.
            </p>

            <Link
              to="/about"
              className="home-btn home-btn-primary"
            >
              About YARI
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
          ===================================================== */}

      <section
        className="industries-section"
        id="industries"
      >

        <div className="industries-container">

          <div className="industries-content">

            <span className="industries-label">
              INDUSTRIES
            </span>

            <h2>
              Built Around Industrial
              <br />
              Applications.
            </h2>

            <p>
              Explore The Industries Page For Detailed Application-Oriented Descriptions.
            </p>

          </div>


          <div className="industries-cards-wrapper">

            <div className="industries-cards">

              {scrollingIndustries.map((industry, index) => (

                <article
                  className="industry-card"
                  key={`${industry.title}-${index}`}
                >

                  <img
                    src={industry.image}
                    alt={industry.title}
                  />

                  <div className="industry-card-overlay">

                    <h3>
                      {industry.title}
                    </h3>

                    <span>
                      {industry.tag}
                    </span>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <section className="home-section products-section">

        <div className="container">

          <p className="section-eyebrow">
            PRODUCTS
          </p>

          <h2 className="section-title">
            Engineered For Performance.
            <br />
            Built For Industry.
          </h2>

          <p className="section-description">
            Present Your Key Product Categories Here With A Clean,
            Visual Product-Card Layout.
          </p>

          <div className="products-grid">

            {products.map((product) => (

              <div
                className="product-card"
                key={product.slug}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                </div>

                <div className="product-content">

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  {/* =================================================
                      FIXED PRODUCT LINK
                      ================================================= */}

                  <Link
                    to={`/products/${product.slug}`}
                    className="product-button"
                  >

                    View Product

                    <span>
                      ↗
                    </span>

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
          ===================================================== */}

      <section className="home-section gallery-section">

        <div className="container">

          <p className="section-eyebrow">
            GALLERY
          </p>

          <h2 className="section-title">
            Built Around Industrial
            <br />
            Applications.
          </h2>

          <p className="section-description">
            Show Your Latest Products And Manufacturing Work In
            One Visual Section.
          </p>

          <div className="gallery-grid">

            {galleryImages.map((item, index) => (

              <div
                className={`gallery-item ${item.className}`}
                key={index}
              >

                <img
                  src={item.image}
                  alt={`YARI manufacturing gallery ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="home-cta">

        <div className="home-cta-image">

          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1800&q=90"
            alt="Industrial machining"
          />

        </div>

        <div className="home-cta-overlay"></div>

        <div className="home-cta-content">

          <p className="home-eyebrow">
            START A PROJECT
          </p>

          <h2>
            Let's Build Your Next Industrial Solution
          </h2>

          <p>
            Partner With Quality Engineering Solutions For Reliable
            Industrial Manufacturing Technologies That Deliver
            Precision, Durability, And Long-Term Performance.
          </p>

          <Link
            to="/contact"
            className="home-btn home-btn-primary"
          >
            Request A Quote
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}
