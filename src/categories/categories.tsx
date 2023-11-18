// import './categories.css'
// import '../index.css'


// const Categories: React.FC = () => {  
//   return (
//     <>
//       <section className="section-categories">
//         <a href="#" className="category-link">
//           <img src="src\assets\categories\accessories.png" className="category-photo" />
//           <p className="category-description">Accessories</p>
//         </a>
//         <a href="#" className="category-link">
//           <img src="src\assets\categories\camera.png" className="category-photo camera" />
//           <p className="category-description">Camera</p>
//         </a>
//         <a href="#" className="category-link">
//           <img src="src\assets\categories\laptop.png" className="category-photo laptop" />
//           <p className="category-description">Laptop</p>
//         </a>
//         <a href="#" className="category-link">
//           <img src="src\assets\categories\smartphone.png" className="category-photo" />
//           <p className="category-description">Smartphone</p>
//         </a>
//       </section>
//     </>
//   )
// }

// export default Categories

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'
import './categories.css'

const Categories: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div>
      <section>
      <Slider {...settings}>
          <a href="#" className="category-link">
           <img src="src\assets\categories\accessories.png" className="category-photo" />
           <p className="category-description">Accessories</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\camera.png" className="category-photo camera" />
           <p className="category-description">Camera</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\laptop.png" className="category-photo laptop" />
           <p className="category-description">Laptop</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\smartphone.png" className="category-photo" />
            <p className="category-description">Smartphone</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\smartphone.png" className="category-photo" />
            <p className="category-description">Smartphone</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\smartphone.png" className="category-photo" />
            <p className="category-description">Smartphone</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\smartphone.png" className="category-photo" />
            <p className="category-description">Smartphone</p>
         </a>
         <a href="#" className="category-link">
           <img src="src\assets\categories\smartphone.png" className="category-photo" />
            <p className="category-description">Smartphone</p>
         </a>
      </Slider>
      </section>
    </div>
  );
}

export default Categories;