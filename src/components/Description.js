import "./Description.css"

export default function Description({textArr}) {
    return (
        <div className="description-container">
            <p className="description-text">{textArr[0]}</p>
            <p className="description-text">{textArr[1]}</p>
        </div>
    )
}