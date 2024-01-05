import "./Projector.css"

export default function Projector({position}) {

    const rotation = position === 'left'? '0deg' : '180deg';
    const leftMargin = position === 'left'? '100px' : '-110px';

    return (
        <div className="projector-container">
            <div 
                className="projector-outter-ring"
                style={{rotate: rotation, marginLeft: leftMargin}}
            >
                <div className="projector-middle-ring">
                     <p className="blinking-light">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</p>
                </div>
                <div className="projector-inner-ring"></div>
            </div>
        </div>
    )
}