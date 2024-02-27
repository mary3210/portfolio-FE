import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "../components/Footer";
import About from "./About";
import Skills from './Skills';
function Home(props) {
    return (
      <div>
      <About />
      <Skills/>
      <Projects/>
    </div>
    )
  }
  
  export default Home;