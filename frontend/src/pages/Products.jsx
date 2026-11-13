
import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../components/Footer.jsx";
import visionImage from "../assets/visionpokyok.png";
import washingImage from "../assets/wahsingmachine.png";
import fabricationImage from "../assets/fabricationnmetal.png";
import laserImage from "../assets/lasermarking.png";
import leakImage from "../assets/leaktesting.png";
import hydraulicImage from "../assets/hydraulictrimming.png";
import electrochemicalImage from "../assets/electromechanicaldeburring.png";
import fumeExtractionImage from "../assets/fumeextraction.png";
import dotPeenImage from "../assets/dotpeen.png";
import logo from "../assets/logo.png";
/* =====================================================
   PRODUCT DATA
   Shared with ProductDetails.jsx
   ===================================================== */

export const products = [
  {
    id: 1,
    slug: "industrial-washing-machine",
    title: "Industrial Washing Machine",
    image:
      washingImage,
    description:
      "An industrial washing solution designed for cleaning components in manufacturing environments.",
    features: [
      "Industrial component cleaning",
      "Customizable machine configuration",
      "Manufacturing process support",
      "Application-specific design",
      
    ],
    objectives: [
  "Remove dirt, oil and contaminants from industrial components.",
  "Support consistent component cleaning before further processing.",
  "Improve cleaning efficiency in manufacturing workflows."
],
solutions: [
  "Industrial component washing based on cleaning requirements.",
  "Customizable machine configuration for different components.",
  "Integration into the customer's manufacturing process."
],
outcomes: [
  "Cleaner components for subsequent operations.",
  "More consistent cleaning processes.",
  "Reduced dependence on manual cleaning."
],
    specifications: [
      { label: "Machine Type", value: "Industrial Washing Machine" },
      { label: "Application", value: "Component Cleaning" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 2,
    slug: "vision-poka-yoke-system",
    title: "Vision Poka-Yoke System",
    image:
      visionImage,
    description:
      "A vision-based inspection system intended to help identify assembly errors and process deviations.",
    features: [
      "Vision-based inspection",
      "Assembly error detection",
      "Quality inspection support",
      "Application-specific integration",
    ],
    objectives: [
  "Prevent assembly errors during production.",
  "Improve inspection and quality control.",
  "Identify incorrect component placement or assembly conditions."
],
solutions: [
  "Vision-based inspection of components and assemblies.",
  "Detection of defined assembly errors.",
  "Integration with the production workflow."
],
outcomes: [
  "Improved assembly verification.",
  "Early identification of process deviations.",
  "Better support for manufacturing quality."
],
    specifications: [
      { label: "System Type", value: "Vision Inspection System" },
      { label: "Application", value: "Error Prevention" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 3,
    slug: "laser-marking-machine",
    title: "Laser Marking Machine",
    image:
      laserImage,
    description:
      "A laser marking solution for marking identification details on industrial components.",
    features: [
      "Component identification",
      "Permanent marking application",
      "Industrial marking solution",
      "Customizable machine setup",
    ],
    objectives: [
  "Mark identification details on industrial components.",
  "Support product identification and traceability.",
  "Provide a consistent marking process."
],
solutions: [
  "Laser-based marking for component identification.",
  "Customizable marking setup based on application.",
  "Integration with manufacturing requirements."
],
outcomes: [
  "Permanent component identification.",
  "Improved traceability support.",
  "Consistent marking across production batches."
],
    specifications: [
      { label: "Machine Type", value: "Laser Marking Machine" },
      { label: "Application", value: "Component Marking" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 4,
    slug: "leak-testing-rig",
    title: "Leak Testing Rig",
    image:
      leakImage,
    description:
      "A testing rig designed for leak inspection of components during manufacturing and quality checks.",
    features: [
      "Leak testing application",
      "Quality inspection support",
      "Customizable test setup",
      "Manufacturing process integration",
    ],
    objectives: [
  "Identify leakage in manufactured components.",
  "Support product quality verification.",
  "Provide a repeatable testing process."
],
solutions: [
  "Dedicated leak testing arrangement.",
  "Testing setup customized to component requirements.",
  "Integration into quality inspection processes."
],
outcomes: [
  "Improved leak inspection.",
  "Early identification of leakage issues.",
  "Better support for product quality checks."
],
    specifications: [
      { label: "Machine Type", value: "Leak Testing Rig" },
      { label: "Application", value: "Leak Inspection" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 5,
    slug: "hydraulic-trimming-spm",
    title: "Hydraulic Trimming SPM",
    image: hydraulicImage,
    description:
      "A special-purpose machine designed for hydraulic trimming operations in manufacturing.",
    features: [
      "Hydraulic trimming application",
      "Special-purpose machine design",
      "Production process support",
      "Customizable machine configuration",
    ],
    objectives: [
  "Perform trimming operations on industrial components.",
  "Support consistent component finishing.",
  "Improve the efficiency of the trimming process."
],
solutions: [
  "Hydraulic-based trimming arrangement.",
  "Special-purpose machine configuration.",
  "Machine design based on component and process requirements."
],
outcomes: [
  "Consistent trimming operations.",
  "Improved process support.",
  "Reduced dependence on manual trimming."
],
    specifications: [
      { label: "Machine Type", value: "Hydraulic Trimming SPM" },
      { label: "Application", value: "Trimming" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 6,
    slug: "dot-peen-marking-system",
    title: "Dot-Peen Marking System",
    image:
      dotPeenImage,
    description:
      "A dot-peen marking solution for identification and traceability of industrial components.",
    features: [
      "Component identification",
      "Traceability marking",
      "Industrial marking application",
      "Customizable system setup",
    ],
    objectives: [
  "Provide identification marks on industrial components.",
  "Support component tracking and traceability.",
  "Maintain consistent marking during production."
],
solutions: [
  "Dot-peen-based component marking.",
  "Customizable marking configuration.",
  "Integration with production identification requirements."
],
outcomes: [
  "Clear component identification.",
  "Improved traceability support.",
  "Consistent marking process."
],
    specifications: [
      { label: "System Type", value: "Dot-Peen Marking System" },
      { label: "Application", value: "Component Marking" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 7,
    slug: "hole-punching-spm",
    title: "Hole Punching SPM",
    image: fabricationImage,
    description:
      "A special-purpose machine developed for hole punching operations in industrial components.",
    features: [
      "Hole punching application",
      "Special-purpose machine design",
      "Manufacturing process support",
      "Customizable machine setup",
    ],
    objectives: [
  "Perform hole punching operations on industrial components.",
  "Support dimensional consistency.",
  "Improve production process efficiency."
],
solutions: [
  "Special-purpose hole punching machine.",
  "Tooling arrangement based on component requirements.",
  "Customizable machine configuration."
],
outcomes: [
  "Consistent hole punching operations.",
  "Improved production workflow.",
  "Repeatable component processing."
],
    specifications: [
      { label: "Machine Type", value: "Hole Punching SPM" },
      { label: "Application", value: "Hole Punching" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 8,
    slug: "fume-extraction-unit",
    title: "Fume Extraction Unit",
    image: fumeExtractionImage,
    description:
      "An extraction solution intended to remove fumes generated during industrial processes.",
    features: [
      "Industrial fume extraction",
      "Workplace air management support",
      "Customizable unit configuration",
      "Application-specific design",
    ],
    objectives: [
  "Remove fumes generated during industrial operations.",
  "Support workplace air management.",
  "Improve the working environment around production equipment."
],
solutions: [
  "Industrial fume extraction arrangement.",
  "Unit configuration based on process requirements.",
  "Integration with the relevant production area."
],
outcomes: [
  "Improved fume management.",
  "Cleaner working areas around equipment.",
  "Better support for workplace air quality."
],
    specifications: [
      { label: "Unit Type", value: "Fume Extraction Unit" },
      { label: "Application", value: "Fume Extraction" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
  {
    id: 9,
    slug: "electrochemical-deburring",
    title: "Electrochemical Deburring",
    image:
      electrochemicalImage,
    description:
      "An electrochemical deburring solution for removing burrs from manufactured components.",
    features: [
      "Electrochemical deburring process",
      "Component finishing application",
      "Burr removal solution",
      "Customizable machine setup",
    ],
    objectives: [
  "Remove unwanted burrs from manufactured components.",
  "Improve component edge finishing.",
  "Support consistent finishing quality."
],
solutions: [
  "Electrochemical deburring process.",
  "Application-specific process configuration.",
  "Integration with component finishing requirements."
],
outcomes: [
  "Improved burr removal.",
  "Consistent component finishing.",
  "Better support for downstream manufacturing operations."
],
    specifications: [
      { label: "Process", value: "Electrochemical Deburring" },
      { label: "Application", value: "Burr Removal" },
      { label: "Configuration", value: "Customizable" },
      { label: "Design", value: "Based on Customer Requirements" },
    ],
  },
];

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
   PRODUCTS COMPONENT
   ===================================================== */

export default function Products() {
  return (
    <main className="products-page">

      {/* NAVIGATION */}

      <nav className="products-navbar">
         <Link to="/" className="site-logo">
      <img src={logo} alt="YARI Logo" />
    </Link>
        <div className="products-nav-links">
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

      {/* PRODUCTS HERO */}

      <section className="products-hero">

        <div className="products-slider">
          {productSlides.map((slide, index) => (
            <div className="products-slide" key={index}>
              <img
                src={slide.image}
                alt={`YARI product application ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="products-overlay"></div>

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

        <div className="products-slider-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </section>

      {/* PRODUCTS GRID */}

      <section
        className="products-grid-section"
        id="product-services"
      >
        <div className="products-grid-container">

          <div className="products-grid">

            {products.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-card-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>

                <div className="product-card-content">

                  <h3>
                    {product.title}
                  </h3>

                  <p className="product-card-description">
                    {product.description}
                  </p>

                  {product.features.length > 0 && (
                    <div className="product-card-features">
                      {product.features.slice(0, 3).map(
                        (feature, featureIndex) => (
                          <div
                            className="product-feature"
                            key={featureIndex}
                          >
                            <span className="product-feature-dot"></span>
                            <span>{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  <Link
                    to={`/products/${product.slug}`}
                    className="product-view-button"
                  >
                    <span>View Product</span>

                    <span className="product-view-arrow">
                      ↗
                    </span>
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* START A PROJECT CTA */}

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
