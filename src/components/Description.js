import "./Description.css"

export default function Description({textArr}) {
    return (
        <div className="description-container">
            {textArr.map(text => (
                <p className="description-text">{text}</p>
            ))}
        </div>
    )
}