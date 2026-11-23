
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
          <h3>YARI DESIGN &amp; MANUFACTURING SERVICES</h3>

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
       {/* QUICK LINKS */}
<div className="site-footer-column site-footer-links">
  <h3>QUICK LINKS</h3>

  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/industries">Industries</Link>
  <Link to="/products">Products</Link>
  <Link to="/solutions">Solutions</Link>
  <Link to="/Clients">Clients</Link>
  <Link to="/gallery">Gallery</Link>
  <Link to="/career">Careers</Link>
  <Link to="/contact">Contact</Link>
</div>

        {/* CONTACT */}
        <div className="site-footer-column site-footer-contact">
          <h3>PHONE</h3>

          <a
            href="tel:+917871000270"
            className="site-footer-email"
          >
            +91 78710 00270
          </a>

          <h3 className="site-footer-contact-title">EMAIL</h3>

          <a
            href="mailto:info@yaridms.in"
            className="site-footer-email"
          >
            info@yaridms.in
          </a>

          <h3 className="site-footer-contact-title">
            CONTACT US
          </h3>

         <p>
  <strong>Address 1:</strong>
  <br />
  No. 4/86, 3rd Cross Street, A.G.S. Colony,
  <br />
  Velachery, Chennai, Tamil Nadu - 600042.
  <br /><br />

  <strong>Address 2:</strong>
  <br />
  263/13, Kavarai St., Athipet,
  <br />
  Ambattur, Chennai-58.
</p>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/7871000270"
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

        <p>
          Developed by ASPL Tech Solutions Pvt Ltd Bangalore
        </p>
      </div>
    </footer>
  );
}
