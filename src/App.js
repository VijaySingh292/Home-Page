import React from "react";
import { useState } from "react";



import logo from "./assets/logo.jpg";
import home from "./assets/homelogo.png";

import image1 from "./assets/t2.jpg";
import image2 from "./assets/t2.jpg";
import image3 from "./assets/t2.jpg";
import image4 from "./assets/t2.jpg";
import image5 from "./assets/t2.jpg";
import image6 from "./assets/t2.jpg";
import image7 from "./assets/t2.jpg";
import image8 from "./assets/t2.jpg";

// Supports weights 100-900
import "@fontsource-variable/roboto-serif";

import "./index.css";
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          hello world
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setShowBasic(!showBasic)}
              aria-controls="navbarExample01"
              aria-expanded={showBasic}
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className={`collapse navbar-collapse ${showBasic ? "show" : ""}`} id="navbarExample01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="header-image" style={{ backgroundImage: `url(${home})` }}>
        <div className="overlay">
          <div className="content-center">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <button className="btn-outline-light">Call to action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <section className="social-media">
        <div className="social-text">
          Get connected with us on social networks:
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="footer-content">
        <div className="footer-section company-info">
          <h6 className="footer-title">Last Raven</h6>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="footer-section products">
          <h6 className="footer-title">Products</h6>
          <a href="#" className="footer-link">
            Angular
          </a>
          <a href="#" className="footer-link">
            React
          </a>
          <a href="#" className="footer-link">
            Vue
          </a>
          <a href="#" className="footer-link">
            Laravel
          </a>
        </div>

        <div className="footer-section useful-links">
          <h6 className="footer-title">Useful links</h6>
          <a href="#" className="footer-link">
            Video Editing
          </a>
          <a href="#" className="footer-link">
            Blogs
          </a>
          <a href="#" className="footer-link">
            Web Dev
          </a>
          <a href="#" className="footer-link">
            CyberSecurity
          </a>
        </div>

        <div className="footer-section">
          <h6 className="footer-title">Contact</h6>
          <p>
            <i className="fas fa-home"></i> MI Road, Jaipur, India
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> + 01 234 567 88
          </p>
          <p>
            <i className="fas fa-print"></i> + 01 234 567 89
          </p>
        </div>
      </section>
      <div className="footer-bottom">
        <p>
          © 2024 Copyright:{" "}
          <a href="#" className="footer-link">
            LastRaven.in
          </a>
        </p>
      </div>
    </footer>
  );
}

function Form() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" className="form-control" rows="4"></textarea>
      </div>
      <div className="form-group checkbox-container">
        <input type="checkbox" id="copy" defaultChecked />
        <label htmlFor="copy">Send me a copy of this message</label>
      </div>
      <button type="submit" className="btn btn-submit">
        Sign in
      </button>
    </form>
  );
}


function SectionOne  () {
  return (
    <>
  <div className="full-page-container" style={{backgroundColor:"#bd68ee"}}>
   
    <h1 className="main-title">Each task got its unique solution</h1>
    <div className="box-container">
      <div className="styled-box">
        <h5>Box 1</h5>
        <p>Content for Box 1</p>
        <button className="styled-button">Click Me</button>
      </div>
      <div className="styled-box">
        <h5>Box 2</h5>
        <p>Content for Box 2</p>
        <button className="styled-button">Click Me</button>
      </div>
      <div className="styled-box">
        <h5>Box 3</h5>
        <p>Content for Box 3</p>
        <button className="styled-button">Click Me</button>
      </div>
    </div>
    <div className="content-div">
      <h5>Want to make a bigger impression?</h5>
      <button className="impression-button">Learn More</button>
    </div>
  </div>
  </>
);
}

function SectionTwo() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="section" style={{backgroundColor:"#8b2fc9"}}>
      <div className="section-two-content">
        <div className="section-two-left">
          <h1>Choose Your Target, we’ll see to the rest. All you have to do is sit back and relax.</h1>
        </div>
        <div className="section-two-right">
          <Carousel className="carousel-container">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <button className="carousel-button">Button {index + 1}</button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function SectionThree() {
  return (
    <div className="section" style={{ backgroundColor: "#4a0a77" }}>
      <div className="container">
        <div className="text-container">
          <div className="SectionFourText-heading">
            <h1>
              OUR <span className="SectionFourText-heading-hlight">CUSTOMER</span> IS OUR <span className="SectionFourText-heading-hlight">FAMILY</span>
            </h1>
          </div>
          <p className="SectionFourText">
            We don't waste your time, we are here to help you grow your business.
          </p>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

function SectionFour() {
  return (
    <div className="section" style={{ backgroundColor: "#310055" }}>
      {/* Section five content */}
      {/* <div className="left">
      <h1>Contact Us</h1>
      </div> */}
      <div className="contact">
        <h2>
          <div className="contact-p-hlight">Our solutions</div>
          works for every stage
          <br />
          of your carrier or company.
        </h2>
        <p>Our partener's and companies that trust</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}
