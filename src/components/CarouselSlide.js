import "./carousel.css";
import { Link } from "react-router-dom";

export default function CarouselSlide({img, alt, description, techStack, url, opacity, coverOpacity, display}) {

    const handleClick = () => {
        window.open(url, '_blank');
      };
    

    return (
        <div className="carousel-slide" >
            <img 
                src={process.env.PUBLIC_URL + img} 
                alt={alt} 
                className="carousel-slide-img"
                style={{opacity}}
                
            />
            {url ?
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-slide-link"
                    onClick={handleClick}
                >
                </a>
                :
                null
            }
            <div className="carousel-light-holder">
                <div 
                    className="carousel-light"
                    style={{display}}
                ></div>
                <div 
                    className="carousel-light-glow"
                    style={{display}}
                ></div>
            </div>
            <div className="text-display-container"> 
                <div 
                    className="carousel-text-display"
                    style={{display}}
                >
                    <p className="blinking-light">● ● ●</p>
                </div>
                <div 
                    className="carousel-text-light-glow"
                    style={{display}}
                    ></div>
                <div 
                    className="carousel-text-light"
                    style={{display}}
                ></div>
                <div 
                    className="carousel-text"
                    style={{display}}
                >
                    <p className="typewriter-text" >
                        {description}
                        <br/>
                        <br/>
                        <span className="carousel-subtext">Built using: {techStack}</span>
                    </p>
                     </div>
            </div>
               
            
            <div 
                className="carousel-slide-cover"
                style={{opacity: coverOpacity}}
            ></div>
        </div>
    )
}

