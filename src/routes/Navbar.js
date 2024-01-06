import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false)
    }

    return (
        <nav className="NavBar">
            <div
                className={`NavBar-mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`NavBar-links ${isOpen ? "active" : ""}`}>
                <div className="NavBar-userNav">
                    <div className="NavBar-btn-holder">
                        <li className="NavBar-link-left-btn" onClick={closeNavbar}
                        >
                            <NavLink to='/'>About me</NavLink>
                        </li>
                        <li className="NavBar-link-center-btn" onClick={closeNavbar}>
                            <NavLink to='/projects'>Projects</NavLink>
                        </li>
                        <li className="NavBar-link-right-btn" onClick={closeNavbar}>
                            <NavLink to='/contact'>Contact Me</NavLink>
                        </li>
                    </div>
                </div>
        </ul>
    </nav>
    )
}