import React,{ useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import "../components/CarouselButtons.css"
import "../App.css"
import CarouselButtons from "../components/CarouselButtons"

export default function AboutCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [rotationAttributes, setRotationAttributes] = useState("");
    const [slideWidth, setSlideWidth] = useState(300);
    const indexCount = 5;

    const mediaMatch = window.matchMedia('(min-width: 500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addEventListener('change',handler);
      return () => mediaMatch.removeEventListener('change',handler);
    });


    useEffect(() => {
        function rotateCarousel() {
            let theta = 360 / indexCount;
            let radius = Math.round( ( slideWidth / 2) / Math.tan( Math.PI / indexCount ) );
            let angle = theta * selectedIndex * -1;
            let radiusMultiplier = matches ? 0.4 : 0.1;
            setRotationAttributes(`translateZ(${radius*radiusMultiplier}px) rotateY(${angle}deg)`)
        }
        rotateCarousel();
    }, [selectedIndex, slideWidth, matches]);

    const handleNextButton = () => {
        setSelectedIndex((prevIndex) => (
                prevIndex < indexCount-1 ? prevIndex + 1 : prevIndex * 1
            ));
    }

    const handlePreviousButton = () => {
        setSelectedIndex((prevIndex) => (
            prevIndex > 0 ? prevIndex - 1 : prevIndex * 1
        ));
    }

    return (
        <div className="main-container">
            <div className="carousel-container">
                <Carousel 
                    rotationAttributes={rotationAttributes}
                    currentSlide={selectedIndex}                
                />
                <CarouselButtons>
                <button 
                    className="dark-round-button" 
                    onClick={handlePreviousButton}
                    aria-label="previous slide"
                    style={{
                        ariaDisabled: selectedIndex === 0 ? true : false,
                        opacity: selectedIndex === 0 ? 0.5: 1,
                    }}                
                >{"<"}</button>
                <button 
                    className="dark-round-button" 
                    onClick={handleNextButton}
                    aria-label="next slide"
                    style={{
                        ariaDisabled: selectedIndex === 0 ? true : false,
                        opacity: selectedIndex === indexCount-1 ? 0.5: 1
                    }} 
                >{">"}</button>
                </CarouselButtons>
            </div>

        </div>

    )
}