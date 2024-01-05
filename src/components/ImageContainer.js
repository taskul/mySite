import "./ImageContainer.css"
import Projector from "./Projector"

export default function ImageContainer({children, imgUrl, imgAlt, url, position}) {

    const cursor = url? {cursor: "pointer"} : '';

    return (
        <div className="image-container">
            <img 
                className="image-container-img"
                src={process.env.PUBLIC_URL + imgUrl} 
                alt={imgAlt} 
                style={{...cursor}}
            />
            <div className="sceen-flicker-line"></div>
            <div className="image-container-img-holographic" style={{...cursor}}></div>
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