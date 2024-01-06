import './App.css';
import NavBar from './routes/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollTracker from './scroll_components/ScrollTracker';
import BoxContainer from './scroll_components/BoxContainer';
import MainContainer from './components/MainContainer';
import { TypeAnimation } from 'react-type-animation';
import ImageContainer from './components/ImageContainer';
import Description from './components/Description';
import description from './data/descriptionData';
import ProjectTitle from './components/ProjectTitle';
import projects from './data/projectsData';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Tastan's Portfolio"
 }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ScrollTracker />
      <AppRoutes />
      <MainContainer> 
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
        <BoxContainer num={2} fieldset={"Project #01"}>
          <ProjectTitle title={"DnD Den"} />
          <ImageContainer 
            imgUrl={"/imgs/dnd-den.jpg"} 
            imgAlt={"DND Den Project"} 
            position={'right'}
          />
            <Description textArr={[projects[0].description, projects[0].techStack]}/>
        </BoxContainer> 
        <BoxContainer num={3} fieldset={"Project #02"}>
          <ImageContainer 
            imgUrl={"/imgs/peapods.jpg"} 
            imgAlt={"Peapods Project"}
            position={'left'}  
          />
          <ProjectTitle title={"Peapods"} />
          <Description textArr={[projects[1].description, projects[1].techStack]}/>
        </BoxContainer>
        </MainContainer>
     </BrowserRouter>
    </div>
  );
}

export default App;
