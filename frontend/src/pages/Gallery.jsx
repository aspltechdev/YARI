import "./Gallery.css";
import electrochemicalImage from "../assets/electromechanicaldeburring.png";
import hydraulicImage from "../assets/hydraulictrimming.png";
import laserCuttingImage from "../assets/lasermarking.png";
import pokyokImage from "../assets/visionpokyok.png";
import washingImage from "../assets/wahsingmachine.png";
import Footer from "../components/Footer.jsx";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar.jsx";


/* =====================================================
   GALLERY HERO SLIDES
   ===================================================== */

const gallerySlides = [
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90",
  },
  {
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=2000&q=90",
  },
];


/* =====================================================
   GALLERY PAGE
   ===================================================== */

const galleryImages = [
  { id: 1, title: "Industrial Manufacturing", description: "Industrial manufacturing and engineering applications.", image:washingImage },
  { id: 2, title: "Engineering Design", description: "Engineering and technical design applications.", image: pokyokImage },
  { id: 3, title: "Metal Fabrication", description: "Fabrication and metalworking applications.", image: laserCuttingImage },
  { id: 4, title: "Industrial Equipment", description: "Industrial machinery and equipment.", image: hydraulicImage },
  { id: 5, title: "Manufacturing Processes", description: "Manufacturing and production environments.", image: electrochemicalImage },
];

export default function Gallery() {
  return (

    <main className="gallery-page">


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      {/* <nav className="gallery-navbar">
 <a to="/" className="site-logo">
      <img src={logo} alt="YARI Logo" />
    </a>
        <div className="gallery-nav-links">

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

          <a
            href="/gallery"
            className="active"
          >
            Gallery
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </nav> */}

      <Navbar/>


      {/* =====================================================
          GALLERY HERO
          ===================================================== */}

      <section className="gallery-hero">


        {/* =====================================================
            IMAGE SLIDER
            ===================================================== */}

        <div className="gallery-slider">

          {gallerySlides.map(
            (slide, index) => (

              <div
                className="gallery-slide"
                key={index}
              >

                <img
                  src={slide.image}
                  alt={`YARI engineering gallery ${
                    index + 1
                  }`}
                />

              </div>

            )
          )}

        </div>


        {/* =====================================================
            DARK OVERLAY
            ===================================================== */}

        <div className="gallery-overlay"></div>


        {/* =====================================================
            HERO CONTENT
            ===================================================== */}

        <div className="gallery-content">

          <p className="gallery-eyebrow">
            GALLERY
          </p>


          <h1>
            ENGINEERING, FABRICATION
            <br />
            &amp; MANUFACTURING
            <br />
            PORTFOLIO.
          </h1>


          <p className="gallery-description">
            This Page Is Designed As A Detailed Visual Portfolio.
            The Current Photographs Are Representative Placeholders
            And Should Be Replaced With Actual YARI Project Images.
          </p>

        </div>


        {/* =====================================================
            SLIDER DOTS
            ===================================================== */}

        <div className="gallery-slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </section>


      {/* =====================================================
          GALLERY CONTENT
          ===================================================== */}

      <section className="gallery-intro-section">

        <div className="gallery-intro-container">

          <p className="gallery-section-eyebrow">
            OUR GALLERY
          </p>


          <h2>
            Engineering, Fabrication &amp; Manufacturing
          </h2>


          <p>
            Explore selected engineering, fabrication and
            manufacturing applications across YARI's work.
          </p>

        </div>

      </section>


      {/* =====================================================
          STATIC GALLERY IMAGE SECTION
          ===================================================== */}

      <section className="gallery-images-section">
        <div className="gallery-images-container">
          {galleryImages.map((item, index) => (
            <div
              className={`gallery-image ${
                index < 5 ? `gallery-image-${index + 1}` : "gallery-image-extra"
              }`}
              key={item.id}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-image-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
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

            Partner With Quality Engineering Solutions
            For Reliable Industrial Marking Technologies
            That Deliver Precision, Durability,
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
      <Footer />

    </main>

  );

}
