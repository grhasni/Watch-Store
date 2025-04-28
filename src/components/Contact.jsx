import React, { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-container">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-wrapper">
              <FaLocationDot className="icon" />
            </div>
            <h3>Our Location</h3>
            <p>123 Watch Street, Time Square, NY 10001</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <FaPhone className="icon" />
            </div>
            <h3>Phone Number</h3>
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <FaEnvelope className="icon" />
            </div>
            <h3>Email Address</h3>
            <p>contact@watchstore.com</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ height: "50px", width: "100%" }}
                />
                <label htmlFor="name">Your Name</label>
                <div className="input-border"></div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ height: "50px", width: "100%" }}
                />
                <label htmlFor="email">Your Email</label>
                <div className="input-border"></div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ height: "50px", width: "100%" }}
                />
                <label htmlFor="subject">Subject</label>
                <div className="input-border"></div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ height: "100px", width: "100%" }}
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="input-border"></div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
