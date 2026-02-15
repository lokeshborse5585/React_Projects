import React, { useState } from 'react';
import styles from './LadiesServices.module.css';
import SignPage from './SignPage';
import emailjs from '@emailjs/browser';

const ADMIN_EMAIL = "lokeshborse2003@gmail.com";

const LadiesServices = () => {
  const [cart, setCart] = useState([]);
  const [showAuth, setShowAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const servicesData = [
    { id: 1, name: "Super Saver", image: "https://png.pngtree.com/png-clipart/20221029/original/pngtree-25-percent-off-label-design-png-image_8742032.png", price: 3183, oldPrice: "₹4,244" },
    { id: 2, name: "Korean Facial", image: "https://www.panacheandpoise.com/images/korean-glass-skin-treatment.jpeg", price: 1500, oldPrice: "₹2,000" },
    { id: 3, name: "Waxing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XXWuzNXZP00srGkJfzS9trdY5EdKC-Zbkg&s", price: 499, oldPrice: "₹800" },
    { id: 4, name: "Pedicure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRWqAMCrip_IrLQmLjKft_j27QVGc1JPKYA&s", price: 899, oldPrice: "₹1200" },
    { id: 5, name: "Hair Cut", image: "https://de-lady.co.uk/wp-content/uploads/2020/07/hair_cut.2.jpg", price: 599, oldPrice: "₹999" },
    { id: 6, name: "Cleanup", image: "https://envi.in/wp-content/uploads/2023/12/Basic-Cleanup-2.webp", price: 799, oldPrice: "₹1100" },
    { id: 7, name: "Detan Pack", image: "https://worldhealthayurveda.com/images/therapy/ayurveda-facial.jpg", price: 399, oldPrice: "₹600" },
    { id: 8, name: "Manicure", image: "https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg", price: 699, oldPrice: "₹1000" },
    { id: 9, name: "Bleach", image: "https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcQulNqcNYg3lvUTOUwl3zbIDCRpIzTZ72y1NQ&s", price: 299, oldPrice: "₹500" },
    { id: 10, name: "Bridal Glow", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5yk5lMTrJYG0KaC_SRBXeDwj0zBbJdbmiQ&s", price: 4999, oldPrice: "₹7000" },
    { id: 11, name: "Hair Color", image: "https://www.shutterstock.com/image-photo/young-redheaded-woman-receiving-hair-260nw-2606618957.jpg", price: 1999, oldPrice: "₹4500" },
    { id: 12, name: "Hair Straightening", image: "https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI=", price: 2999, oldPrice: "₹3000" },
  ];

  const addToCart = (s) => setCart([...cart, s]);
  const removeFromCart = (i) => setCart(cart.filter((_, idx) => idx !== i));
  const totalPrice = cart.reduce((t, i) => t + i.price, 0);

  const handleLoginSuccess = (user) => {
    setUserData(user);
    setShowAuth(false);
    setIsBooked(true);

    const bookingDetails = cart.map(c => c.name).join(", ");

    const params = {
      from_name: user.name,
      from_contact: user.contact,
      booking_details: bookingDetails,
      total_price: totalPrice,
    };

    // ADMIN EMAIL
    emailjs.send(
      "service_9wafmvs",
      "template_dnxxxdu",
      { ...params, to_email: ADMIN_EMAIL },
      "r7TpWQDQOF1ebVm1h"
    );

    // USER EMAIL
    emailjs.send(
      "service_9wafmvs",
      "template_kd7uxnr",
      { ...params, to_email: user.email },
      "r7TpWQDQOF1ebVm1h"
    );
  };

  if (showAuth)
    return <SignPage onBack={() => setShowAuth(false)} onSuccess={handleLoginSuccess} />;

  return (
    <div className={styles.pageBackground}>
      <h1 className={styles.title}>Hb Unisex Salon</h1>

      <div className={styles.mainLayout}>
        <div className={styles.leftContainer}>
          <div className={styles.servicesGrid}>
            {servicesData.map(s => (
              <div key={s.id} className={styles.card}>
                <img src={s.image} alt={s.name} />
                <div className={styles.info}>
                  <h3>{s.name}</h3>
                  <p className={styles.priceText}>
                    ₹{s.price} <span className={styles.oldPrice}>{s.oldPrice}</span>
                  </p>
                  <button className={styles.addBtn} onClick={() => addToCart(s)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContainer}>
          {isBooked ? (
            <div className={styles.successBox}>
              <h2>✅ Booking Confirmed</h2>
              <p>  Thank you for your booking! Your details have been successfully shared with the salon owner.
  Our team will contact you shortly to confirm your schedule.</p>
              <button className={styles.confirmBtn} onClick={() => { setIsBooked(false); setCart([]); }}>
                New Booking
              </button>
            </div>
          ) : (
            <div className={styles.bookingBoard}>
              <h2>Booking Details</h2>

              <div className={styles.cartItemsList}>
                {cart.length === 0 ? <p>No services added</p> :
                  cart.map((c, i) => (
                    <div key={i} className={styles.cartItem}>
                      <span>{c.name}</span>
                      <button onClick={() => removeFromCart(i)}>❌</button>
                    </div>
                  ))
                }
              </div>

              <div className={styles.totalSection}>
                <p>Total: <span>₹{totalPrice}</span></p>
                <button className={styles.confirmBtn} onClick={() => setShowAuth(true)}>
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* INFO CARD SAME AS BEFORE */}
          <div className={styles.infoCard}>
            <h3>Trusted Brands</h3>
            <p className={styles.brandNames}>
              L'Oréal | Schwarzkopf | O3+ | Lotus | Matrix | Rica | Raaga
            </p>
            <hr className={styles.hrLine} />
            <ul>
              <li>📞 Call +91-XXXXXXXXXX</li>
              <li>✨ Sanitized tools used</li>
              <li>⏰ Arrive on time</li>
            </ul>
            <p className={styles.smallText}>
              Super Saver: Hair Wash, Haircut, Cleansing, Shaving/Beard Trim
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LadiesServices;
