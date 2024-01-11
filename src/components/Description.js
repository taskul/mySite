import "./Description.css"

export default function Description({textArr}) {
    return (
        <div className="description-container">
            {textArr.map((text, idx) => (
                <p className="description-text" key={idx}>{text}</p>
            ))}
        </div>
    )
}