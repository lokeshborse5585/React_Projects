import React from 'react';
import style from './Gallery.module.css';
import pic1 from './assets/pic1.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';

const Gallery = () => {
  // Right click rokne ke liye function
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const shopData = [
    { id: 1, src: pic1 },
    { id: 2, src: "https://i.pinimg.com/736x/31/e0/c5/31e0c531631a63c46478783979312100.jpg" },
    { id: 3, src: pic3 },
    { id: 4, src: pic4 },
    { id: 5, src: pic5 },
    { id: 6, src: pic6 },
    { id: 7, src: "https://content.jdmagicbox.com/comp/asansol/i4/9999px341.x341.190105121643.s8i4/catalogue/sharmi-s-hair-and-beauty-a-professional-family-salon-asansol-beauty-spas-for-women-iblbcv9omz.jpg"},
    { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJboEzf0MgartAH5GKjsJhvOjD2-0iuzC6Q&s" },
    { id: 9, src: "https://content.jdmagicbox.com/v2/comp/mangalore/l3/0824px824.x824.230629143031.k7l3/catalogue/unique-professional-unisex-salon-haleangadi-mangalore-salons-xjktsx7578-250.jpg"},
    { id: 10, src: "https://www.joonsquare.com/usermanage/image/business/niks-international-salon-pune-37032/niks-international-salon-pune-niks-international-salon-1.jpg"},
    { id: 11, src: "https://content.jdmagicbox.com/comp/pune/v7/020pxx20.xx20.230305231552.a4v7/catalogue/mirrored-the-unisex-salon-ravet-pune-beauty-parlours-1g6ombxmrc-250.jpg" },
    { id: 12, src: "https://vurvesalon.com/wp-content/uploads/2023/06/hand-and-foot-spa.png" },
    { id: 13, src: "https://phoenixgroomingstudio.in/wp-content/uploads/2024/10/Hair-Spa-Treatment-at-Home.jpg" },
    { id: 14, src: "https://assets.unileversolutions.com/v1/141933909.jpg" },
    { id: 15, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcYDHODcRDEKOsNB4Z3QxqMmf5DGZp2PIyg&s" },
  ];

  return (
    <div 
      className={style.galleryWrapper} 
      onContextMenu={handleContextMenu} // Pura wrapper pe right-click band
    >
      <h1 className={style.galleryTitle}>HB <span>OUTLET</span></h1>
      <div className={style.titleLine}></div>

      <div className={style.galleryGrid}>
        {shopData.map((photo) => (
          <div key={photo.id} className={style.photoItem}>
            <img 
              src={photo.src} 
              alt="PNB Shop" 
              className={style.shopImg}
              loading="lazy" 
              onContextMenu={handleContextMenu} 
              onDragStart={(e) => e.preventDefault()} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;