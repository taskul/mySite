import { useEffect } from "react";
import Description from "../components/Description";
import ImageContainer from "../components/ImageContainer";
import MainContainer from "../components/MainContainer";
import ProjectTitle from "../components/ProjectTitle";
import projects from "../data/projectsData";
import BoxContainer from "../scroll_components/BoxContainer";


export default function ProjectsPage() {

  useEffect(() => {
    document.title = "Tastan's Projects Page"
 }, []);


    return (
      <MainContainer>
      <BoxContainer num={1} fieldset={"Project #01"}>
        <ProjectTitle title={"VizEnv"} />
          <ImageContainer 
            imgUrl={"/imgs/vizenv.png"} 
            imgAlt={"VizEnv Project"}
            position={'right'}  
            url={'http://vizenv.xyz/'}
          />
          
          <Description textArr={[projects[2].description, projects[2].techStack]}/>
      </BoxContainer>

        <BoxContainer num={2} fieldset={"Project #02"}>
          <ImageContainer 
          imgUrl={"/imgs/dnd-den.jpg"} 
          imgAlt={"DND Den Project"} 
          position={'left'}
          url={'https://dnd-game.onrender.com/'}
        />
        <ProjectTitle title={"DnD Den"} />
          <Description textArr={[projects[0].description, projects[0].techStack]}/>
      </BoxContainer> 

      <BoxContainer num={3} fieldset={"Project #03"}>
      <ProjectTitle title={"Peapods"} />
        <ImageContainer 
          imgUrl={"/imgs/peapods.jpg"} 
          imgAlt={"Peapods Project"}
          position={'right'}  
          url={'https://peapods.onrender.com/'}
        />
        
        <Description textArr={[projects[1].description, projects[1].techStack]}/>
      </BoxContainer>
    </MainContainer>

    )
}