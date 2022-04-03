import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/bird/banner1.jpg'
import img2 from '../../../images/fish/banner2.jpg'
import img3 from '../../../images/animel/banner3.jpg'


const Banner = () => {
    return (
        
             <>

               <Carousel>
                    <Carousel.Item interval={3000}>
                    <img
                         className="d-block w-100"
                         src={img1}
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h1>WELCOME TO PET HOUSE</h1>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                    <img
                         className="d-block w-100"
                         src={img2}
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h1>FIND YOUR DREAM PET</h1>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                    <img
                         className="d-block w-100"
                         src={img3}
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h1>BEST PLACE FOR BUY PET</h1>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </>
        
    );
};

export default Banner;