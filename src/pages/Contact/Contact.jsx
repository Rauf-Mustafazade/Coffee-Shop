import React from 'react'
import './Contact.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Contact = () => {
  return (
    <>
      <div className="contact-all">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://www.potsandpans.in/cdn/shop/articles/Copy_of_Blog_Templates_-_2024-07-19T124527.718.png?v=1721373464" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://darkhorsecoffee.co.nz/cdn/shop/files/Untitled_1600_x_600_px_1_1600x.png?v=1752799287" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://www.methodmag.com/asset/1A2ACB3B-D3EE-43D4-86A5E0F68A1F4F1F/fullwidthTopHeight/222d9300aa3ebdc90ec94b94fbdb7718/" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://bluestonelane.com/wp-content/uploads/2017/10/227-Front-V2a-1600x600.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://bluestonelane.com/wp-content/uploads/2017/08/46A4730_1-1600x600.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/1200x/f4/b4/68/f4b468c720a97521602be6095de1abec.jpg" alt="" /></SwiperSlide>

        </Swiper>

        <section className="map">
          <iframe className='mapif' src="https://yandex.ru/map-widget/v1/?um=constructor%3Af67a4db146ba1ef149da552781ee8bce281892ed1bd67094a7da4a40333d1167&amp;
        source=constructor" width="100%" height="486" frameborder="0"></iframe>
        </section>
        <section className='contact'>
          <div className="contacts">
            <div className="contacts-us">
              <div className="con">
                <h4>CONTACT US</h4>
              </div>
              <div className="location">
                <div className="icon">
                  <img src="https://preview.colorlib.com/theme/gutim/img/icon/icon-1.png" alt="" />
                </div>
                <div className="word">
                  <h5>Our Location</h5>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="phone">
                <div className="icon">
                  <img src="https://preview.colorlib.com/theme/gutim/img/icon/icon-2.png" alt="" srcset="" />
                </div>
                <div className="word">
                  <h5>Phone</h5>
                  <p>+65 11.188.888</p>
                </div>
              </div>
              <div className="mail">
                <div className="icon">
                  <img src="https://preview.colorlib.com/theme/gutim/img/icon/icon-3.png" alt="" srcset="" />
                </div>
                <div className="word">
                  <h5>Mail</h5>
                  <p>hellocolorlib@ gmail.com</p>
                </div>
              </div>
            </div>

            <div className="leave">
              <div className="leaves">
                <h4>LEAVE A COMMENT</h4>
              </div>
              <div className="inputt">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your email" />
                <form >
                  <textarea name="message" rows="10" cols="30" placeholder="Your message"></textarea>
                  <br /><br />

                </form>
              </div>
              <div className="iinput">
                <button id="send">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  )
}

export default Contact