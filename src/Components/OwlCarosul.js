import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default function NotoriousOwlCarousel(){

 
        const options = {
          loop: true,
          margin: 10,
          items: 1,
          autoplay: true
        };

return(
    <>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
        
            <div class="item">
                <img src="assets/img/1.jpg" />
            </div>
            <div class="item">
                <img src="assets/img/2.jpg" />
            </div>
            <div class="item">
                <img src="assets/img/3.jpg" />
            </div>
            <div class="item">
                <img src="assets/img/4.jpg" />
            </div>
            <div class="item">
                <img src="assets/img/5.jpg" />
            </div>
      
    </OwlCarousel>
</>
)
};