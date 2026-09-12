import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ProductsAdmin.css";


/* =========================================================
   API
   ========================================================= */

const API_URL = "http://localhost:5000";


/* =========================================================
   PRODUCTS ADMIN
   ========================================================= */

function ProductsAdmin() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);


  /* =========================================================
     FORM DATA
     ========================================================= */

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    features: "",
    sort_order: 0,
    is_active: true,
  });


  /* =========================================================
     IMAGE
     ========================================================= */

  const [imageFile, setImageFile] = useState(null);

  const [imagePreview, setImagePreview] = useState("");


  /* =========================================================
     MESSAGES
     ========================================================= */

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  /* =========================================================
     CHECK LOGIN + LOAD PRODUCTS
     ========================================================= */

  useEffect(() => {
    const token = localStorage.getItem(
      "yari_admin_token"
    );

    if (!token) {
      navigate("/admin/login", {
        replace: true,
      });

      return;
    }

    fetchProducts(token);
  }, [navigate]);


  /* =========================================================
     GET TOKEN
     ========================================================= */

  const getToken = () => {
    return localStorage.getItem(
      "yari_admin_token"
    );
  };


  /* =========================================================
     IMAGE URL
     ========================================================= */

  const getImageUrl = (image) => {
    if (!image) {
      return "";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("blob:")
    ) {
      return image;
    }

    if (image.startsWith("/")) {
      return `${API_URL}${image}`;
    }

    return `${API_URL}/${image}`;
  };


  /* =========================================================
     FETCH ALL PRODUCTS
     ========================================================= */

  const fetchProducts = async (
    token = getToken()
  ) => {
    try {
      setLoading(true);

      setError("");

      const response = await fetch(
        `${API_URL}/api/products/admin/all`,
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to load products."
        );
      }

      setProducts(
        Array.isArray(data.data)
          ? data.data
          : []
      );

    } catch (err) {
      console.error(
        "Fetch products error:",
        err
      );

      setError(
        err.message ||
          "Unable to load products."
      );

    } finally {
      setLoading(false);
    }
  };


  /* =========================================================
     CREATE SLUG
     ========================================================= */

  const createSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };


  /* =========================================================
     RESET FORM
     ========================================================= */

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      features: "",
      sort_order: 0,
      is_active: true,
    });

    setImageFile(null);

    setImagePreview("");

    setEditingId(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  /* =========================================================
     OPEN ADD FORM
     ========================================================= */

  const openAddForm = () => {
    setError("");

    setSuccess("");

    resetForm();

    setShowForm(true);
  };


  /* =========================================================
     OPEN EDIT FORM
     ========================================================= */

  const openEditForm = (product) => {
    setError("");

    setSuccess("");


    /* ---------------------------------------------
       CONVERT FEATURES ARRAY TO TEXT
       --------------------------------------------- */

    const features = Array.isArray(
      product.features
    )
      ? product.features.join("\n")
      : "";


    setFormData({
      title: product.title || "",

      slug: product.slug || "",

      description:
        product.description || "",

      features,

      sort_order:
        product.sort_order ?? 0,

      is_active:
        product.is_active !== false,
    });


    setEditingId(product.id);

    setImageFile(null);


    /* ---------------------------------------------
       SHOW EXISTING IMAGE
       --------------------------------------------- */

    if (product.image) {
      setImagePreview(
        getImageUrl(product.image)
      );
    } else {
      setImagePreview("");
    }


    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }


    setShowForm(true);
  };


  /* =========================================================
     CLOSE FORM
     ========================================================= */

  const closeForm = () => {
    setShowForm(false);

    resetForm();
  };


  /* =========================================================
     HANDLE FORM CHANGE
     ========================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };


  /* =========================================================
     HANDLE TITLE CHANGE
     ========================================================= */

  const handleTitleChange = (event) => {
    const title =
      event.target.value;

    setFormData((previous) => ({
      ...previous,

      title,

      slug:
        editingId !== null
          ? previous.slug
          : createSlug(title),
    }));
  };


  /* =========================================================
     HANDLE IMAGE CHANGE
     ========================================================= */

  const handleImageChange = (
    event
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }


    /* ---------------------------------------------
       CHECK IMAGE TYPE
       --------------------------------------------- */

    if (!file.type.startsWith("image/")) {
      setError(
        "Please select an image file."
      );

      return;
    }


    /* ---------------------------------------------
       CHECK FILE SIZE
       --------------------------------------------- */

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setError(
        "Image must be smaller than 5 MB."
      );

      return;
    }


    setError("");

    setImageFile(file);


    /* ---------------------------------------------
       CREATE PREVIEW
       --------------------------------------------- */

    const previewUrl =
      URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };


  /* =========================================================
     SUBMIT PRODUCT
     ========================================================= */

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setError("");

    setSuccess("");


    /* ---------------------------------------------
       VALIDATION
       --------------------------------------------- */

    if (!formData.title.trim()) {
      setError(
        "Please enter a product title."
      );

      return;
    }


    if (!formData.slug.trim()) {
      setError(
        "Please enter a slug."
      );

      return;
    }


    if (
      !formData.description.trim()
    ) {
      setError(
        "Please enter a product description."
      );

      return;
    }


    try {
      setSaving(true);


      const token = getToken();


      /* ---------------------------------------------
         FORM DATA
         --------------------------------------------- */

      const data = new FormData();


      data.append(
        "title",
        formData.title.trim()
      );


      data.append(
        "slug",
        formData.slug.trim()
      );


      data.append(
        "description",
        formData.description.trim()
      );


      data.append(
        "sort_order",
        String(
          Number(
            formData.sort_order
          ) || 0
        )
      );


      data.append(
        "is_active",
        String(
          formData.is_active
        )
      );


      /* ---------------------------------------------
         FEATURES
         --------------------------------------------- */

      const featureList =
        formData.features
          .split("\n")
          .map((item) =>
            item.trim()
          )
          .filter(Boolean);


      data.append(
        "features",
        JSON.stringify(
          featureList
        )
      );


      /* ---------------------------------------------
         IMAGE
         --------------------------------------------- */

      if (imageFile) {
        data.append(
          "image",
          imageFile
        );
      }


      /* ---------------------------------------------
         URL + METHOD
         --------------------------------------------- */

      const url = editingId
        ? `${API_URL}/api/products/${editingId}`
        : `${API_URL}/api/products`;


      const method = editingId
        ? "PUT"
        : "POST";


      /* ---------------------------------------------
         REQUEST
         --------------------------------------------- */

      const response = await fetch(
        url,
        {
          method,

          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: data,
        }
      );


      const result =
        await response.json();


      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Unable to save product."
        );
      }


      /* ---------------------------------------------
         SUCCESS
         --------------------------------------------- */

      setSuccess(
        editingId
          ? "Product updated successfully."
          : "Product added successfully."
      );


      setShowForm(false);

      resetForm();


      await fetchProducts(token);

    } catch (err) {
      console.error(
        "Save product error:",
        err
      );

      setError(
        err.message ||
          "Unable to save product."
      );

    } finally {
      setSaving(false);
    }
  };


  /* =========================================================
     DELETE PRODUCT
     ========================================================= */

  const handleDelete = async (
    product
  ) => {
    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${product.title}"?`
      );


    if (!confirmed) {
      return;
    }


    try {
      setError("");

      setSuccess("");


      const token = getToken();


      const response =
        await fetch(
          `${API_URL}/api/products/${product.id}`,
          {
            method: "DELETE",

            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


      const result =
        await response.json();


      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Unable to delete product."
        );
      }


      setSuccess(
        "Product deleted successfully."
      );


      await fetchProducts(token);

    } catch (err) {
      console.error(
        "Delete product error:",
        err
      );

      setError(
        err.message ||
          "Unable to delete product."
      );
    }
  };


  /* =========================================================
     BACK TO DASHBOARD
     ========================================================= */

  const handleBack = () => {
    navigate(
      "/admin/dashboard"
    );
  };


  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div className="products-admin">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="products-admin-header">

        <div className="products-admin-header-left">

          <button
            type="button"
            className="products-back-button"
            onClick={handleBack}
          >
            ← Dashboard
          </button>


          <div>

            <span className="products-eyebrow">
              CONTENT MANAGEMENT
            </span>


            <h1>
              Products
            </h1>


            <p>
              Manage the products displayed
              on the YARI website.
            </p>

          </div>

        </div>


        <button
          type="button"
          className="products-add-button"
          onClick={openAddForm}
        >
          + Add Product
        </button>

      </header>


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="products-admin-content">


        {/* ===================================================
            SUCCESS MESSAGE
            =================================================== */}

        {success && (
          <div className="products-alert products-alert-success">
            {success}
          </div>
        )}


        {/* ===================================================
            ERROR MESSAGE
            =================================================== */}

        {error && (
          <div className="products-alert products-alert-error">
            {error}
          </div>
        )}


        {/* ===================================================
            ADD / EDIT FORM
            =================================================== */}

        {showForm && (

          <section className="product-form-card">


            {/* FORM HEADER */}

            <div className="product-form-header">

              <div>

                <span className="products-eyebrow">

                  {editingId
                    ? "EDIT PRODUCT"
                    : "NEW PRODUCT"}

                </span>


                <h2>

                  {editingId
                    ? "Edit Product"
                    : "Add New Product"}

                </h2>

              </div>


              <button
                type="button"
                className="product-close-button"
                onClick={closeForm}
              >
                ×
              </button>

            </div>


            {/* FORM */}

            <form
              onSubmit={handleSubmit}
            >

              <div className="product-form-grid">


                {/* PRODUCT TITLE */}

                <div className="product-form-field">

                  <label htmlFor="product-title">
                    Product Title
                  </label>


                  <input
                    id="product-title"
                    name="title"
                    type="text"
                    value={
                      formData.title
                    }
                    onChange={
                      handleTitleChange
                    }
                    placeholder="e.g. CNC Machined Metal Parts"
                  />

                </div>


                {/* SLUG */}

                <div className="product-form-field">

                  <label htmlFor="product-slug">
                    Slug
                  </label>


                  <input
                    id="product-slug"
                    name="slug"
                    type="text"
                    value={
                      formData.slug
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="cnc-machined-metal-parts"
                  />

                </div>


                {/* DESCRIPTION */}

                <div className="product-form-field product-form-field-full">

                  <label htmlFor="product-description">
                    Description
                  </label>


                  <textarea
                    id="product-description"
                    name="description"
                    value={
                      formData.description
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter the product description..."
                    rows="5"
                  />

                </div>


                {/* FEATURES */}

                <div className="product-form-field">

                  <label htmlFor="product-features">
                    Features
                  </label>


                  <textarea
                    id="product-features"
                    name="features"
                    value={
                      formData.features
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="One feature per line"
                    rows="6"
                  />


                  <small>
                    Enter one feature
                    on each line.
                  </small>

                </div>


                {/* ORDER + STATUS */}

                <div className="product-form-field">

                  <label htmlFor="product-order">
                    Display Order
                  </label>


                  <input
                    id="product-order"
                    name="sort_order"
                    type="number"
                    min="0"
                    value={
                      formData.sort_order
                    }
                    onChange={
                      handleChange
                    }
                  />


                  <label className="product-checkbox-label">

                    <input
                      type="checkbox"
                      name="is_active"
                      checked={
                        formData.is_active
                      }
                      onChange={
                        handleChange
                      }
                    />


                    <span>
                      Show this product
                      on website
                    </span>

                  </label>

                </div>


                {/* IMAGE UPLOAD */}

                <div className="product-form-field product-form-field-full">

                  <label>
                    Product Image
                  </label>


                  <div className="product-upload-area">

                    <input
                      ref={fileInputRef}
                      id="product-image"
                      type="file"
                      accept="image/*"
                      onChange={
                        handleImageChange
                      }
                    />


                    <label
                      htmlFor="product-image"
                      className="product-upload-button"
                    >
                      Choose Image
                    </label>


                    <p>
                      Upload JPG, PNG,
                      WEBP or another
                      image file.
                      Maximum 5 MB.
                    </p>

                  </div>


                  {/* IMAGE PREVIEW */}

                  {imagePreview && (

                    <div className="product-image-preview">

                      <img
                        src={
                          imagePreview
                        }
                        alt="Product preview"
                      />

                    </div>

                  )}

                </div>

              </div>


              {/* FORM ACTIONS */}

              <div className="product-form-actions">

                <button
                  type="button"
                  className="product-cancel-button"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="product-save-button"
                  disabled={saving}
                >

                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Product"
                    : "Save Product"}

                </button>

              </div>

            </form>

          </section>

        )}


        {/* ===================================================
            PRODUCT LIST
            =================================================== */}

        <section className="products-list-section">


          {/* LIST HEADER */}

          <div className="products-list-header">

            <div>

              <span className="products-eyebrow">
                CURRENT CONTENT
              </span>


              <h2>
                All Products
              </h2>

            </div>


            <span className="products-count">

              {products.length} products

            </span>

          </div>


          {/* LOADING */}

          {loading ? (

            <div className="products-empty-state">

              <div className="products-loading">
                Loading products...
              </div>

            </div>

          ) : products.length === 0 ? (

            /* NO PRODUCTS */

            <div className="products-empty-state">

              <h3>
                No products found
              </h3>


              <p>
                Add your first product
                using the button above.
              </p>

            </div>

          ) : (

            /* PRODUCT TABLE */

            <div className="products-table-wrapper">

              <table className="products-table">

                <thead>

                  <tr>

                    <th>
                      Image
                    </th>

                    <th>
                      Product
                    </th>

                    <th>
                      Slug
                    </th>

                    <th>
                      Order
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {products.map(
                    (product) => (

                      <tr
                        key={
                          product.id
                        }
                      >


                        {/* IMAGE */}

                        <td>

                          <div className="product-table-image">

                            {product.image ? (

                              <img
                                src={getImageUrl(
                                  product.image
                                )}
                                alt={
                                  product.title
                                }
                              />

                            ) : (

                              <span>
                                No image
                              </span>

                            )}

                          </div>

                        </td>


                        {/* PRODUCT */}

                        <td>

                          <div className="product-table-title">

                            <strong>
                              {product.title}
                            </strong>


                            <span>

                              {product.description
                                ? product.description.slice(
                                    0,
                                    90
                                  ) +
                                  (
                                    product
                                      .description
                                      .length >
                                    90
                                      ? "..."
                                      : ""
                                  )
                                : "No description"}

                            </span>

                          </div>

                        </td>


                        {/* SLUG */}

                        <td>

                          <code>
                            {product.slug}
                          </code>

                        </td>


                        {/* ORDER */}

                        <td>
                          {product.sort_order}
                        </td>


                        {/* STATUS */}

                        <td>

                          <span
                            className={
                              product.is_active
                                ? "product-status active"
                                : "product-status inactive"
                            }
                          >

                            {product.is_active
                              ? "Active"
                              : "Hidden"}

                          </span>

                        </td>


                        {/* ACTIONS */}

                        <td>

                          <div className="product-table-actions">

                            <button
                              type="button"
                              className="product-edit-button"
                              onClick={() =>
                                openEditForm(
                                  product
                                )
                              }
                            >
                              Edit
                            </button>


                            <button
                              type="button"
                              className="product-delete-button"
                              onClick={() =>
                                handleDelete(
                                  product
                                )
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}


export default ProductsAdmin;