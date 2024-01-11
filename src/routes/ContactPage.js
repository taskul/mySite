import { useEffect } from "react";
import ContactUs from "../components/ContactForm";
import MainContainer from "../components/MainContainer";
import BoxContainer from "../scroll_components/BoxContainer";
import "./ContactPage.css";

export default function ContactPage() {

    useEffect(() => {
        document.title = "Tastan's Contact Me Page"
     }, []);

    return (
        <MainContainer>
            <BoxContainer num={1} fieldset={"Contact Me"} color={"ffd500e5"}>
                <div className="contact-container">
                    <ContactUs />
                    
                </div>
                
            </BoxContainer>
            

        </MainContainer>
    )
}

