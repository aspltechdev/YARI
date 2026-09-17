import React, { useEffect, useState } from "react";
import "./ContactAdmin.css";

function ContactAdmin() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  /* =========================================================
     LOAD CONTACT MESSAGES
     ========================================================= */

  const loadMessages = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(
        "https://yari-backend.vercel.app/api/contact/messages"
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to load messages"
        );
      }

      setMessages(
        Array.isArray(data.data)
          ? data.data
          : []
      );

    } catch (error) {

      console.error(
        "Contact messages error:",
        error
      );

      setError(
        "Unable to load contact messages."
      );

    } finally {

      setLoading(false);

    }
  };


  /* =========================================================
     LOAD WHEN PAGE OPENS
     ========================================================= */

  useEffect(() => {
    loadMessages();
  }, []);


  /* =========================================================
     FORMAT DATE
     ========================================================= */

  const formatDate = (date) => {

    if (!date) {
      return "—";
    }

    return new Date(date).toLocaleString(
      "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  };


  return (
    <div className="contact-admin-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="contact-admin-header">

        <div>

          <span className="contact-admin-label">
            YARI ADMINISTRATION
          </span>

          <h1>
            Contact
          </h1>

          <p>
            View enquiries submitted through the YARI website.
          </p>

        </div>

      </div>


      {/* =====================================================
          CONTACT INFORMATION
          ===================================================== */}

      <div className="contact-admin-card">

        <h2>
          Contact Information
        </h2>

        <div className="contact-admin-field">

          <label>
            Address
          </label>

          <div className="contact-admin-static">
            YARI Design &amp; Manufacturing Services
            <br />
            No. 4/86, 3rd Cross Street, A.G.S Colony,
            <br />
            Velachery, Chennai, Tamil Nadu - 600042
          </div>

        </div>


        <div className="contact-admin-field">

          <label>
            Email
          </label>

          <div className="contact-admin-static">
            yari.innovative@gmail.com
          </div>

        </div>

      </div>


      {/* =====================================================
          CUSTOMER MESSAGES
          ===================================================== */}

      <div className="contact-admin-card">

        <div className="contact-admin-messages-header">

          <div>

            <h2>
              Customer Enquiries
            </h2>

            <p>
              Messages submitted from the website contact form.
            </p>

          </div>

          <button
            type="button"
            className="contact-admin-refresh-button"
            onClick={loadMessages}
          >
            Refresh
          </button>

        </div>


        {/* LOADING */}

        {loading && (

          <div className="contact-admin-empty">
            Loading messages...
          </div>

        )}


        {/* ERROR */}

        {!loading && error && (

          <div className="contact-admin-error">
            {error}
          </div>

        )}


        {/* NO MESSAGES */}

        {!loading &&
          !error &&
          messages.length === 0 && (

            <div className="contact-admin-empty">

              No customer enquiries have been submitted yet.

            </div>

          )}


        {/* MESSAGES */}

        {!loading &&
          !error &&
          messages.length > 0 && (

            <div className="contact-admin-messages">

              {messages.map((item) => (

                <div
                  className="contact-admin-message-card"
                  key={item.id}
                >

                  <div className="contact-admin-message-top">

                    <div>

                      <h3>
                        {item.name || "Unknown Customer"}
                      </h3>

                      <span>
                        {formatDate(item.created_at)}
                      </span>

                    </div>

                    <div className="contact-admin-message-id">
                      #{item.id}
                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="contact-admin-message-field">

                    <strong>
                      Email
                    </strong>

                    <a
                      href={`mailto:${item.email}`}
                    >
                      {item.email || "—"}
                    </a>

                  </div>


                  {/* PHONE */}

                  <div className="contact-admin-message-field">

                    <strong>
                      Phone
                    </strong>

                    <span>
                      {item.phone || "—"}
                    </span>

                  </div>


                  {/* SUBJECT / SERVICE */}

                  <div className="contact-admin-message-field">

                    <strong>
                      Service / Project
                    </strong>

                    <span>
                      {item.subject || "—"}
                    </span>

                  </div>


                  {/* MESSAGE */}

                  <div className="contact-admin-message-field">

                    <strong>
                      Message
                    </strong>

                    <p>
                      {item.message || "—"}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

      </div>


      {/* =====================================================
          STATUS
          ===================================================== */}

      <div className="contact-admin-status">

        <span className="contact-admin-status-dot"></span>

        <span>
          Contact enquiry system is connected to PostgreSQL.
        </span>

      </div>

    </div>
  );
}

export default ContactAdmin;
