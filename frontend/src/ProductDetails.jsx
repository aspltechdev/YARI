
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Footer from "./components/Footer.jsx";
import { products } from "./pages/Products.jsx";

/* =========================================================
   PRODUCT DETAILS COMPONENT
   ========================================================= */

export default function ProductDetails() {
  const { slug } = useParams();

  // Find the selected product
  const product = products.find(
    (item) => item.slug === slug
  );

  // Get three other products
  const relatedProducts = products
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  /* =======================================================
     PRODUCT NOT FOUND
     ======================================================= */

  if (!product) {
    return (
      <main className="product-details-page">

        <nav className="product-details-navbar">

          <div className="product-details-nav-links">

            <Link to="/">Home</Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/industries">
              Industries
            </Link>

            <Link
              to="/products"
              className="active"
            >
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

        <section className="product-not-found">

          <h1>Product Not Found</h1>

          <p>
            The requested product could not be found.
          </p>

          <Link to="/products">
            Back To Products
          </Link>

        </section>

        <Footer />

      </main>
    );
  }

  /* =======================================================
     PRODUCT DETAILS PAGE
     ======================================================= */

  return (
    <main className="product-details-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="product-details-navbar">

        <div className="product-details-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/industries">
            Industries
          </Link>

          <Link
            to="/products"
            className="active"
          >
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
          PRODUCT DETAILS
          ===================================================== */}

      <section className="product-details-section">

        <div className="product-details-container">

          <div className="product-details-main">

            {/* PRODUCT IMAGE */}

            <div className="product-details-image">

              <img
                src={product.image}
                alt={product.title}
              />

            </div>

            {/* PRODUCT INFORMATION */}

            <div className="product-details-info">

              <h1>
                {product.title}
              </h1>

              <p className="product-details-description">
                {product.description}
              </p>

              {/* KEY FEATURES */}

              <div className="product-details-block">

                <h2>
                  KEY FEATURES
                </h2>

                <div className="product-details-features">

                  {product.features.map((feature, index) => (

                    <div
                      className="product-details-feature"
                      key={index}
                    >

                      <span className="product-details-dot"></span>

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* SPECIFICATIONS */}

              <div className="product-details-block specification-block">

                <h2>
                  SPECIFICATION
                </h2>

                <div className="product-specifications">

                  {product.specifications.map(
                    (specification, index) => (

                      <div
                        className="product-specification"
                        key={index}
                      >

                        <span className="product-details-dot"></span>

                        <div>

                          <strong>
                            {specification.label}
                          </strong>

                          <span>
                            {specification.value}
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* REQUEST QUOTE */}

              <Link
                to="/contact"
                className="product-details-quote"
              >
                Request A Quote
              </Link>

            </div>

          </div>
{/* PROJECT OBJECTIVES, SOLUTIONS AND OUTCOMES */}

<section className="product-project-details">

  <div className="product-project-block">
    <h2>Project Objectives</h2>
    <div className="product-project-items">
  {product.outcomes?.map((item, index) => (
    <p key={index}>{item}</p>
  ))}
</div>
  </div>

  <div className="product-project-block">
    <h2>Solutions</h2>
   <div className="product-project-items">
  {product.outcomes?.map((item, index) => (
    <p key={index}>{item}</p>
  ))}
</div>
  </div>

  <div className="product-project-block">
    <h2>Outcomes</h2>
<div className="product-project-items">
  {product.outcomes?.map((item, index) => (
    <p key={index}>{item}</p>
  ))}
</div>
  </div>

</section>
          {/* =================================================
              RELATED PRODUCTS
              ================================================= */}

          <div className="related-products-section">

            <h2>
              RELATED PRODUCTS
            </h2>

            <div className="related-products-grid">

              {relatedProducts.map((related) => (

                <article
                  className="related-product-card"
                  key={related.slug}
                >

                  <Link
                    to={`/products/${related.slug}`}
                    className="related-product-image"
                  >

                    <img
                      src={related.image}
                      alt={related.title}
                    />

                  </Link>

                  <div className="related-product-content">

                    <h3>
                      {related.title}
                    </h3>

                    <p>
                      {related.description}
                    </p>

                    <Link
                      to={`/products/${related.slug}`}
                      className="related-product-arrow"
                      aria-label={`View ${related.title}`}
                    >
                      ↗
                    </Link>

                  </div>

                </article>

              ))}

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
            Partner With Quality Engineering Solutions For Reliable
            Industrial Marking Technologies That Deliver Precision,
            Durability, And Long-Term Performance.
          </p>

          <Link
            to="/contact"
            className="start-project-button"
          >
            Request A Quote
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}
