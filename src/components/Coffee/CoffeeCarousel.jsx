// src/components/CoffeeCarousel.jsx
import { useState } from "react";
import "./CoffeeCarousel.css";

export default function CoffeeCarousel({ products = [] }) {
    const visibleCount = 4;
    const total = products.length;

    const [startIndex, setStartIndex] = useState(0);

    if (total === 0) return null;

    const canScroll = total > visibleCount;

    // показываем 4 карточки по кругу
    const visibleItems = [];
    for (let i = 0; i < Math.min(visibleCount, total); i++) {
        const index = (startIndex + i) % total;
        visibleItems.push(products[index]);
    }

    const handleNext = () => {
        if (!canScroll) return;
        // вправо: 1 2 3 4 → 8 1 2 3
        setStartIndex((prev) => (prev - 1 + total) % total);
    };

    const handlePrev = () => {
        if (!canScroll) return;
        // влево: 1 2 3 4 → 2 3 4 5
        setStartIndex((prev) => (prev + 1) % total);
    };

    return (
        <div className="all">
            <section className="coffee-section">
                <div className="coffee-section__bg"></div>

                <div className="coffee-section__inner">
                    <h2 className="coffee-section__title">Our Specials</h2>
                    <p className="coffee-section__subtitle">
                        Discover our most loved dishes, freshly prepared for you.
                    </p>

                    <div className="coffee-carousel">
                        {canScroll && (
                            <button
                                className="coffee-carousel_arrow coffee-carousel_arrow--left"
                                onClick={handleNext}
                            >
                                &#10094;
                            </button>
                        )}

                        <div className="coffee-carousel__track">
                            {visibleItems.map((item) => (
                                <div className="coffee-card" key={item.id}>
                                    <div className="coffee-card__image-wrapper">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="coffee-card__image"
                                        />
                                        <button className="coffee-card__heart">♥</button>
                                    </div>

                                    <div className="coffee-card__body">
                                        <div className="coffee-card__header">
                                            <h3 className="coffee-card__title">{item.title}</h3>
                                            <span className="coffee-card__price">{item.price}</span>
                                        </div>
                                        <p className="coffee-card__description">
                                            {item.description}
                                        </p>
                                        <button className="coffee-card__btn">Order now</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {canScroll && (
                            <button
                                className="coffee-carousel_arrow coffee-carousel_arrow--right"
                                onClick={handlePrev}
                            >
                                &#10095;
                            </button>
                        )}
                    </div>
                </div>
            </section>



        </div>




    );
}


