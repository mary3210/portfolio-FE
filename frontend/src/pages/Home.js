import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "../components/Footer";
import About from "./About";
import Skills from './Skills';
import { ContactUs } from "./Contact";
function Home(props) {
    return (
      <div>
      <About />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactUs/>
    </div>
    )
  }
  
  export default Home
