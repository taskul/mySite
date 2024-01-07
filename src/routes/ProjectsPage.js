import Description from "../components/Description";
import ImageContainer from "../components/ImageContainer";
import MainContainer from "../components/MainContainer";
import ProjectTitle from "../components/ProjectTitle";
import projects from "../data/projectsData";
import BoxContainer from "../scroll_components/BoxContainer";


export default function ProjectsPage() {
    return (
      <MainContainer>
        <BoxContainer num={2} fieldset={"Project #01"}>
        <ProjectTitle title={"DnD Den"} />
        <ImageContainer 
          imgUrl={"/imgs/dnd-den.jpg"} 
          imgAlt={"DND Den Project"} 
          position={'right'}
          url={'https://dnd-game.onrender.com/'}
        />
          <Description textArr={[projects[0].description, projects[0].techStack]}/>
      </BoxContainer> 
      <BoxContainer num={3} fieldset={"Project #02"}>
        <ImageContainer 
          imgUrl={"/imgs/peapods.jpg"} 
          imgAlt={"Peapods Project"}
          position={'left'}  
          url={'https://peapods.onrender.com/'}
        />
        <ProjectTitle title={"Peapods"} />
        <Description textArr={[projects[1].description, projects[1].techStack]}/>
      </BoxContainer>
    </MainContainer>

    )
}