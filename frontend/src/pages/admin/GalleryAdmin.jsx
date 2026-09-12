import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./GalleryAdmin.css";


const API_URL = "http://localhost:5000";


function GalleryAdmin() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [gallery, setGallery] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sort_order: 0,
    is_active: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  /* =========================================================
     AUTH CHECK
     ========================================================= */

  useEffect(() => {
    const token = localStorage.getItem("yari_admin_token");

    if (!token) {
      navigate("/admin/login", {
        replace: true,
      });

      return;
    }

    fetchGallery(token);
  }, [navigate]);


  /* =========================================================
     GET TOKEN
     ========================================================= */

  const getToken = () => {
    return localStorage.getItem("yari_admin_token");
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
     FETCH GALLERY
     ========================================================= */

  const fetchGallery = async (token = getToken()) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/gallery/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to load gallery."
        );
      }

      setGallery(
        Array.isArray(data.data)
          ? data.data
          : []
      );
    } catch (err) {
      console.error(
        "Fetch gallery error:",
        err
      );

      setError(
        err.message ||
          "Unable to load gallery."
      );
    } finally {
      setLoading(false);
    }
  };


  /* =========================================================
     RESET FORM
     ========================================================= */

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
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

  const openEditForm = (item) => {
    setError("");
    setSuccess("");

    setFormData({
      title: item.title || "",
      description: item.description || "",
      sort_order: item.sort_order ?? 0,
      is_active: item.is_active !== false,
    });

    setEditingId(item.id);

    setImageFile(null);

    if (item.image) {
      setImagePreview(
        getImageUrl(item.image)
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
     IMAGE CHANGE
     ========================================================= */

  const handleImageChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError(
        "Please select an image file."
      );

      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError(
        "Image must be smaller than 5 MB."
      );

      return;
    }

    setError("");

    setImageFile(file);

    const previewUrl =
      URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };


  /* =========================================================
     SUBMIT FORM
     ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");


    /* ---------------------------------------------
       VALIDATION
       --------------------------------------------- */

    if (
      !formData.title.trim()
    ) {
      setError(
        "Please enter a gallery title."
      );

      return;
    }


    /* ---------------------------------------------
       EDIT REQUIRES NO NEW IMAGE
       ADD REQUIRES IMAGE
       --------------------------------------------- */

    if (
      !editingId &&
      !imageFile
    ) {
      setError(
        "Please choose a gallery image."
      );

      return;
    }


    try {
      setSaving(true);

      const token = getToken();

      const data = new FormData();

      data.append(
        "title",
        formData.title.trim()
      );

      data.append(
        "description",
        formData.description.trim()
      );

      data.append(
        "sort_order",
        String(
          Number(formData.sort_order) || 0
        )
      );

      data.append(
        "is_active",
        String(formData.is_active)
      );


      if (imageFile) {
        data.append(
          "image",
          imageFile
        );
      }


      const url = editingId
        ? `${API_URL}/api/gallery/${editingId}`
        : `${API_URL}/api/gallery`;

      const method = editingId
        ? "PUT"
        : "POST";


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
            "Unable to save gallery image."
        );
      }


      setSuccess(
        editingId
          ? "Gallery image updated successfully."
          : "Gallery image added successfully."
      );


      setShowForm(false);

      resetForm();

      await fetchGallery(token);
    } catch (err) {
      console.error(
        "Save gallery error:",
        err
      );

      setError(
        err.message ||
          "Unable to save gallery image."
      );
    } finally {
      setSaving(false);
    }
  };


  /* =========================================================
     DELETE GALLERY IMAGE
     ========================================================= */

  const handleDelete = async (item) => {
    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${item.title || "this image"}"?`
      );

    if (!confirmed) {
      return;
    }


    try {
      setError("");
      setSuccess("");

      const token = getToken();

      const response = await fetch(
        `${API_URL}/api/gallery/${item.id}`,
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
            "Unable to delete gallery image."
        );
      }


      setSuccess(
        "Gallery image deleted successfully."
      );

      await fetchGallery(token);
    } catch (err) {
      console.error(
        "Delete gallery error:",
        err
      );

      setError(
        err.message ||
          "Unable to delete gallery image."
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
    <div className="gallery-admin">

      {/* ===================================================
          HEADER
          =================================================== */}

      <header className="gallery-admin-header">

        <div className="gallery-admin-header-left">

          <button
            type="button"
            className="gallery-back-button"
            onClick={handleBack}
          >
            ← Dashboard
          </button>


          <div>

            <span className="gallery-eyebrow">
              CONTENT MANAGEMENT
            </span>

            <h1>
              Gallery
            </h1>

            <p>
              Manage the images displayed
              on the YARI website.
            </p>

          </div>

        </div>


        <button
          type="button"
          className="gallery-add-button"
          onClick={openAddForm}
        >
          + Add Image
        </button>

      </header>


      {/* ===================================================
          MAIN
          =================================================== */}

      <main className="gallery-admin-content">

        {/* =================================================
            ALERTS
            ================================================= */}

        {success && (
          <div className="gallery-alert gallery-alert-success">
            {success}
          </div>
        )}


        {error && (
          <div className="gallery-alert gallery-alert-error">
            {error}
          </div>
        )}


        {/* =================================================
            FORM
            ================================================= */}

        {showForm && (

          <section className="gallery-form-card">

            <div className="gallery-form-header">

              <div>

                <span className="gallery-eyebrow">
                  {editingId
                    ? "EDIT GALLERY IMAGE"
                    : "NEW GALLERY IMAGE"}
                </span>

                <h2>
                  {editingId
                    ? "Edit Gallery Image"
                    : "Add Gallery Image"}
                </h2>

              </div>


              <button
                type="button"
                className="gallery-close-button"
                onClick={closeForm}
              >
                ×
              </button>

            </div>


            <form
              onSubmit={handleSubmit}
            >

              <div className="gallery-form-grid">

                {/* TITLE */}

                <div className="gallery-form-field">

                  <label htmlFor="gallery-title">
                    Image Title
                  </label>

                  <input
                    id="gallery-title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. CNC Manufacturing"
                  />

                </div>


                {/* DISPLAY ORDER */}

                <div className="gallery-form-field">

                  <label htmlFor="gallery-order">
                    Display Order
                  </label>

                  <input
                    id="gallery-order"
                    name="sort_order"
                    type="number"
                    min="0"
                    value={formData.sort_order}
                    onChange={handleChange}
                  />


                  <label className="gallery-checkbox-label">

                    <input
                      type="checkbox"
                      name="is_active"
                      checked={formData.is_active}
                      onChange={handleChange}
                    />

                    <span>
                      Show this image on website
                    </span>

                  </label>

                </div>


                {/* DESCRIPTION */}

                <div className="gallery-form-field gallery-form-field-full">

                  <label htmlFor="gallery-description">
                    Description
                  </label>

                  <textarea
                    id="gallery-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter a description for this gallery image..."
                    rows="5"
                  />

                </div>


                {/* IMAGE */}

                <div className="gallery-form-field gallery-form-field-full">

                  <label>
                    Gallery Image
                  </label>


                  <div className="gallery-upload-area">

                    <input
                      ref={fileInputRef}
                      id="gallery-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />


                    <label
                      htmlFor="gallery-image"
                      className="gallery-upload-button"
                    >
                      Choose Image
                    </label>


                    <p>
                      Upload JPG, PNG, WEBP
                      or another image file.
                      Maximum 5 MB.
                    </p>

                  </div>


                  {imagePreview && (

                    <div className="gallery-image-preview">

                      <img
                        src={imagePreview}
                        alt="Gallery preview"
                      />

                    </div>

                  )}

                </div>

              </div>


              {/* FORM ACTIONS */}

              <div className="gallery-form-actions">

                <button
                  type="button"
                  className="gallery-cancel-button"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="gallery-save-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Image"
                    : "Save Image"}
                </button>

              </div>

            </form>

          </section>

        )}


        {/* =================================================
            GALLERY LIST
            ================================================= */}

        <section className="gallery-list-section">

          <div className="gallery-list-header">

            <div>

              <span className="gallery-eyebrow">
                CURRENT CONTENT
              </span>

              <h2>
                All Gallery Images
              </h2>

            </div>


            <span className="gallery-count">
              {gallery.length} images
            </span>

          </div>


          {loading ? (

            <div className="gallery-empty-state">

              <div className="gallery-loading">
                Loading gallery...
              </div>

            </div>

          ) : gallery.length === 0 ? (

            <div className="gallery-empty-state">

              <h3>
                No gallery images found
              </h3>

              <p>
                Add your first gallery image
                using the button above.
              </p>

            </div>

          ) : (

            <div className="gallery-admin-grid">

              {gallery.map((item) => (

                <article
                  className="gallery-admin-card"
                  key={item.id}
                >

                  <div className="gallery-admin-card-image">

                    {item.image ? (

                      <img
                        src={getImageUrl(item.image)}
                        alt={
                          item.title ||
                          "YARI gallery"
                        }
                      />

                    ) : (

                      <span>
                        No image
                      </span>

                    )}

                  </div>


                  <div className="gallery-admin-card-body">

                    <div className="gallery-admin-card-top">

                      <span className="gallery-order">
                        #{item.sort_order}
                      </span>


                      <span
                        className={
                          item.is_active
                            ? "gallery-status active"
                            : "gallery-status inactive"
                        }
                      >
                        {item.is_active
                          ? "Active"
                          : "Hidden"}
                      </span>

                    </div>


                    <h3>
                      {item.title ||
                        "Untitled Gallery Image"}
                    </h3>


                    <p>
                      {item.description
                        ? item.description.slice(
                            0,
                            120
                          ) +
                          (
                            item.description
                              .length > 120
                              ? "..."
                              : ""
                          )
                        : "No description"}
                    </p>


                    <div className="gallery-admin-card-actions">

                      <button
                        type="button"
                        className="gallery-edit-button"
                        onClick={() =>
                          openEditForm(item)
                        }
                      >
                        Edit
                      </button>


                      <button
                        type="button"
                        className="gallery-delete-button"
                        onClick={() =>
                          handleDelete(item)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}


export default GalleryAdmin;