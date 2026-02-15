import React, { useState } from 'react';
import styles from './GentsServices.module.css';
import SignPage from './SignPage';
import emailjs from '@emailjs/browser';

const ADMIN_EMAIL = "lokeshborse2003@gmail.com";

const GentsServices = () => {
  const [cart, setCart] = useState([]);
  const [showAuth, setShowAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const servicesData = [
    { id: 1, name: "Super Saver", image: "https://img.freepik.com/free-photo/paper-style-black-friday-composition_23-2149074048.jpg", price: 1599, oldPrice: "₹2,250" },
    { id: 2, name: "Beard Trim & Shape", image: "https://www.nikky-bawa.com/wp-content/uploads/2023/04/beardsetting.jpg", price: 149, oldPrice: "₹250" },
    { id: 3, name: "Gents Facial (O3+)", image: "https://salon85.co.in/wp-content/uploads/2025/09/detan.webp", price: 1200, oldPrice: "₹1800" },
    { id: 4, name: "Hair Color (Black/Brown)", image: "https://t3.ftcdn.net/jpg/04/29/56/32/360_F_429563255_AnI9crCdDBFmLB5TcWH4f5cKVDaJIZNJ.jpg", price: 499, oldPrice: "₹800" },
    { id: 5, name: "Head Massage (Oil)", image: "https://thumbs.dreamstime.com/b/handsome-men-having-head-massage-spa-salon-top-view-handsome-man-having-head-massage-spa-salon-192867244.jpg", price: 299, oldPrice: "₹500" },
    { id: 6, name: "Charcoal Face Mask", image: "https://www.shutterstock.com/image-photo/cosmetologist-applying-sheet-mask-onto-260nw-2146947057.jpg", price: 399, oldPrice: "₹600" },
    { id: 7, name: "Shaving (Classic)", image: "https://www.shutterstock.com/image-photo/brush-shaving-beard-along-bowl-260nw-1231436956.jpg", price: 99, oldPrice: "₹150" },
    { id: 8, name: "Hair Spa (L'Oreal)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG41jJzFWgwRRcCmdx1WOQOZihUzdw9qTE7Q&s", price: 799, oldPrice: "₹1200" },
    { id: 9, name: "Detan (Face & Neck)", image: "https://5.imimg.com/data5/SE/QL/GLADMIN-30008264/mens-detan-and-bleach-service-500x500.jpg", price: 299, oldPrice: "₹500" },
    { id: 10, name: "Men's Pedicure", image: "https://media.istockphoto.com/id/173367972/photo/man-receiving-a-foot-care-treatment.jpg?s=612x612&w=0&k=20&c=E-9aBY6KSNBMBeISA1vIMTQVlbFHi8eNr1gmY8k7zOg=", price: 599, oldPrice: "₹900" },
    { id: 11, name: "Groom Makeup", image: "https://content.jdmagicbox.com/comp/jaipur/d1/0141px141.x141.190711194940.x8d1/catalogue/refresh-groom-makeup-artist-jaipur-z07tl5boan.jpg", price: 2500, oldPrice: "₹4000" },
    { id: 12, name: "Hair Smoothening", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhMBy9SCtqTpwPyyEwOPTM71VLBqmXAvVJg&s", price: 2999, oldPrice: "₹5000" },
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
              <p>
                Thank you for choosing HB Unisex Salon. Your booking details have been forwarded to the salon owner.
                You will be contacted shortly to confirm your appointment schedule.
              </p>
              <button
                className={styles.confirmBtn}
                onClick={() => { setIsBooked(false); setCart([]); }}
              >
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

export default GentsServices;
