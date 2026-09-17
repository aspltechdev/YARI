import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState(null);

  const [stats, setStats] = useState({
    industries: 0,
    products: 0,
    gallery: 0,
  });

  const [loading, setLoading] = useState(true);

  /* =========================================================
     CHECK ADMIN LOGIN
     ========================================================= */

  useEffect(() => {
    const token = localStorage.getItem("yari_admin_token");
    const storedUser = localStorage.getItem("yari_admin_user");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Unable to read admin user:", error);
      }
    }

    loadDashboardData(token);
  }, [navigate]);


  /* =========================================================
     LOAD DASHBOARD DATA
     ========================================================= */

  const loadDashboardData = async (token) => {
    try {
      setLoading(true);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const [industriesResponse, productsResponse, galleryResponse] =
        await Promise.all([
          fetch("http://localhost:5000/api/industries", {
            headers,
          }),

          fetch("http://localhost:5000/api/products", {
            headers,
          }),

          fetch("http://localhost:5000/api/gallery", {
            headers,
          }),
        ]);

      const industriesData = await industriesResponse.json();
      const productsData = await productsResponse.json();
      const galleryData = await galleryResponse.json();

      setStats({
        industries:
          industriesData.success && Array.isArray(industriesData.data)
            ? industriesData.data.length
            : 0,

        products:
          productsData.success && Array.isArray(productsData.data)
            ? productsData.data.length
            : 0,

        gallery:
          galleryData.success && Array.isArray(galleryData.data)
            ? galleryData.data.length
            : 0,
      });
    } catch (error) {
      console.error("Dashboard data error:", error);
    } finally {
      setLoading(false);
    }
  };


  /* =========================================================
     LOGOUT
     ========================================================= */

  const handleLogout = () => {
    localStorage.removeItem("yari_admin_token");
    localStorage.removeItem("yari_admin_user");

    navigate("/admin/login", { replace: true });
  };


  /* =========================================================
     NAVIGATION
     ========================================================= */
const openSection = (section) => {

  if (section === "Industries") {
    navigate("/admin/industries");
    return;
  }

  if (section === "Products") {
    navigate("/admin/products");
    return;
  }

  if (section === "Gallery") {
    navigate("/admin/gallery");
    return;
  }

  if (section === "Contact") {
    navigate("/admin/contact");
    return;
  }


  alert(`${section} management will be connected next.`);
};

  /* =========================================================
     DASHBOARD
     ========================================================= */

  return (
    <div className="admin-dashboard">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside className="admin-sidebar">

        <div className="admin-sidebar-brand">

          <div className="admin-sidebar-logo">
            YARI
          </div>

          <div className="admin-sidebar-brand-text">
            <strong>YARI</strong>
            <span>ADMIN PANEL</span>
          </div>

        </div>


        <nav className="admin-sidebar-nav">

          <button
            type="button"
            className="admin-nav-item active"
          >
            <span className="admin-nav-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button
            type="button"
            className="admin-nav-item"
            onClick={() => openSection("Industries")}
          >
            <span className="admin-nav-icon">I</span>
            <span>Industries</span>
          </button>


          <button
            type="button"
            className="admin-nav-item"
            onClick={() => openSection("Products")}
          >
            <span className="admin-nav-icon">P</span>
            <span>Products</span>
          </button>


          <button
            type="button"
            className="admin-nav-item"
            onClick={() => openSection("Gallery")}
          >
            <span className="admin-nav-icon">G</span>
            <span>Gallery</span>
          </button>


          <button
            type="button"
            className="admin-nav-item"
            onClick={() => openSection("Contact")}
          >
            <span className="admin-nav-icon">C</span>
            <span>Contact</span>
          </button>


        </nav>


        <div className="admin-sidebar-bottom">

          <button
            type="button"
            className="admin-nav-item admin-logout-button"
            onClick={handleLogout}
          >
            <span className="admin-nav-icon">↪</span>
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="admin-main">

        {/* ===================================================
            TOP BAR
            =================================================== */}

        <header className="admin-topbar">

          <div className="admin-topbar-left">

            <span className="admin-topbar-eyebrow">
              YARI ADMINISTRATION
            </span>

            <h1>
              Dashboard
            </h1>

          </div>


          <div className="admin-topbar-right">

            <div className="admin-user">

              <div className="admin-user-avatar">
                {(adminUser?.email || "A")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div className="admin-user-info">

                <strong>
                  Administrator
                </strong>

                <span>
                  {adminUser?.email || "admin@yari.com"}
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* ===================================================
            CONTENT
            =================================================== */}

        <div className="admin-content">

          <div className="admin-welcome">

            <div>

              <span className="admin-section-label">
                OVERVIEW
              </span>

              <h2>
                Welcome to your admin panel.
              </h2>

              <p>
                Manage your YARI website content, products,
                industries, gallery and contact information
                from one place.
              </p>

            </div>

          </div>


          {/* =================================================
              STATISTICS
              ================================================= */}

          <section className="admin-stats-grid">

            <div className="admin-stat-card">

              <div className="admin-stat-top">

                <span className="admin-stat-label">
                  INDUSTRIES
                </span>

                <span className="admin-stat-icon">
                  I
                </span>

              </div>

              <strong className="admin-stat-number">
                {loading ? "—" : stats.industries}
              </strong>

              <span className="admin-stat-description">
                Active industries
              </span>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-top">

                <span className="admin-stat-label">
                  PRODUCTS
                </span>

                <span className="admin-stat-icon">
                  P
                </span>

              </div>

              <strong className="admin-stat-number">
                {loading ? "—" : stats.products}
              </strong>

              <span className="admin-stat-description">
                Active products
              </span>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-top">

                <span className="admin-stat-label">
                  GALLERY
                </span>

                <span className="admin-stat-icon">
                  G
                </span>

              </div>

              <strong className="admin-stat-number">
                {loading ? "—" : stats.gallery}
              </strong>

              <span className="admin-stat-description">
                Gallery images
              </span>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-top">

                <span className="admin-stat-label">
                  WEBSITE
                </span>

                <span className="admin-stat-icon">
                  ✓
                </span>

              </div>

              <strong className="admin-stat-number">
                LIVE
              </strong>

              <span className="admin-stat-description">
                Backend connected
              </span>

            </div>

          </section>

          {/* =================================================
              QUICK INFORMATION
              ================================================= */}

          <section className="admin-info-section">

            <div className="admin-info-card">

              <span className="admin-section-label">
                SYSTEM STATUS
              </span>

              <h2>
                YARI Website Administration
              </h2>

              <p>
                Your admin login is connected to the
                PostgreSQL database through the YARI backend.
              </p>

              <div className="admin-status-row">

                <span className="admin-status-dot"></span>

                <span>
                  Admin authentication active
                </span>

              </div>

            </div>


            <div className="admin-info-card">

              <span className="admin-section-label">
                WEBSITE
              </span>

              <h2>
                View YARI Website
              </h2>

              <p>
                Open the public YARI website in a new tab
                to review your changes.
              </p>

              <button
                type="button"
                className="admin-website-button"
                onClick={() =>
                  window.open(
                    "http://localhost:5173/",
                    "_blank"
                  )
                }
              >
                Open Website →
              </button>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;