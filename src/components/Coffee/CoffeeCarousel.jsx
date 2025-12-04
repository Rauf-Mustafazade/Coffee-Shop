import { useState } from "react";
import "./CoffeeCarousel.css";

export default function CoffeeCarousel({ products = [] }) {
    const visibleCount = 4;
    const total = products.length;

    const [startIndex, setStartIndex] = useState(0);

    if (total === 0) return null;

    const canScroll = total > visibleCount;

    const visibleItems = [];
    for (let i = 0; i < Math.min(visibleCount, total); i++) {
        const index = (startIndex + i) % total;
        visibleItems.push(products[index]);
    }

    const handlePrev = () => {
        if (!canScroll) return;
        setStartIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        if (!canScroll) return;
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
                                onClick={handlePrev}
                            >
                                &#10094;
                            </button>
                        )}

                        <div className="coffee-carousel__track">

                            {visibleItems.map((item) => {
                                // ← вот тут правильно!
                                const [isLoaded, setIsLoaded] = useState(false);

                                return (
                                    <div className="coffee-card" key={item.id}>
                                        <div className="coffee-card__image-wrapper">

                                            {!isLoaded && (
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
                                                    alt="Loading..."
                                                    className="coffee-card__image coffee-card__loader"
                                                />
                                            )}

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="coffee-card__image"
                                                style={{ display: isLoaded ? "block" : "none" }}
                                                onLoad={() => setIsLoaded(true)}
                                            />

                                            <button className="coffee-card__heart">♥</button>
                                        </div>

                                        <div className="coffee-card__body">
                                            <div className="coffee-card__header">
                                                <h3 className="coffee-card__title">{item.title}</h3>
                                                <span className="coffee-card__price">{item.price}</span>
                                            </div>
                                            <p className="coffee-card__description">{item.description}</p>
                                            <button className="coffee-card__btn">Order now</button>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {canScroll && (
                            <button
                                className="coffee-carousel_arrow coffee-carousel_arrow--right"
                                onClick={handleNext}
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
