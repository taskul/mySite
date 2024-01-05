import "./Photos.css";

export default function Photos({url, alt, description}) {
    return (
        <div className="photo-container">
            <img 
                src={process.env.PUBLIC_URL + url}
                alt={alt}
                className="photo"
            />
            <div class="photo-overlay">
                <div class="photo-overlay-text">{description}</div>
            </div>
        </div>
    )
}