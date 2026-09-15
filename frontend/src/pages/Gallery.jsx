import { useEffect, useState } from "react";

import "./Gallery.css";

import Footer from "../components/Footer.jsx";


/* =====================================================
   API
   ===================================================== */

const API_URL = "http://localhost:5000";


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

export default function Gallery() {

  const [galleryImages, setGalleryImages] =
    useState([]);

  const [galleryLoading, setGalleryLoading] =
    useState(true);


  /* =====================================================
     FETCH GALLERY FROM DATABASE
     ===================================================== */

  useEffect(() => {

    const fetchGallery = async () => {

      try {

        const response = await fetch(
          `${API_URL}/api/gallery`
        );


        const result =
          await response.json();
          console.log("GALLERY API RESULT:", result);

          console.log(
  "GALLERY ITEMS:",
  result.data.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
  }))
);


        if (
          !response.ok ||
          !result.success
        ) {

          throw new Error(
            result.message ||
            "Failed to load gallery."
          );

        }


        setGalleryImages(
          Array.isArray(result.data)
            ? result.data
            : []
        );

      } catch (error) {

        console.error(
          "Gallery loading error:",
          error
        );

        setGalleryImages([]);

      } finally {

        setGalleryLoading(false);

      }

    };


    fetchGallery();

  }, []);


  /* =====================================================
     IMAGE URL
     ===================================================== */

  const getImageUrl = (image) => {

    if (!image) {
      return "";
    }


    /* External image URL */

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {

      return image;

    }


    /* Local backend image */

    if (image.startsWith("/")) {

      return `${API_URL}${image}`;

    }


    return `${API_URL}/${image}`;

  };


  return (

    <main className="gallery-page">


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="gallery-navbar">

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

      </nav>


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
          DATABASE GALLERY IMAGE SECTION
          ===================================================== */}

      <section className="gallery-images-section">

        <div className="gallery-images-container">


          {/* =================================================
              LOADING
              ================================================= */}

          {galleryLoading && (

            <div className="gallery-loading-message">

              <p>
                Loading gallery...
              </p>

            </div>

          )}


          {/* =================================================
              NO IMAGES
              ================================================= */}

          {!galleryLoading &&
            galleryImages.length === 0 && (

              <div className="gallery-empty-message">

                <p>
                  Gallery images will be displayed here.
                </p>

              </div>

            )}


          {/* =================================================
              DATABASE IMAGES
              ================================================= */}

          {!galleryLoading &&
            galleryImages.length > 0 && (

              galleryImages.map(
                (item, index) => (

                  <div
                   className={`gallery-image ${
  index < 5
    ? `gallery-image-${index + 1}`
    : "gallery-image-extra"
}`}
                    key={item.id}
                  >

                    <img
                      src={getImageUrl(
                        item.image
                      )}
                      alt={
                        item.title ||
                        "YARI engineering gallery"
                      }
                    />


                    {/* IMAGE INFORMATION */}

                    {(item.title ||
                      item.description) && (

                      <div className="gallery-image-caption">

                        {item.title && (

                          <h3>
                            {item.title}
                          </h3>

                        )}


                        {item.description && (

                          <p>
                            {item.description}
                          </p>

                        )}

                      </div>

                    )}

                  </div>

                )
              )

            )}

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