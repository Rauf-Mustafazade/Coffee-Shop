import React from 'react'
import './Footer.css'

import starbucks from '../../assets/starbucks.jpg'
import caribou from '../../assets/caribou.jpg'
import cbtl from '../../assets/cbtl.jpg'
import costa from '../../assets/costa.jpg'
import friends from '../../assets/friends.jpg'
import gloria from '../../assets/gloria.jpg'
import illy from '../../assets/illy.jpg'
import nescafe from '../../assets/nescafe.jpg'

const Footer = () => {
  return (
<div className="all">
<div className="sponsor">
        <div className="sponsor-track">
          <div className="sp">
            <a href="https://www.starbucks.com/" target="_blank">
              <img src={starbucks} alt="starbucks" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.cariboucoffee.com.tr/" target="_blank">
              <img src={caribou} alt="caribou" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.coffeebean.com/" target="_blank">
              <img src={cbtl} alt="coffeebean" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.costacoffee.az/" target="_blank">
              <img src={costa} alt="costa" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.gloriajeans.com/" target="_blank">
              <img src={gloria} alt="gloria jeans" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.illy.com/es-es" target="_blank">
              <img src={illy} alt="illy" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.nescafe.com/us" target="_blank">
              <img src={nescafe} alt="nescafe" />
            </a>
          </div>

          <div className="sp">
            <a href="https://centralperk.com/" target="_blank">
              <img src={friends} alt="friends" />
            </a>
          </div>

          <div className="sp">
            <a href="https://www.starbucks.com/" target="_blank">
              <img src={starbucks} alt="starbucks" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.cariboucoffee.com.tr/" target="_blank">
              <img src={caribou} alt="caribou" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.coffeebean.com/" target="_blank">
              <img src={cbtl} alt="coffeebean" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.costacoffee.az/" target="_blank">
              <img src={costa} alt="costa" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.gloriajeans.com/" target="_blank">
              <img src={gloria} alt="gloria jeans" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.illy.com/es-es" target="_blank">
              <img src={illy} alt="illy" />
            </a>
          </div>
          <div className="sp">
            <a href="https://www.nescafe.com/us" target="_blank">
              <img src={nescafe} alt="nescafe" />
            </a>
          </div>
          <div className="sp">
            <a href="https://centralperk.com/" target="_blank">
              <img src={friends} alt="friends" />
            </a>
          </div>
        </div>
      </div>

    <footer>
      <section className='footerr'>
        <div className="footer-left">
          <h1>COFFEE</h1>
        </div>
        <div className="footer-center">
          <ul>
            <h2>PRIVACY</h2>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
          <ul>
            <h2>SERVICES</h2>
            <li>Shop</li>
            <li>Order ahead</li>
            <li>Menu</li>
          </ul>
          <ul>
            <h2>ABOUT US</h2>
            <li>Find a location</li>
            <li>About us</li>
            <li>Out story</li>
          </ul>
          <ul>
            <h2>INFOTNATION</h2>
            <li>Plons & pricing</li>
            <li>Sell your prodcts</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>SOCIAL MEDIA</h2>
          <div className="footer-icon">
            <a href="https://x.com/?lang=ru"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/?locale=ru_RU"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin-in"></i></a>

          </div>
        </div>
      </section>

    </footer>
</div>
    
  )
}

export default Footer