import { TypeAnimation } from "react-type-animation";
import ImageContainer from "../components/ImageContainer";
import BoxContainer from "../scroll_components/BoxContainer";
import Description from "../components/Description";
import description from "../data/descriptionData";
import ProjectTitle from "../components/ProjectTitle";
import MainContainer from "../components/MainContainer";
import aboutMe from "../data/aboutMe";
import SocialIcons from "../components/SocialIcons";

export default function AboutPage() {
    return (
      <MainContainer> 
        <BoxContainer num={1} fieldset={"About Me #1"} color={"ffd500e5"}>
        <ImageContainer 
          imgUrl={"/imgs/my_photos/my_photo.jpg"} 
          imgAlt={"Tastan profile"}
          position={'left'}  
        />
        <div className='typed-text-container'>
          <TypeAnimation
            sequence={[
              "Design",
              1000,
              "Create",
              1000,
              "Deploy",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </div>
        <Description textArr={[description[0], description[1]]}/>
        <SocialIcons />
      </BoxContainer>

      <BoxContainer num={2} fieldset={"About Me #2"}>
        <ProjectTitle title={"About me"} />
        <ImageContainer 
          imgUrl={"/imgs/dnd-den.jpg"} 
          imgAlt={"DND Den Project"} 
          position={'right'}
          carousel={true}
        />
          <Description textArr={[...aboutMe]}/>
    </BoxContainer> 
    </MainContainer>
    )
}
