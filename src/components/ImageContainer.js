import AboutCarousel from "../routes/AboutCarousel";
import "./ImageContainer.css"
import Projector from "./Projector"

export default function ImageContainer({children, imgUrl, imgAlt, url, position, carousel}) {

    const handleClick = () => {
        window.open(url, '_blank');
      };

    return (
        <div className="image-container">

            {carousel ? 
                <AboutCarousel /> 
            :   
            <>
                <img 
                className="image-container-img"
                src={process.env.PUBLIC_URL + imgUrl} 
                alt={imgAlt} 
                // style={{...cursor}}
            />
                <div className="sceen-flicker-line"></div>
                <div className="image-container-img-holographic" 
                ></div> 
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
            </>
            }

        <div className="image-container-light-holder">
            <div 
                className="image-container-light"
            ></div>
            <div 
                className="image-container-light-glow"
            ></div>
        </div>
            <Projector position={position}/>
            {children}
    </div>
    )
}