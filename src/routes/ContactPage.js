import ContactUs from "../components/ContactForm";
import MainContainer from "../components/MainContainer";
import SocialIcons from "../components/SocialIcons";
import BoxContainer from "../scroll_components/BoxContainer";
import "./ContactPage.css";

export default function ContactPage() {
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

