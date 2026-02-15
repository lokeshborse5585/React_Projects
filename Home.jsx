import React, { useState } from "react";
import styles from "./Home.module.css";

// Saare Pages ko Section ki tarah use karne ke liye import karo
import About from "./About.jsx";
import LadiesServices from "./LadiesServices.jsx";
import GentsServices from "./GentsServices.jsx";
import Gallery from "./Gallery.jsx"; 
import Contact from "./Contact.jsx";

const Home = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Smooth Scroll Logic
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // scroll-margin-top ko CSS mein handle karna navbar ke liye
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // Dropdown band karne ke liye
    }
  };

  return (
    <div className={styles.home}>
      {/* Navbar Fixed */}
      <nav className={styles.navbar}>
        <div className={styles.logoBox} onClick={() => handleScroll("hero")} style={{cursor: 'pointer'}}>
          <img src="https://static.vecteezy.com/system/resources/previews/019/496/054/non_2x/colorful-letter-h-b-logo-design-modern-logo-for-business-company-visual-identity-in-low-poly-art-style-free-vector.jpg" alt="Logo" />
          <h3>HB SALON</h3>
        </div>

        <ul className={styles.navLinks}>
          <li onClick={() => handleScroll("hero")}>Home</li>

          <li className={styles.servicesTrigger} onClick={() => setOpen(!open)}>
            Services
            {open && (
              <ul className={styles.dropdown}>
                 <li onClick={(e) => { e.stopPropagation(); handleScroll("ladies"); }}>Ladies</li>
                <li onClick={(e) => { e.stopPropagation(); handleScroll("gents"); }}>Gents</li>
               
              </ul>
            )}
          </li>

          <li onClick={() => handleScroll("gallery")}>Gallery</li>
          <li onClick={() => handleScroll("about")}>About Us</li>
          <li onClick={() => handleScroll("contact")}>Contact Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Where Beauty is a Ritual</h1>
          
          <button 
            className={styles.bookBtn} 
            onClick={() => handleScroll("ladies")}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* --- SAARE COMPONENTS ID KE SAATH --- */}
      
      {/* Gents Section */}
      <div id="gents">
        <GentsServices />
      </div>

      {/* Ladies Section */}
      <div id="ladies">
        <LadiesServices />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
};

export default Home;