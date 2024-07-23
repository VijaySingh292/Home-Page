// this code is not adjust for a smaller screen
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
import poet from "./assets/poetic-bg.jpg";

// Supports weights 100-900
import "@fontsource-variable/roboto-serif";

import "./index.css";
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle function for opening/closing the navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      {/* Header section with adjusted height */}
      <header style={{ height: "10vh" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            {/* Navbar brand or logo */}
            <a className="navbar-brand" alignItems= "left">
              Last Raven
            </a>

            {/* Navbar toggle button for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarExample01"
              aria-expanded={isNavbarOpen}
              aria-label="Toggle navigation"
              onClick={toggleNavbar} // Toggle the navbar on click
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar collapse section */}
            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              }`} // Conditional class based on toggle state
              id="navbarExample01"
            >
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

      {/* Header image section with overlay */}
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content-center text-white text-center">
           
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
          <a className="footer-link">
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


function SectionOne() {
  return (
    <>
      <div
        className="full-page-container"
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#bd68ee', // Use your desired background color here
          fontFamily: 'Roboto, Serif',
        }}
      >
        <h1
          className="main-title"
          style={{
            fontSize : '2.5rem',
            color: 'black',
            margin: '20px 0',
            fontWeight: 'bold',
          }}
        >
          Each task got its unique solution
        </h1>

        <div
  className="box-container"
  style={{
    display: 'flex',
    justifyContent: 'space-around',
    width: '90%',
    margin: '30px 0 50px 0',
    alignItems: 'center',
  }}
>
  <div
    className="styled-box"
    style={{
      padding: '10px',
      backgroundColor: '#F6E4F6', // Box color set to grey
      borderRadius: '10%', // Rounded boxes
      width: '23%',
      height: '270px',
      textAlign: 'center',
      margin: '10px', // Space between boxes
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform 0.3s ease', // Hover effect
      backgroundImage: `url(${poet})`, // Add the image URL here
      backgroundSize: 'cover', // Ensures the image covers the entire box
      backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      backgroundPosition: 'center', // Centers the image
    }}
  >
    <h5
      style={{
        color: 'black',
        fontSize: '1.5rem',
        fontWeight: '800',
        padding: '5px 10px', // Add padding for better appearance
        borderRadius: '5px', // Rounded corners for text background
      }}
    >
      Box 1
    </h5>
    <p
      style={{
        color: 'black',
        fontSize: '0.875rem',
        padding: '5px 10px',
        borderRadius: '5px',
      }}
    >
      Content for Box 1
    </p>
    <button
      className="styled-button"
      style={{
        backgroundColor: '#460395',
        color: 'black',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Rozha One',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#FFFFFF')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#460395')
      }
    >
      Click Me
    </button>
  </div>

  <div
    className="styled-box"
    style={{
      padding: '10px',
      backgroundColor: '#F6E4F6', // Box color set to grey
      borderRadius: '10%', // Rounded boxes
      width: '23%',
      height: '270px',
      textAlign: 'center',
      margin: '10px', // Space between boxes
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform 0.3s ease', // Hover effect
      backgroundImage: `url(${poet})`, // Add the image URL here
      backgroundSize: 'cover', // Ensures the image covers the entire box
      backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      backgroundPosition: 'center', // Centers the image
    }}
  >
    <h5
      style={{
        color: 'black',
        fontSize: '1.5rem',
        fontWeight: '800',
        padding: '5px 10px', // Add padding for better appearance
        borderRadius: '5px', // Rounded corners for text background
      }}
    >
      Box 2
    </h5>
    <p
      style={{
        color: 'black',
        fontSize: '0.875rem',
        padding: '5px 10px',
        borderRadius: '5px',
      }}
    >
      Content for Box 2
    </p>
    <button
      className="styled-button"
      style={{
        backgroundColor: '#460395',
        color: 'black',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Rozha One',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#FFFFFF')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#460395')
      }
    >
      Click Me
    </button>
  </div>

  <div
    className="styled-box"
    style={{
      padding: '10px',
      backgroundColor: '#F6E4F6', // Box color set to grey
      borderRadius: '10%', // Rounded boxes
      width: '23%',
      height: '270px',
      textAlign: 'center',
      margin: '10px', // Space between boxes
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform 0.3s ease', // Hover effect
      backgroundImage: `url(${poet})`, // Add the image URL here
      backgroundSize: 'cover', // Ensures the image covers the entire box
      backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      backgroundPosition: 'center', // Centers the image
    }}
  >
    <h5
      style={{
        color: 'black',
        fontSize: '1.5rem',
        fontWeight: '800',
        padding: '5px 10px', // Add padding for better appearance
        borderRadius: '5px', // Rounded corners for text background
      }}
    >
      Box 3
    </h5>
    <p
      style={{
        color: 'black',
        fontSize: '0.875rem',
        padding: '5px 10px',
        borderRadius: '5px',
      }}
    >
      Content for Box 3
    </p>
    <button
      className="styled-button"
      style={{
        backgroundColor: '#460395',
        color: 'black',
        borderRadius: '20px',
        padding: '10px 20px',
        fontFamily: 'Rozha One',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#FFFFFF')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#460395')
      }
    >
      Click Me
    </button>
  </div>
</div>

        <div
  className="content-div"
  style={{
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '35px',
    backgroundColor: '#F6E4F6',
    width: '70%',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '8vh',
    marginTop: '60px',
  }}
>
  <h5
    style={{
      color: 'black',
      textAlign: 'center',
      margin: 0, // Remove default margin for vertical centering
      flexGrow: 1, // Allow text to take up available space
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', // Full height of the div
      fontWeight : '800'
    }}
  >
    Want to make a bigger impression?
  </h5>
  <button
    className="impression-button"
    style={{
      backgroundColor: '#460395',
      color: 'black',
      borderRadius: '20px',
      padding: '10px 20px',
      fontFamily: 'Rozha One',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
      marginLeft: 'auto', // Ensure the button is on the right side
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = '#FFFFFF')
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = '#460395')
    }
  >
    Learn More
  </button>
</div>


      </div>
    </>
  );
}

function SectionTwo() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const buttonLabels = ["Video", "CyberSec", "Web Dev", "App Dev", "UI/UX", "Blog", "AI/ML", "Data Analyst"];

  return (
    <div className="section" style={{ backgroundColor: "#8b2fc9", height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="section-two-content" style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div
          className="section-two-left"
          style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontweight : '900' , fontSize: '3rem', fontFamily: 'Roboto, Serif' , color : 'black' }}>
            Choose Your Target, we’ll see to the rest. <br />
            <span style={{
              background: 'linear-gradient(to right, #ffffff, #f8f8f8, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight : '900'
            }}>
              All you have to do is sit back and relax.
            </span>
          </h1>
        </div>
        <div
  className="section-two-right"
  style={{
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div style={{ width: '80%' }}>
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} style={{ position: 'relative' }}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ borderRadius: '10px' }}
          />
          <Carousel.Caption
            style={{
              position: 'absolute',
              bottom: '20px', // Distance from the bottom
              left: '50%',
              transform: 'translateX(-50%)', // Center horizontally
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%', // Full width to ensure horizontal centering
              textAlign: 'center',
            }}
          >
            <button
              className="carousel-button"
              style={{
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                backgroundColor: 'black',
                color: '#fff',
                height: '40px',
                borderRadius: '50px',
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                fontFamily: 'Rozha One',
                border: 'none',
                display: 'flex', // Use Flexbox
                alignItems: 'center', // Vertically center content
                justifyContent: 'center', // Horizontally center content
              }}
            >
              {buttonLabels[index]}
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
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
