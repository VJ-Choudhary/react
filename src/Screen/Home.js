import React from "react";
import "../App.css";
 

import image1 from "../img/images (3).jpg";
import image2 from "../img/download.jpg";
import image3 from "../img/download (1).jpg"; 
import image4 from "../img/logo.jpg";
// import image from './img/WhatsApp Image 2024-11-27 at 18.24.46_7695e539.jpg';
import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import IndusPage from "../components/IndusPage";
function Home() {
  var navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/indus");
    alert("HELLO");
  };

  return (
    
    <div className="App">
      <header className="header">
      <img src={image4} alt="Madaan Enterprises logo" className="header-image" />
        <h1>Madaan Enterprises</h1>
       
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#location">Location</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Madaan Enterprises Hardware & Sanitary</h2>
        <p>
          Since 2023 Madaan Enterprises is a well-known organization that
          provides the best quality products to its clients. Our range includes
          Water storage tanks, Cpvc pipes & fittings, Swr pipes & fittings, HDPE
          pipes, Agriculture pipes, Profile sheets, Gp sheets, Ms jali, Polymer
          putty, Rustic, Waterproof putty, Paints(Emulsions, Leakproofs), etc.
          Our clients can avail the range of products at the best prices in the
          market in Betul. Madaan Enterprises proudly introduces itself as a
          supplier.
        </p>
      </section>

      <section id="products" className="products">
        <h3>Our Products</h3>
        <div className="product-grid">
          <div className="product-card">
            <img src={image1} alt="Indus Products" className="product-image" />

            <a href="/indus" ><h4>Indus</h4></a>
  
            <p>
              Water storage tanks, Cpvc pipes & fittings, Swr pipes & fittings,
              HDPE pipes, Agriculture pipes.
            </p>
          </div>
          <div className="product-card">
            <img src={image2} alt="Uttam Products" className="product-image" />
            <nav>
              {/* <ul>
                <li> */}
                  <a href="Uttam">
                    <h4>Uttam</h4>
                  </a>
                {/* </li>
              </ul> */}
              <p>Profile sheets, Gp sheets, Ms jali.</p>
            </nav>
          </div>
          <div className="product-card">
            <img src={image3} alt="Indigo Paints" className="product-image" />
            <a href="/paint">
              <h4>Indigo Paints</h4>
            </a>
            <p>
              Polymer putty, Rustic, Waterproof putty, Paints (Emulsions,
              Leakproofs).
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h3>About Us</h3>
        <div className="product-grid">
          <div className="product-card">
            <h4>Ghanshyam Madaan</h4>
            <p>Contact No. 9584091302, 6268650154</p>
            <h4>Rishabh Madaan</h4>
            <p>Contact No. 7987016457, 8878988739</p>
          </div>
          <div className="about-card">
            <h4>Shop Address</h4>
            <p>Shekhar central, 619, Near Palasia Square, Manorama Ganj, Indore, Madhya Pradesh 452001</p>
          </div>
          {/* <div className="about-card">
            <h4>Click button to get google map direction</h4>
            <button  >Click Me to shop direction</button>
          </div> */}
          <div className="about-card" style={{ textAlign: "center" }}>
  <h4 style={{ marginBottom: "20px" }}>Click button to get Google Map direction</h4>
  <a
    href="https://www.google.com/maps/dir//Your+Shop+Shekhar+central+619,+Near+Palasia+Square,+Manorama+Ganj+Indore,+Madhya+Pradesh+452001/@22.722727,75.887071,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fd39c93fffff:0xf87af9fa4725601c!2m2!1d75.887071!2d22.722727?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#ffffff",
      backgroundColor: "#007BFF",
      border: "none",
      borderRadius: "5px",
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
  >
    Click Me to Shop Direction
  </a>
</div>

        </div>
      </section>

      <section id="location" className="location">
        <h3>Our Location</h3>
        <iframe
          title="Shop Location"
          src="https://maps.google.com/maps?q=Your+Shop+Location&output=embed"
          className="map"
        ></iframe>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Enterprise Products. All rights reserved.</p>
      </footer>
   
    </div>
  );
}

export default Home;
