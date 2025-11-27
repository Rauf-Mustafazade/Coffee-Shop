import React from 'react'
import './Home.css'

import CoffeeCarousel from "../../components/Coffee/CoffeeCarousel.jsx";
import CoffeeDesert from "../../components/Coffee/CoffeeDesert.jsx";
import { coffeeProducts } from "../../components/Coffee/CoffeeProduct.js";
import { coffeeDesert } from "../../components/Coffee/CoffeeDesert.js";
import  Comments  from "../../components/Comments/Comments.jsx"

import cup2 from '../../assets/Group 2.png'
import cup3 from '../../assets/Group 3.png'
import cup4 from '../../assets/Group 4.png'
import cup5 from '../../assets/Group 5.png'

import beans1 from '../../assets/beans1.png'
import beans2 from '../../assets/beans2.png'
import beans3 from '../../assets/beans3.png'
import beans4 from '../../assets/beans4.png'


const Home = () => {
  return (
    <>
      <div className="home-back">
        <div className="home-word">
          <h5>Welcome</h5>
          <h1>We serve the
            richest coffee in
            the city!</h1>
          <p>Harvester Coffee is a Dubai-based company founded in 2020 that sources. </p>
          <button className='order'>Order Now</button>
        </div>

      </div>

      <section className='cup'>
        <div className="cup-all">
          <img src={cup2} alt="cup" />
          <img src={cup3} alt="cup" />
          <img src={cup4} alt="cup" />
          <img src={cup5} alt="desert" />
        </div>
      </section>

      <CoffeeCarousel products={coffeeProducts} />
      <CoffeeDesert products={coffeeDesert} />

      <section className='beans'>
        <img src={beans1} alt="" />
        <div className="beans-center">
          <h1>Check Out Our Best </h1>
          <h1>Coffee Beans</h1>
          <button>Explore Out Products<i class="fa-solid fa-angles-right"></i></button>
        </div>
        <img src={beans2} alt="" />
      </section>

      <Comments />

      <section className='beans2'>
        <img src={beans3} alt="" />
        <div className="beans-center2">
          <h1>Join in and ger 15% off!</h1>
          <p>Subscribe to our newsletter in get 15% off discount code.</p>
          <div className="input-button">
            <input type="text" placeholder='  Email address' />
            <button>Subscribe</button>
          </div>

        </div>
        <img src={beans4} alt="" />
      </section>



    </>
  )
}

export default Home