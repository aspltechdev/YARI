import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IndustriesAdmin.css";

const API_URL = "https://yari-backend.vercel.app";

function IndustriesAdmin() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    features: "",
    sort_order: 0,
    is_active: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("yari_admin_token");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    fetchIndustries(token);
  }, [navigate]);

  const getToken = () => {
    return localStorage.getItem("yari_admin_token");
  };

  const fetchIndustries = async (token = getToken()) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/industries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to load industries.");
      }

      setIndustries(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Fetch industries error:", err);
      setError(err.message || "Unable to load industries.");
    } finally {
      setLoading(false);
    }
  };

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

  const openAddForm = () => {
    setSuccess("");
    setError("");
    resetForm();
    setShowForm(true);
  };

  const openEditForm = (industry) => {
    setSuccess("");
    setError("");

    const features = Array.isArray(industry.features)
      ? industry.features.join("\n")
      : "";

    setFormData({
      title: industry.title || "",
      slug: industry.slug || "",
      description: industry.description || "",
      features,
      sort_order: industry.sort_order ?? 0,
      is_active: industry.is_active !== false,
    });

    setEditingId(industry.id);
    setImageFile(null);

    if (industry.image) {
      setImagePreview(getImageUrl(industry.image));
    } else {
      setImagePreview("");
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    resetForm();
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;

    setFormData((previous) => ({
      ...previous,
      title,
      slug:
        editingId !== null
          ? previous.slug
          : createSlug(title),
    }));
  };

  const createSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be smaller than 5 MB.");
      return;
    }

    setError("");
    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.title.trim()) {
      setError("Please enter an industry title.");
      return;
    }

    if (!formData.slug.trim()) {
      setError("Please enter a slug.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Please enter an industry description.");
      return;
    }

    try {
      setSaving(true);

      const token = getToken();

      const data = new FormData();

      data.append("title", formData.title.trim());
      data.append("slug", formData.slug.trim());
      data.append("description", formData.description.trim());
      data.append(
        "sort_order",
        String(Number(formData.sort_order) || 0)
      );
      data.append("is_active", String(formData.is_active));

      const featureList = formData.features
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

      data.append("features", JSON.stringify(featureList));

      if (imageFile) {
        data.append("image", imageFile);
      }

      const url = editingId
        ? `${API_URL}/api/industries/${editingId}`
        : `${API_URL}/api/industries`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to save industry."
        );
      }

      setSuccess(
        editingId
          ? "Industry updated successfully."
          : "Industry added successfully."
      );

      setShowForm(false);
      resetForm();

      await fetchIndustries(token);
    } catch (err) {
      console.error("Save industry error:", err);
      setError(err.message || "Unable to save industry.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (industry) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${industry.title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const token = getToken();

      const response = await fetch(
        `${API_URL}/api/industries/${industry.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to delete industry."
        );
      }

      setSuccess("Industry deleted successfully.");

      await fetchIndustries(token);
    } catch (err) {
      console.error("Delete industry error:", err);
      setError(err.message || "Unable to delete industry.");
    }
  };

  const handleBack = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className="industries-admin">
      <header className="industries-admin-header">
        <div className="industries-admin-header-left">
          <button
            type="button"
            className="industries-back-button"
            onClick={handleBack}
          >
            ← Dashboard
          </button>

          <div>
            <span className="industries-eyebrow">
              CONTENT MANAGEMENT
            </span>

            <h1>Industries</h1>

            <p>
              Manage the industries displayed on the YARI website.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="industries-add-button"
          onClick={openAddForm}
        >
          + Add Industry
        </button>
      </header>

      <main className="industries-admin-content">
        {success && (
          <div className="industries-alert industries-alert-success">
            {success}
          </div>
        )}

        {error && (
          <div className="industries-alert industries-alert-error">
            {error}
          </div>
        )}

        {showForm && (
          <section className="industry-form-card">
            <div className="industry-form-header">
              <div>
                <span className="industries-eyebrow">
                  {editingId ? "EDIT INDUSTRY" : "NEW INDUSTRY"}
                </span>

                <h2>
                  {editingId
                    ? "Edit Industry"
                    : "Add New Industry"}
                </h2>
              </div>

              <button
                type="button"
                className="industry-close-button"
                onClick={closeForm}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="industry-form-grid">
                <div className="industry-form-field">
                  <label htmlFor="industry-title">
                    Industry Title
                  </label>

                  <input
                    id="industry-title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. Automotive & Engineering"
                  />
                </div>

                <div className="industry-form-field">
                  <label htmlFor="industry-slug">
                    Slug
                  </label>

                  <input
                    id="industry-slug"
                    name="slug"
                    type="text"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="automotive-engineering"
                  />
                </div>

                <div className="industry-form-field industry-form-field-full">
                  <label htmlFor="industry-description">
                    Description
                  </label>

                  <textarea
                    id="industry-description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter the industry description..."
                    rows="5"
                  />
                </div>

                <div className="industry-form-field">
                  <label htmlFor="industry-features">
                    Features
                  </label>

                  <textarea
                    id="industry-features"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder={"One feature per line"}
                    rows="5"
                  />

                  <small>
                    Enter one feature on each line.
                  </small>
                </div>

                <div className="industry-form-field">
                  <label htmlFor="industry-order">
                    Display Order
                  </label>

                  <input
                    id="industry-order"
                    name="sort_order"
                    type="number"
                    min="0"
                    value={formData.sort_order}
                    onChange={handleChange}
                  />

                  <label className="industry-checkbox-label">
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={formData.is_active}
                      onChange={handleChange}
                    />

                    <span>
                      Show this industry on website
                    </span>
                  </label>
                </div>

                <div className="industry-form-field industry-form-field-full">
                  <label>
                    Industry Image
                  </label>

                  <div className="industry-upload-area">
                    <input
                      ref={fileInputRef}
                      id="industry-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />

                    <label
                      htmlFor="industry-image"
                      className="industry-upload-button"
                    >
                      Choose Image
                    </label>

                    <p>
                      Upload JPG, PNG, WEBP or another image file.
                      Maximum 5 MB.
                    </p>
                  </div>

                  {imagePreview && (
                    <div className="industry-image-preview">
                      <img
                        src={imagePreview}
                        alt="Industry preview"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="industry-form-actions">
                <button
                  type="button"
                  className="industry-cancel-button"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="industry-save-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Industry"
                    : "Save Industry"}
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="industries-list-section">
          <div className="industries-list-header">
            <div>
              <span className="industries-eyebrow">
                CURRENT CONTENT
              </span>

              <h2>All Industries</h2>
            </div>

            <span className="industries-count">
              {industries.length} industries
            </span>
          </div>

          {loading ? (
            <div className="industries-empty-state">
              <div className="industries-loading">
                Loading industries...
              </div>
            </div>
          ) : industries.length === 0 ? (
            <div className="industries-empty-state">
              <h3>No industries found</h3>
              <p>
                Add your first industry using the button above.
              </p>
            </div>
          ) : (
            <div className="industries-table-wrapper">
              <table className="industries-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Industry</th>
                    <th>Slug</th>
                    <th>Order</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {industries.map((industry) => (
                    <tr key={industry.id}>
                      <td>
                        <div className="industry-table-image">
                          {industry.image ? (
                            <img
                              src={getImageUrl(industry.image)}
                              alt={industry.title}
                            />
                          ) : (
                            <span>No image</span>
                          )}
                        </div>
                      </td>

                      <td>
                        <div className="industry-table-title">
                          <strong>{industry.title}</strong>

                          <span>
                            {industry.description
                              ? industry.description.slice(0, 90) +
                                (industry.description.length > 90
                                  ? "..."
                                  : "")
                              : "No description"}
                          </span>
                        </div>
                      </td>

                      <td>
                        <code>{industry.slug}</code>
                      </td>

                      <td>{industry.sort_order}</td>

                      <td>
                        <span
                          className={
                            industry.is_active
                              ? "industry-status active"
                              : "industry-status inactive"
                          }
                        >
                          {industry.is_active
                            ? "Active"
                            : "Hidden"}
                        </span>
                      </td>

                      <td>
                        <div className="industry-table-actions">
                          <button
                            type="button"
                            className="industry-edit-button"
                            onClick={() =>
                              openEditForm(industry)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="industry-delete-button"
                            onClick={() =>
                              handleDelete(industry)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default IndustriesAdmin;
