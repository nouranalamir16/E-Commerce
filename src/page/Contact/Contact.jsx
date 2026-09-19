import React, { useState } from "react";
import './Contact.css'
import Footer from "../../components/Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contactPage">
      <div className="contactHero">
        <h1>Contact Us</h1>
        <p>We are here to help! Send us a message or reach out via email.</p>
      </div>

      <div className="contactContainer container">
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contactInfo">
          <h3>Our Contact Info</h3>
          <p>Email: nouranalmir16@gmail.com</p>
          <p>Phone: +20 1096495302</p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/nouran-alamir-a99441344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Nouran Alamir</a></p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;