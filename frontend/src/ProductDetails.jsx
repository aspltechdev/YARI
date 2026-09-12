import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

/* =========================================================
   PRODUCT DETAILS DATA
   ========================================================= */

const productDetails = {
  "cnc-machined-metal-parts": {
    title: "CNC Machined Metal Parts",

    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90",

    description:
      "High-Precision Custom Metal Components Manufactured To Customer Drawings, Dimensions, And Engineering Specifications. We Deliver Accurately Machined Parts With Consistent Quality, Tight Tolerances, And Excellent Surface Finishes For Demanding Automotive, Machinery, Industrial, And Engineering Applications.",

    features: [
      "High Precision Machining",
      "Tight Tolerances",
      "Excellent Surface Finish",
      "Custom Dimensions",
      "Consistent Quality",
      "Drawing-Based Manufacturing",
    ],

    specifications: [
      {
        label: "Process",
        value: "CNC Turning & Milling",
      },
      {
        label: "Materials",
        value: "Steel, Stainless Steel, Aluminium & Brass",
      },
      {
        label: "Tolerance",
        value: "As Per Customer Drawing",
      },
      {
        label: "Production",
        value: "Prototype, Small & Batch Production",
      },
    ],
  },

  "fabricated-metal-components": {
    title: "Fabricated Metal Components",

    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=90",

    description:
      "Custom-Fabricated Metal Parts And Assemblies Designed For Reliable Industrial Applications. Our fabrication-oriented solutions support customer-specific dimensions, practical construction requirements, and dependable assembly performance.",

    features: [
      "Custom Fabrication",
      "Strong Construction",
      "Precision Assembly",
      "Durable Finish",
      "Custom Dimensions",
      "Production Support",
    ],

    specifications: [
      {
        label: "Process",
        value: "Cutting, Bending & Fabrication",
      },
      {
        label: "Materials",
        value: "Mild Steel, Stainless Steel & Aluminium",
      },
      {
        label: "Design",
        value: "Customer Drawing & Specification Based",
      },
      {
        label: "Production",
        value: "Prototype, Small & Batch Production",
      },
    ],
  },

  "sheet-metal-components": {
    title: "Sheet Metal Components",

    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=90",

    description:
      "Precision Sheet-Metal Components Manufactured For Industrial Applications. Components can be developed according to required dimensions, forming requirements, assembly conditions, and customer engineering specifications.",

    features: [
      "Accurate Cutting",
      "Bending & Forming",
      "Custom Design",
      "Consistent Finish",
      "Drawing-Based Production",
      "Assembly Ready",
    ],

    specifications: [
      {
        label: "Process",
        value: "Sheet Cutting, Bending & Forming",
      },
      {
        label: "Materials",
        value: "Steel, Stainless Steel & Aluminium",
      },
      {
        label: "Design",
        value: "Customer Drawing Based",
      },
      {
        label: "Application",
        value: "Industrial Equipment & Assemblies",
      },
    ],
  },

  "machinery-components": {
    title: "Machinery Components",

    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=90",

    description:
      "Engineered Components And Assemblies For Industrial Machinery. YARI supports the development and manufacture of practical components for machinery, equipment, production systems, and engineering applications.",

    features: [
      "Engineering Precision",
      "Custom Components",
      "Robust Design",
      "Reliable Performance",
      "Drawing-Based Manufacturing",
      "Industrial Applications",
    ],

    specifications: [
      {
        label: "Process",
        value: "CNC Machining & Fabrication",
      },
      {
        label: "Materials",
        value: "Steel, Stainless Steel & Aluminium",
      },
      {
        label: "Design",
        value: "Engineering Drawing Based",
      },
      {
        label: "Application",
        value: "Industrial Machinery & Equipment",
      },
    ],
  },

  "automotive-components": {
    title: "Automotive Components",

    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=90",

    description:
      "Precision-Engineered And Fabricated Components For Automotive Applications And Assemblies. Solutions can support customer-specific dimensions, component requirements, production quantities, and engineering specifications.",

    features: [
      "Precision Manufacturing",
      "Custom Dimensions",
      "Consistent Quality",
      "Production Ready",
      "Machined Components",
      "Fabricated Assemblies",
    ],

    specifications: [
      {
        label: "Process",
        value: "CNC Machining & Fabrication",
      },
      {
        label: "Materials",
        value: "Steel, Stainless Steel & Aluminium",
      },
      {
        label: "Design",
        value: "Customer Drawing Based",
      },
      {
        label: "Application",
        value: "Automotive Components & Assemblies",
      },
    ],
  },

  "engineered-components": {
    title: "Engineered Components",

    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90",

    description:
      "Precision-Engineered And Fabricated Components For Industrial And Engineering Applications. Components are developed around customer requirements, practical manufacturing considerations, and application-specific specifications.",

    features: [
      "Precision Manufacturing",
      "Custom Dimensions",
      "Consistent Quality",
      "Production Ready",
      "Engineering Support",
      "Application Specific Design",
    ],

    specifications: [
      {
        label: "Process",
        value: "Machining & Fabrication",
      },
      {
        label: "Materials",
        value: "Steel, Stainless Steel, Aluminium & Brass",
      },
      {
        label: "Design",
        value: "Customer Drawing & Requirement Based",
      },
      {
        label: "Application",
        value: "Industrial & Engineering Systems",
      },
    ],
  },
};


