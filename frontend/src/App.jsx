import { Routes, Route, Navigate } from "react-router-dom";

/* =========================================================
   PUBLIC PAGES
   ========================================================= */

import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/* =========================================================
   ADMIN PAGES
   ========================================================= */

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HomeAdmin from "./pages/admin/HomeAdmin";
import AboutAdmin from "./pages/admin/AboutAdmin";
import IndustriesAdmin from "./pages/admin/IndustriesAdmin";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import ContactAdmin from "./pages/admin/ContactAdmin";

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <Routes>

      {/* ===================================================
          PUBLIC WEBSITE
          =================================================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/industries"
        element={<Industries />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />


      {/* ===================================================
          ADMIN LOGIN
          =================================================== */}

      <Route
        path="/admin"
        element={
          <Navigate
            to="/admin/login"
            replace
          />
        }
      />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />


      {/* ===================================================
          ADMIN DASHBOARD
          =================================================== */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />


      {/* ===================================================
          ADMIN HOME
          =================================================== */}

      <Route
        path="/admin/home"
        element={<HomeAdmin />}
      />


      {/* ===================================================
          ADMIN ABOUT US
          =================================================== */}

      <Route
        path="/admin/about"
        element={<AboutAdmin />}
      />


      {/* ===================================================
          ADMIN INDUSTRIES
          =================================================== */}

      <Route
        path="/admin/industries"
        element={<IndustriesAdmin />}
      />


      {/* ===================================================
          ADMIN PRODUCTS
          =================================================== */}

      <Route
        path="/admin/products"
        element={<ProductsAdmin />}
      />


      {/* ===================================================
          ADMIN GALLERY
          =================================================== */}

      <Route
        path="/admin/gallery"
        element={<GalleryAdmin />}
      />


      {/* ===================================================
          ADMIN CONTACT
          =================================================== */}

      <Route
        path="/admin/contact"
        element={<ContactAdmin />}
      />


      {/* ===================================================
          UNKNOWN URL
          =================================================== */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;