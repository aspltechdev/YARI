import "./Home.css";

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

const products = [
  {
    title: "Control Panel Boards",
    description:
      "Industrial Control And Electrical Panel Solutions For Demanding Applications.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Control Panel Boards",
    description:
      "Industrial Control And Electrical Panel Solutions For Demanding Applications.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Control Panel Boards",
    description:
      "Industrial Control And Electrical Panel Solutions For Demanding Applications.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
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
  const scrollingIndustries = [...industries, ...industries];

  return (
    <main className="home-page">

      {/* =====================================================
          TOP NAVIGATION
          ===================================================== */}

      <nav className="top-navbar">
        <div className="nav-links">
          <a href="/" className="active">
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
      </nav>


      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90"
            alt="Engineer working in industrial environment"
          />
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

            <a
              href="/about"
              className="home-btn home-btn-primary"
            >
              Explore Now
            </a>

            <a
              href="/contact"
              className="home-btn home-btn-dark"
            >
              Get A Quote
            </a>

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

            <a
              href="/about"
              className="home-btn home-btn-primary"
            >
              About YARI
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
          ===================================================== */}

<section className="home-section industries-section">

  <div className="container">

    <p className="section-eyebrow">
      INDUSTRIES
    </p>

    <h2 className="section-title">
      Built Around Industrial
      <br />
      Applications.
    </h2>

    <p className="section-description">
      Explore The Industries Page For Detailed
      Application-Oriented Descriptions.
    </p>

  </div>


  <div className="industries-slider">

    <div className="industries-track">

      {scrollingIndustries.map((industry, index) => (

        <div
          className="industry-card"
          key={`${industry.title}-${index}`}
        >

          <img
            src={industry.image}
            alt={industry.title}
          />

          <div className="industry-overlay"></div>

          <div className="industry-text">

            <h3>
              {industry.title}
            </h3>

            <p>
              {industry.tag}
            </p>

          </div>

        </div>

      ))}

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

            {products.map((product, index) => (

              <div
                className="product-card"
                key={index}
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

                  <a
                    href="/products"
                    className="product-button"
                  >
                    View Product
                    <span>↗</span>
                  </a>

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

          <a
            href="/contact"
            className="home-btn home-btn-primary"
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