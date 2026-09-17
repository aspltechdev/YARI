import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../components/Footer.jsx";

/* =====================================================
   API
   ===================================================== */

const API_URL = "https://yari-backend.vercel.app";

/* =====================================================
   PRODUCT HERO SLIDES
   ===================================================== */

const productSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=90",
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
   PRODUCTS COMPONENT
   ===================================================== */

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =====================================================
     LOAD PRODUCTS FROM BACKEND
     ===================================================== */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/products`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Unable to load products."
          );
        }

        setProducts(
          Array.isArray(result.data)
            ? result.data
            : []
        );
      } catch (err) {
        console.error(
          "Error loading products:",
          err
        );

        setError(
          "Unable to load products at the moment."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="products-page">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="products-navbar">

        <div className="products-nav-links">

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
          PRODUCTS HERO
          ===================================================== */}

      <section className="products-hero">

        {/* IMAGE SLIDER */}

        <div className="products-slider">

          {productSlides.map((slide, index) => (

            <div
              className="products-slide"
              key={index}
            >

              <img
                src={slide.image}
                alt={`YARI product application ${
                  index + 1
                }`}
              />

            </div>

          ))}

        </div>


        {/* DARK OVERLAY */}

        <div className="products-overlay"></div>


        {/* HERO CONTENT */}

        <div className="products-content">

          <p className="products-eyebrow">
            PRODUCTS
          </p>

          <h1>
            DETAILED ENGINEERING,
            <br />
            MANUFACTURING AND
            <br />
            PROJECT SERVICES.
          </h1>

          <p className="products-description">
            A Dedicated Catalogue For Visitors Who
            Want To Understand The Scope Beyond The
            Landing Page.
          </p>

          <a
            href="#product-services"
            className="products-button"
          >
            Explore Products
          </a>

        </div>


        {/* SLIDER DOTS */}

        <div className="products-slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS GRID
          ===================================================== */}

      <section
        className="products-grid-section"
        id="product-services"
      >

        <div className="products-grid-container">

          {/* LOADING */}

          {loading && (
            <div className="products-loading">
              Loading products...
            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="products-error">
              {error}
            </div>
          )}


          {/* NO PRODUCTS */}

          {!loading &&
            !error &&
            products.length === 0 && (
              <div className="products-empty">
                No products are currently available.
              </div>
            )}


          {/* PRODUCTS */}

          {!loading &&
            !error &&
            products.length > 0 && (

              <div className="products-grid">

                {products.map((product) => (

                  <article
                    className="product-card"
                    key={product.id}
                  >

                    {/* =====================================================
                        PRODUCT IMAGE
                        ===================================================== */}

                    <div className="product-card-image">

                      {product.image ? (

                        <img
                          src={getImageUrl(
                            product.image
                          )}
                          alt={product.title}
                        />

                      ) : (

                        <div className="product-card-no-image">
                          No Image
                        </div>

                      )}

                    </div>


                    {/* =====================================================
                        PRODUCT CONTENT
                        ===================================================== */}

                    <div className="product-card-content">

                      <h3>
                        {product.title}
                      </h3>


                      {/* DESCRIPTION */}

                      <p className="product-card-description">
                        {product.description}
                      </p>


                      {/* =====================================================
                          PRODUCT FEATURES
                          ===================================================== */}

                      {Array.isArray(
                        product.features
                      ) &&
                        product.features.length > 0 && (

                          <div className="product-card-features">

                            {product.features.map(
                              (
                                feature,
                                featureIndex
                              ) => (

                                <div
                                  className="product-feature"
                                  key={
                                    featureIndex
                                  }
                                >

                                  <span className="product-feature-dot"></span>

                                  <span>
                                    {feature}
                                  </span>

                                </div>

                              )
                            )}

                          </div>

                        )}


                      {/* =====================================================
                          VIEW PRODUCT BUTTON
                          ===================================================== */}

                      <Link
                        to={`/products/${product.slug}`}
                        className="product-view-button"
                      >

                        <span>
                          View Product
                        </span>

                        <span className="product-view-arrow">
                          ↗
                        </span>

                      </Link>

                    </div>

                  </article>

                ))}

              </div>

            )}

        </div>

      </section>


      {/* =====================================================
          START A PROJECT CTA
          ===================================================== */}

      <section className="products-project-section">

        <div className="products-project-overlay"></div>

        <div className="products-project-content">

          <p className="products-project-eyebrow">
            START A PROJECT
          </p>

          <h2>
            Let’s Build Your Next Industrial Solution
          </h2>

          <p className="products-project-description">
            Partner With Quality Engineering Solutions
            For Reliable Industrial Marking Technologies
            That Deliver Precision, Durability, And
            Long-Term Performance.
          </p>

          <Link
            to="/contact"
            className="products-project-button"
          >
            Request A Quote
          </Link>

        </div>

      </section>
      <Footer />

    </main>
  );
}
