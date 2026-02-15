import React from 'react';
import style from './About.module.css';
import directorPhoto from './assets/owner.png'; // Screenshot jaisi photo yahan daal

const AboutHero = () => {
  const handleContextMenu = (e) => e.preventDefault();

  return (
    <section className={style.heroWrapper} onContextMenu={handleContextMenu}>
      <div className={style.container}>
        
        {/* Left Side: Content */}
        <div className={style.contentSide}>
          <h1 className={style.mainHeading}>
            Your Guide to the <br />
            <span>Best Grooming Expert</span>
          </h1>
          <p className={style.description}>
             Hi, I'm <strong>[Hemant Borse]</strong>. I personally mentor every stylist 
             and hand-pick every product to ensure excellence. Navigating the world of 
             hair and skin care shouldn't be a struggle — my team and I are here 
           <u>to simplify it for you</u>.
         </p>
        </div>

        {/* Right Side: Image */}
        <div className={style.imageSide}>
          <img 
            src={directorPhoto} 
            alt="Director PNB" 
            className={style.heroImg}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;