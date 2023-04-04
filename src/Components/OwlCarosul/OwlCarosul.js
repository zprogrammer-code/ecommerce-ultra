import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function NotoriousOwlCarousel(){


return(
    <>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
        
            <div class="item">
                <img src="assets/img/1.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="assets/img/2.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="assets/img/3.jpg"  alt=""/>
            </div>
            <div class="item">
                <img src="assets/img/4.jpg" alt=""/>
            </div>
            <div class="item">
                <img src="assets/img/5.jpg" alt=""/>
            </div>
      
        </OwlCarousel>
</>
);
};

export default NotoriousOwlCarousel


