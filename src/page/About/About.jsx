import React from "react";
import "./about.css";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="content">
          <div className="img">
            <img src="/src/img/logo.png" alt="" />
          </div>
          <h1>About Our Store</h1>
          <p className="center">
            Welcome to our E-Commerce store! We provide high-quality products at
            the best prices with fast and reliable delivery.
          </p>

          <div className="aboutSection">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make online shopping simple, secure, and
              enjoyable for everyone.
            </p>
          </div>

          <div className="aboutSection">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✔ High Quality Products</li>
              <li>✔ Secure Payment</li>
              <li>✔ Fast Delivery</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

      </div>
        <Footer/>
    </div>
  );
}

export default About;
