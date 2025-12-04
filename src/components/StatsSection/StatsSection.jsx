// src/components/StatsSection.jsx
import { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

const statsData = [
    { value: 24, label: "Branches", image: "https://i.pinimg.com/736x/50/98/08/509808b0da87e5e82c39d58228adb924.jpg" },
    { value: 7158, label: "HAPPY CLIENTS", image: "https://i.pinimg.com/1200x/57/36/5a/57365a9fa45a00d2a402e8c24c4f59dd.jpg" },
    { value: 3129, label: "WORKING HOURS", image: "https://i.pinimg.com/736x/3e/2e/3b/3e2e3b85c9ebfd74af8ae732ec98e0c8.jpg" },
    { value: 5282, label: "CUPS OF COFFEE", image: "https://i.pinimg.com/736x/c1/ff/b0/c1ffb0fb5b597299da0e38f16c9492c8.jpg" },
];

// форматирование: 2324 → "2.324"
function formatNumber(num) {
    return num.toLocaleString("en-US").replace(/,/g, ".");
}

export default function StatsSection() {
    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    // анимация счёта
    useEffect(() => {
        if (!hasStarted) return;

        const duration = 1800; // мс
        const fps = 60;
        const totalFrames = Math.round((duration / 1000) * fps);

        let frame = 0;

        const interval = setInterval(() => {
            frame++;
            setCounts(
                statsData.map((item) =>
                    Math.min(Math.round((item.value * frame) / totalFrames), item.value)
                )
            );
            if (frame >= totalFrames) clearInterval(interval);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [hasStarted]);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-inner">
                <h2 className="stats-title">
                    We Are Increasing Business
                    <br />
                    Success With IT Solution
                </h2>

                <div className="stats-grid">
                    {statsData.map((item, index) => (
                        <div className="stat-card" key={item.label}>
                            <div
                                className="stat-bg"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="stat-overlay" />

                            <div className="stat-content">
                                <span className="stat-value">
                                    {formatNumber(counts[index])}
                                </span>
                                <span className="stat-label">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
