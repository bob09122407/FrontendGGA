// import React , { useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import "./AboutPage.css"
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '../../Images/images/trainer1.jpg';
// import slide_image_2 from '../../Images/images/trainer2.jpg';
// import slide_image_3 from '../../Images/images/trainer3.jpg';
// import slide_image_4 from '../../Images/images/trainer4.jpg';
// import slide_image_5 from '../../Images/images/trainer5.jpg';
// import slide_image_6 from '../../Images/images/trainer6.jpg';
// import slide_image_7 from '../../Images/images/trainer4.jpg';

// function App() {

//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiper = swiperRef.current.swiper;

//     const interval = setInterval(() => {
//       if (swiper) {
//         if (swiper.activeIndex === swiper.slides.length - 1) {
//           swiper.slideTo(0); // Go back to the first slide when reaching the last slide
//         } else {
//           swiper.slideNext(); // Go to the next slide
//         }
//       }
//     }, 3000); // Transition to the next slide every 3 seconds

//     return () => {
//       clearInterval(interval); // Clean up the interval on component unmount
//     };
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="heading">Team GGA</h1>
//       <Swiper
//           ref={swiperRef}
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         // autoplay={{ delay: 3 }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default App;

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import About2 from '../about2.js';

import slide_image_1 from '../../Images/Mitesh Desai.jpg';
import slide_image_2 from '../../Images/puru.jpg';
import slide_image_3 from '../../Images/Raj Joshi.jpg';
import slide_image_4 from '../../Images/su.jpg';
import slide_image_5 from '../../Images/Sunil Mehta.jpg';
import slide_image_6 from '../../Images/Susy maam.jpg';
// import slide_image_7 from '../../Images/.jpg';

const slidesData = [
  { image: slide_image_1, name: 'Trainer 1', role: 'Role 1' },
  { image: slide_image_2, name: 'Trainer 2', role: 'Role 2' },
  { image: slide_image_3, name: 'Trainer 3', role: 'Role 3' },
  { image: slide_image_4, name: 'Trainer 4', role: 'Role 4' },
  { image: slide_image_5, name: 'Trainer 5', role: 'Role 5' },
  { image: slide_image_6, name: 'Trainer 6', role: 'Role 6' },
];

function App() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0); // Go back to the first slide when reaching the last slide
        } else {
          swiper.slideNext(); // Go to the next slide
        }
      }
    }, 3000); // Transition to the next slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    
    <div className="container">
      <About2/>
      
      
      <h1 className="heading">Our Team</h1>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt="slide_image" />
            <div className="slide-info">
              <h3 className="slide-name">{slide.name}</h3>
              <p className="Para">{slide.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>

  );
}

export default App;


