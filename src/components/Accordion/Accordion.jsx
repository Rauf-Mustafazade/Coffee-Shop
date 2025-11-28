import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "How do I place an order?",
            content:
                "Choose your product, add it to the cart, and proceed to checkout. We will deliver your coffee as quickly as possible."
        },
        {
            title: "How long does delivery take?",
            content:
                "Local delivery usually takes between 1–3 days. For other regions, delivery may take 3–7 days."
        },
        {
            title: "Can I return a product?",
            content:
                "Yes, you can request a return within 14 days as long as the packaging is not damaged."
        },
        {
            title: "Where is your coffee sourced from?",
            content:
                "Our coffee comes from Colombia, Ethiopia, and Kenya. We work only with trusted plantations."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="blog-all">
            <div className="accordion-wrapper">
                {items.map((item, index) => (
                    <div key={index} className="acc-item">
                        <div className="acc-header" onClick={() => toggle(index)}>
                            <span className="acc-title">{item.title}</span>
                            <span className="acc-icon">{openIndex === index ? "-" : "+"}</span>
                        </div>

                        {openIndex === index && (
                            <div className="acc-content">{item.content}</div>
                        )}

                        <div className="acc-line"></div>
                    </div>
                ))}
            </div>
        </div>

    );
}

