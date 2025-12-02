// import React from 'react'
// import './Comments.css'

// import comments1 from "../../assets/comments1.png"

// import './styles.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper/modules';


// const Comments = () => {
//     return (
//         <div className='back-color'>
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 centeredSlides={false}
//                 slidesOffsetBefore={-20}   
//                 initialSlide={0}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src={comments1} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={comments1} />

//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default Comments

import React, { useState } from "react";
import "./Comments.css";

const customersData = [
    {
        img: "https://i.pravatar.cc/150?img=1",
        text: "You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        name: "James K.",
        job: "Customer",
        stars: 5
    },
    {
        img: "https://i.pravatar.cc/150?img=5",
        text: "Just what I was looking for. Thank you for making it painless and pleasant. All products are great.",
        name: "Megen W.",
        job: "Customer",
        stars: 5
    },
    {
        img: "https://i.pravatar.cc/150?img=10",
        text: "I am really satisfied with your service. This is simply unbelievable! I recommend it to everyone.",
        name: "Alicia R.",
        job: "Customer",
        stars: 5
    }
];

const Comments = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % customersData.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + customersData.length) % customersData.length);
    };

    return (
        <div className="customers-container">
            <div className="customers-text">
                <h1>This Is What Our Customers Say</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
            </div>

            <div className="slider-wrapper">
                {customersData.map((item, i) => {
                    let position = "customer-card";

                    if (i === index) {
                        position = "customer-card active";
                    } else if (i === (index - 1 + customersData.length) % customersData.length) {
                        position = "customer-card left";
                    } else if (i === (index + 1) % customersData.length) {
                        position = "customer-card right";
                    }

                    return (
                        <div className={position} key={i}>
                            <img src={item.img} alt="customer" />

                            <div className="card-content">
                                <p>{item.text}</p>

                                <div className="stars">
                                    {"★".repeat(item.stars)}
                                </div>

                                <div className="card-name">{item.name}</div>
                                <div className="card-job">{item.job}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="nav-buttons">
                <button onClick={prevSlide}>‹</button>
                <button onClick={nextSlide}>›</button>
            </div>
        </div>
    );
};

export default Comments;