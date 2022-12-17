import React from 'react'

import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import slide4 from '../img/slide4.jpg'
import slide5 from '../img/slide5.jpg'
const Slides = () => {
  return (
    <div id="slides">
    <div class="overlay"></div>

    <div class="slides-container">
        <img src={slide1} alt=""/>
        <img src={slide2} alt=""/>
        <img src={slide3} alt=""/>
        <img src={slide4} alt=""/>
        <img src={slide5} alt=""/>


    </div>
    <div class="titleMessage">
        <div class="heading">
            <p class="main">BACHIR AHMED RACHID</p>
            <p class="sub typed"></p>
        </div>
    </div>
    <nav class="slides-navigation">
        <a href="#" class="next"></a>
        <a href="#" class="prev"></a>
    </nav>
</div>
  )
}

export default Slides