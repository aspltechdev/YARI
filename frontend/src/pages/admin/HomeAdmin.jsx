import React, { useEffect, useState } from "react";
import "./HomeAdmin.css";

const API_URL = "https://yari-backend.vercel.app";

function HomeAdmin() {
  const [homeData, setHomeData] = useState({
    hero_title: "",
    hero_subtitle: "",
    hero_description: "",
    glance_title: "",
    glance_description: "",
    why_title: "",
    why_description: "",
    cta_title: "",
    cta_description: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/home`);

      if (!response.ok) {
        throw new Error("Failed to fetch home data");
      }

      const data = await response.json();

      console.log("HOME DATA:", data);

      // Handles either:
      // { success: true, data: {...} }
      // or
      // { success: true, home: {...} }
      // or direct object
      const home = data.data || data.home || data;

      setHomeData({
        hero_title: home.hero_title || "",
        hero_subtitle: home.hero_subtitle || "",
        hero_description: home.hero_description || "",
        glance_title: home.glance_title || "",
        glance_description: home.glance_description || "",
        why_title: home.why_title || "",
        why_description: home.why_description || "",
        cta_title: home.cta_title || "",
        cta_description: home.cta_description || "",
      });
    } catch (error) {
      console.error("Error loading home data:", error);
      setMessage("Failed to load Home content.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHomeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/home`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(homeData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update Home content");
      }

      setMessage("Home content updated successfully.");

      await fetchHomeData();
    } catch (error) {
      console.error("Error updating home:", error);
      setMessage(error.message || "Failed to update Home content.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="home-admin-page">
        <div className="home-admin-loading">
          Loading Home content...
        </div>
      </div>
    );
  }

  return (
    <div className="home-admin-page">
      <div className="home-admin-header">
        <div>
          <h1>Home Management</h1>
          <p>
            Manage the text content displayed on the Home page.
          </p>
        </div>
      </div>

      {message && (
        <div
          className={`home-admin-message ${
            message.includes("successfully")
              ? "success"
              : "error"
          }`}
        >
          {message}
        </div>
      )}

      <form
        className="home-admin-form"
        onSubmit={handleSubmit}
      >
        {/* HERO SECTION */}

        <div className="home-admin-card">
          <h2>Hero Section</h2>

          <div className="home-admin-field">
            <label>Hero Title</label>

            <input
              type="text"
              name="hero_title"
              value={homeData.hero_title}
              onChange={handleChange}
              placeholder="Enter hero title"
            />
          </div>

          <div className="home-admin-field">
            <label>Hero Subtitle</label>

            <input
              type="text"
              name="hero_subtitle"
              value={homeData.hero_subtitle}
              onChange={handleChange}
              placeholder="Enter hero subtitle"
            />
          </div>

          <div className="home-admin-field">
            <label>Hero Description</label>

            <textarea
              name="hero_description"
              value={homeData.hero_description}
              onChange={handleChange}
              placeholder="Enter hero description"
              rows="5"
            />
          </div>
        </div>

        {/* AT A GLANCE */}

        <div className="home-admin-card">
          <h2>At a Glance</h2>

          <div className="home-admin-field">
            <label>Title</label>

            <input
              type="text"
              name="glance_title"
              value={homeData.glance_title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>

          <div className="home-admin-field">
            <label>Description</label>

            <textarea
              name="glance_description"
              value={homeData.glance_description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="6"
            />
          </div>
        </div>

        {/* WHY YARI */}

        <div className="home-admin-card">
          <h2>Why YARI</h2>

          <div className="home-admin-field">
            <label>Title</label>

            <input
              type="text"
              name="why_title"
              value={homeData.why_title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>

          <div className="home-admin-field">
            <label>Description</label>

            <textarea
              name="why_description"
              value={homeData.why_description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="6"
            />
          </div>
        </div>

        {/* CTA */}

        <div className="home-admin-card">
          <h2>Call To Action</h2>

          <div className="home-admin-field">
            <label>CTA Title</label>

            <input
              type="text"
              name="cta_title"
              value={homeData.cta_title}
              onChange={handleChange}
              placeholder="Enter CTA title"
            />
          </div>

          <div className="home-admin-field">
            <label>CTA Description</label>

            <textarea
              name="cta_description"
              value={homeData.cta_description}
              onChange={handleChange}
              placeholder="Enter CTA description"
              rows="5"
            />
          </div>
        </div>

        {/* SAVE */}

        <div className="home-admin-actions">
          <button
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Home Content"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeAdmin;