/* =========================================================
   RELATED PRODUCTS
   ========================================================= */

const relatedProducts = [
  {
    slug: "machinery-components",
    title: "Machinery Components",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=90",
    description:
      "Engineered Components And Assemblies For Industrial Machinery.",
  },

  {
    slug: "automotive-components",
    title: "Automotive Components",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=700&q=90",
    description:
      "Precision-Engineered And Fabricated Components For Automotive Applications And Assemblies.",
  },

  {
    slug: "cnc-machined-metal-parts",
    title: "CNC Machined Metal Parts",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=700&q=90",
    description:
      "High-Precision Custom Metal Components For Industrial And Engineering Applications.",
  },

  {
    slug: "fabricated-metal-components",
    title: "Fabricated Metal Components",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=90",
    description:
      "Custom-Fabricated Metal Parts And Assemblies For Reliable Industrial Applications.",
  },

  {
    slug: "sheet-metal-components",
    title: "Sheet Metal Components",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=90",
    description:
      "Precision Sheet-Metal Components For Industrial Applications.",
  },

  {
    slug: "engineered-components",
    title: "Engineered Components",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=700&q=90",
    description:
      "Precision-Engineered Components For Industrial And Engineering Applications.",
  },
];


/* =========================================================
   COMPONENT
   ========================================================= */

export default function ProductDetails() {
  const { slug } = useParams();

  const product = productDetails[slug];

  /* =======================================================
     INVALID PRODUCT
     ======================================================= */

  if (!product) {
    return (
      <main className="product-details-page">

        <nav className="product-details-navbar">

          <div className="product-details-nav-links">

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/products" className="active">
              Products
            </Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>

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

      </main>
    );
  }


  /* =======================================================
     PAGE
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


            {/* =================================================
                PRODUCT IMAGE
                ================================================= */}

            <div className="product-details-image">

              <img
                src={product.image}
                alt={product.title}
              />

            </div>


            {/* =================================================
                PRODUCT INFORMATION
                ================================================= */}

            <div className="product-details-info">

              <h1>
                {product.title}
              </h1>

              <p className="product-details-description">
                {product.description}
              </p>


              {/* ===============================================
                  KEY FEATURES
                  =============================================== */}

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


              {/* ===============================================
                  SPECIFICATION
                  =============================================== */}

              <div className="product-details-block specification-block">

                <h2>
                  SPECIFICATION
                </h2>

                <div className="product-specifications">

                  {product.specifications.map((specification, index) => (

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

                  ))}

                </div>

              </div>


              {/* ===============================================
                  REQUEST QUOTE
                  =============================================== */}

              <Link
                to="/contact"
                className="product-details-quote"
              >
                Request A Quote
              </Link>

            </div>

          </div>


          {/* =================================================
              RELATED PRODUCTS
              ================================================= */}

          <div className="related-products-section">

            <h2>
              RELATED PRODUCTS
            </h2>

            <div className="related-products-grid">

              {relatedProducts
                .filter((related) => related.slug !== slug)
                .slice(0, 3)
                .map((related) => (

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
      Partner With Quality Engineering Solutions For Reliable Industrial
      Marking Technologies That Deliver Precision, Durability,
      And Long-Term Performance.
    </p>

    <a
      href="/contact"
      className="start-project-button"
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


          <div className="footer-column footer-links">

            <h3>
              QUICK LINKS
            </h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>

          </div>


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


          <a
            href="#"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <span>⌃</span>
            <span>⌃</span>
          </a>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 YARI Design &amp; Manufacturing Services.
            All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}