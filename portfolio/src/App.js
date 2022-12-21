import About from "./componantes/About";
import Contact from "./componantes/Constact";
import Copyright from "./componantes/Copyright";
import Nav from "./componantes/Nav";
import Portfolio from "./componantes/Portfolio";
import Resume from "./componantes/Resume";
import Skills from "./componantes/Skills";
import Slides from "./componantes/Slides";
import Stats from "./componantes/Stats";

function App() {
  return (
    <div className="App">
      <Slides/>
      <Nav/>
      <About/>
      <Resume/>
      <Skills/>
      <Stats/>
      <Contact/>
      <Portfolio/>
      <Copyright/>
      
    </div>
  );
}

export default App;
