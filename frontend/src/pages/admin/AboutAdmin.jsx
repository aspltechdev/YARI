import React from "react";
import "./AboutAdmin.css";

function AboutAdmin() {
  return (
    <div className="about-admin-page">

      {/* HEADER */}
      <div className="about-admin-header">
        <div>
          <span className="about-admin-label">
            YARI ADMINISTRATION
          </span>

          <h1>About Us</h1>

          <p>
            View the current About Us content of the website.
          </p>
        </div>
      </div>


      {/* COMPANY INTRODUCTION */}
      <div className="about-admin-card">

        <h2>Company Introduction</h2>

        <div className="about-admin-field">
          <label>Title</label>

          <div className="about-admin-static">
            About YARI
          </div>
        </div>

        <div className="about-admin-field">
          <label>Description</label>

          <div className="about-admin-static about-admin-text">
            YARI Design & Manufacturing Services is committed
            to providing reliable engineering and manufacturing
            solutions for our customers.
          </div>
        </div>

      </div>


      {/* WHO WE ARE */}
      <div className="about-admin-card">

        <h2>Who We Are</h2>

        <div className="about-admin-field">
          <label>Content</label>

          <div className="about-admin-static about-admin-text">
            YARI is a design and manufacturing service company
            focused on delivering quality engineering solutions,
            innovative products and dependable manufacturing
            services.
          </div>
        </div>

      </div>


      {/* OUR MISSION */}
      <div className="about-admin-card">

        <h2>Our Mission</h2>

        <div className="about-admin-field">
          <label>Mission</label>

          <div className="about-admin-static about-admin-text">
            To deliver high-quality engineering and manufacturing
            solutions while maintaining reliability, innovation,
            customer satisfaction and continuous improvement.
          </div>
        </div>

      </div>


      {/* OUR VISION */}
      <div className="about-admin-card">

        <h2>Our Vision</h2>

        <div className="about-admin-field">
          <label>Vision</label>

          <div className="about-admin-static about-admin-text">
            To become a trusted engineering and manufacturing
            partner by providing innovative, efficient and
            dependable solutions to industries worldwide.
          </div>
        </div>

      </div>


      {/* CORE VALUES */}
      <div className="about-admin-card">

        <h2>Our Values</h2>

        <div className="about-admin-values">

          <div className="about-admin-value">
            <strong>Quality</strong>
            <span>
              Maintaining high standards in every project.
            </span>
          </div>

          <div className="about-admin-value">
            <strong>Innovation</strong>
            <span>
              Continuously improving products and processes.
            </span>
          </div>

          <div className="about-admin-value">
            <strong>Reliability</strong>
            <span>
              Delivering dependable solutions to customers.
            </span>
          </div>

          <div className="about-admin-value">
            <strong>Customer Focus</strong>
            <span>
              Understanding and meeting customer requirements.
            </span>
          </div>

        </div>

      </div>


      {/* STATUS */}
      <div className="about-admin-status">

        <span className="about-admin-status-dot"></span>

        <span>
          About Us content is currently static.
        </span>

      </div>

    </div>
  );
}

export default AboutAdmin;
