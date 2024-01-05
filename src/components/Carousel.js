import CarouselSlide from "./CarouselSlide";
import "./carousel.css";
import projects from "../data/projectsData";

export default function Carousel({rotationAttributes, currentSlide}) {
    return (
        <div className="carousel" 
        style={{transform: rotationAttributes}} 
        >
            {projects.map((project, idx) => (
                <CarouselSlide 
                    key={project.img}
                    img={project.img}
                    alt={project.alt}
                    description={project.description}
                    url={idx === currentSlide ? project.url : null}
                    techStack={project.techStack}
                    opacity={idx === currentSlide ? 1 : 0.3}
                    coverOpacity={idx === currentSlide ? 0 : 0.9}
                    display={idx === currentSlide ? "block" : "none"}
                />
            ))}
        </div>
    )
}