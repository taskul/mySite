import CarouselSlide from "./CarouselSlide";
import "./carousel.css";
import photos from "../data/myPhotosData";

export default function Carousel({rotationAttributes, currentSlide}) {
    return (
        <div className="carousel" 
        style={{transform: rotationAttributes}} 
        >
            {photos.map((project, idx) => (
                <CarouselSlide 
                    key={project.url}
                    img={project.url}
                    alt={project.alt}
                    description={project.description}
                    techStack={project.techStack}
                    opacity={idx === currentSlide ? 1 : 0.3}
                    coverOpacity={idx === currentSlide ? 0 : 0.9}
                    display={idx === currentSlide ? "block" : "none"}
                />
            ))}
        </div>
    )
}