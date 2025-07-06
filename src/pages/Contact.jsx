// src/pages/Contact.jsx

import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  if (loading) {
    return (
      <div className="contact-loading-container">
        <div className="contact-spinner"></div>
        <p className="contact-loading-text">Loading Contact Page...</p>
      </div>
    );
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-glass">
        <h2 className="contact-header">📬 <span>Contact Me</span></h2>
        <p className="contact-subtext">Let’s build something amazing together 🚀</p>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent Successfully!");
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
          <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
          <textarea name="message" placeholder="Your Message" required className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">
            Send Message 🚀
          </button>
        </form>

        <div className="contact-links">
          <div
            className="contact-link"
            onClick={() => handleCopy("praveen002006@gmail.com", "Email")}
          >
            <FaEnvelope /> praveen002006@gmail.com
            {copied === "Email" && <FaCheckCircle className="copied-icon" />}
          </div>
          <div
            className="contact-link"
            onClick={() => handleCopy("+919123544946", "Phone")}
          >
            <FaPhone /> +91 9123544946
            {copied === "Phone" && <FaCheckCircle className="copied-icon" />}
          </div>
          <div className="contact-link">
            <FaMapMarkerAlt /> Surapet,Chennai, India
          </div>
        </div>
      </div>
      <div className="particles-bg"></div>
    </div>
  );
}

export default Contact;
