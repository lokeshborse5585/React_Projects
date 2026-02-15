import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <section
      id="contact"
      className={style.contactWrapper}
      onContextMenu={handleContextMenu}
    >
      {/* Main Contact Content */}
      <div className={style.container}>
        {/* Left Side */}
        <div className={style.thankYouSide}>
          <h1 className={style.mainHeading}>
            Thank You for <br />
            <span>Choosing HB SALON</span>
          </h1>
          <p className={style.subText}>
            We are committed to providing you with the best grooming experience.
            Feel free to reach out to us for any queries.
          </p>
        </div>

        {/* Right Side */}
        <div className={style.infoSide}>
          <div className={style.contactCard}>
            <h2 className={style.cardTitle}>Contact Us</h2>

            <div className={style.infoItem}>
              <span>📸</span>
              <p>@HB__salonKalyan</p>
            </div>

            <div className={style.infoItem}>
              <span>📞</span>
              <p>+91 8329328173</p>
            </div>

            <div className={style.infoItem}>
              <span>📧</span>
              <p>
                <a
                  href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJNsMGsHrxSNbqWHQBXRChxrjQPsmjrFsXgfCKXggRrWGNpdXkwlkPPdDsLdqdTMPFQFVKg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lokeshborse2003@gmail.com
                </a>
              </p>
            </div>

            <div className={style.infoItem}>
              <span>📍</span>
              <p>
                <a
                  href="https://www.bing.com/maps/directions?FORM=HDRSC6&style=r&rtp=pos.18.520761489868164_73.85540771484375_Pune%252C%2520Pune%2520District%252C%2520Maharashtra_Pune%252C%2520Pune%2520District%252C%2520Maharashtra_%7Epos.19.24323272705078_73.12992095947266_Shop%2520No.%25201%252F2%252C%2520Sun%2520Soman%2520Square%252C%2520Datar%2520Block%252C%2520Kalyan%2520Agra%2520Road%252C%2520Sahjanand%2520Chowk%252C%2520Kalyan%2520West%252C%2520Mumbai%252C%2520Maharashtra%2520421301_Jockey%2520Exclusive%2520Store_&cp=18.881522%7E73.432625&lvl=9.7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop No. 21, DB Chowk, Kalyan West, Mumbai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={style.footerSection}>
        <div className={style.footerContainer}>
          <div className={style.footerTop}>
            <h3>HB SALON</h3>
            <p>Your style, our statement.</p>

            {/* 🔥 Hover Policies */}
            <div className={style.policyWrapper}>
              <div className={style.policyItem}>
                Privacy Policy
                <div className={style.policyBox}>
                  At HB Salon, customer privacy is our top priority. All personal
                  details shared during booking or service are kept strictly
                  confidential and never shared with third parties.
                </div>
              </div>

              <div className={style.policyItem}>
                Terms of Service
                <div className={style.policyBox}>
                  We use professional creams and cosmetic products. Before any
                  service, our staff will consult you to ensure comfort and
                  suitability of products used on your skin and hair.
                </div>
              </div>

              <div className={style.policyItem}>
                Refund Policy
                <div className={style.policyBox}>
                  Refunds are applicable only if the appointment is cancelled at
                  least 2 hours before the scheduled time. In such cases, 20%
                  of the booking amount will be deducted as a service charge.
                </div>
              </div>
            </div>
          </div>

          <div className={style.footerBottom}>
            <p>© 2026 HB Salon. All rights reserved.</p>
            <p>
              Designed & Developed by <b> Er.Lokesh Borse</b>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
