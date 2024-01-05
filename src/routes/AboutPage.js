import { TypeAnimation } from "react-type-animation";
import ImageContainer from "../components/ImageContainer";
import BoxContainer from "../scroll_components/BoxContainer";
import Description from "../components/Description";
import description from "../data/descriptionData";

export default function AboutPage() {
    return (
        <BoxContainer num={1} fieldset={"About Me #0"} color={"ffd500e5"}>
        <ImageContainer 
          imgUrl={"/imgs/my_photos/my_photo.jpg"} 
          alt={"photo of Tastan"}
          url={'yet'}
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
      </BoxContainer>
    )
}
