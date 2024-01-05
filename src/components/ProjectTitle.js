import "../scroll_components/BoxContainer.css"

export default function ProjectTitle({title}) {
    return (
        <div className="typed-text-container">
            <span>{title}</span>
        </div>
    )
}