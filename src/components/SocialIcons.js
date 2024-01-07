import "./SocialIcons.css";
export default function SocialIcons() {
    return (
        <div className="social-icons-container">
            <a 
                href="https://www.linkedin.com/in/tastankul/"
                className="social-icons-header"
            >
                <img src={process.env.PUBLIC_URL + "/assets/linkedin.png"} alt="linkedin" className="social-icon"/>
                LinkedIn
            </a>
            <a 
                href="https://github.com/taskul"         className="social-icons-header"
            >
                <img src={process.env.PUBLIC_URL + "/assets/github.png"} alt="github" className="social-icon"/>
                GitHub
            </a>
            <a 
                href="https://medium.com/@tastankulmeshkenov_42994"
                className="social-icons-header"
            >
                <img src={process.env.PUBLIC_URL + "/assets/medium.png"} alt="medium" className="social-icon"/>
                Medium
            </a>

        </div>
    )
}