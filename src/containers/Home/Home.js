import React from 'react';
import NavBar from '../../components/navbar/navbar'
import Slider from 'react-slick';
import classes from './styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () =>{

    const test  = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const test1  = 'https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg'
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        autoplaySpeed: 10000,
        autoplay: true,
        centerMode: true,
      };
      return (
          <div className = {classes.container}>
              <NavBar/>
            <h2>Welcome To Whats Cooking</h2>
            <Slider {...settings}>
            <div>
                <img src = {test}/>
            </div>
            <div>
                <img src = {test1}/>
            </div>
            <div>
                <img src = {test}/>
            </div>
            <div>
                <img src = {test1}/>
            </div>
            <div>
                <img src = {test}/>
            </div>
            <div>
                <img src = {test1}/>
            </div>
            </Slider>
        </div>
      )
}

export default Home;