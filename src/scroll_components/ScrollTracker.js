import { useEffect, useState } from "react";
import "./ScrollTracker.css";

export default function ScrollTracker() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercentage);
            console.log(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="scroll-tracker-container">
            
            <div className="scroll-tracker" style={{width: `${scrollPercentage}%`}}>
            </div><span className="scroll-tracker-percentage">{"[" + Math.ceil(scrollPercentage) +"]"}</span>
        </div>
    )
}