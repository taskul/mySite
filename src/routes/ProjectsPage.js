import Description from "../components/Description";
import ImageContainer from "../components/ImageContainer";
import ProjectTitle from "../components/ProjectTitle";
import projects from "../data/projectsData";
import BoxContainer from "../scroll_components/BoxContainer";


export default function ProjectsPage() {

    return (
        <BoxContainer num={2} fieldset={"Project #01"}>
        <ProjectTitle title={"DnD Den"} />
        <ImageContainer 
          imgUrl={"/imgs/dnd-den.jpg"} 
          imgAlt={"DND Den Project"} 
          position={'right'}
        />
          <Description textArr={[projects[0].description, projects[0].techStack]}/>
      </BoxContainer> 

    )
}