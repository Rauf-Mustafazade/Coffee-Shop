import React from 'react'
import './Comments.css'

import comments1 from "../../assets/comments1.png"

// import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Comments = () => {
    return (
        <div className='back-color'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                slidesOffsetBefore={-20}   // можешь менять
                initialSlide={0}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={comments1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={comments1} />

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Comments