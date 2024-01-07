import './App.css';
import NavBar from './routes/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollTracker from './scroll_components/ScrollTracker';
import MainContainer from './components/MainContainer';
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
      <MainContainer> 
        <AppRoutes />
      </MainContainer>
     </BrowserRouter>
    </div>
  );
}

export default App;
