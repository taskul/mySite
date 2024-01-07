import "./carousel.css";

export default function CarouselSlide({img, alt, description, techStack, opacity, coverOpacity, display}) {

    

    return (
        <div className="carousel-slide" >
            <img 
                src={process.env.PUBLIC_URL + img} 
                alt={alt} 
                className="carousel-slide-img"
                style={{opacity}}

            />            

            <div className="carousel-flicker-line"></div>
            <div className="carousel-holographic" 
                style={{boxShadow: opacity === 1 ? "0px 0px 10px #7FC7D9" : "none"}}
            ></div>
            
            <div 
                className="carousel-slide-cover"
                style={{opacity: coverOpacity}}
            ></div>
        </div>
    )
}

