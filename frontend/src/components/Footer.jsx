import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
   FaWhatsapp,
  FaAngleDoubleUp,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-main">

        {/* COMPANY */}

        <div className="site-footer-column site-footer-company">
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

          <div className="site-footer-socials">
            <a
              href="#"
              aria-label="Instagram"
              onClick={(event) => event.preventDefault()}
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              onClick={(event) => event.preventDefault()}
            >
              <FaFacebookF size={16} />
            </a>

          
             <a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedinIn size={16} />
</a>
          </div>
        </div>


        {/* QUICK LINKS */}

        <div className="site-footer-column site-footer-links">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>


        {/* CONTACT */}

        <div className="site-footer-column site-footer-contact">
          <h3>EMAIL</h3>

          <a
            href="mailto:yari.innovative@gmail.com"
            className="site-footer-email"
          >
            yari.innovative@gmail.com
          </a>

          <h3 className="site-footer-contact-title">
            CONTACT US
          </h3>

          <p>
            No. 4/86, 3rd Cross Street, A.G.S. Colony,
            <br />
            Velachery, Chennai, Tamil Nadu - 600042.
          </p>
        </div>

<a
  href="https://wa.me/917871000270"
  target="_blank"
  rel="noopener noreferrer"
  className="site-footer-whatsapp"
  aria-label="Chat with us on WhatsApp"
>
  <FaWhatsapp size={25} />
</a>
        {/* BACK TO TOP */}

        <button
          type="button"
          className="site-footer-back-top"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <FaAngleDoubleUp size={21} />
        </button>
      </div>


      {/* COPYRIGHT */}

      <div className="site-footer-bottom">
        <p>
          © 2026 YARI Design &amp; Manufacturing Services.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
