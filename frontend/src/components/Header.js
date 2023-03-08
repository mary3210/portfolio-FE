
import { Link } from "react-router-dom"
import Projects from "../pages/Projects";

function Header(props) {
 

  return (
    <header>
      <nav >
        <div className="home">
        <Link to="/">
          <div>HOME</div>
        </Link>
        </div>
        <div className="headerabout">
      
          <div><a href="#about">ABOUT</a></div>
       
        </div>
        <div><a href="#projects">PROJECTS</a></div>
        <div><a href="#contact">CONTACT</a></div>
        {/* <Link to="/projects">
          <div>PROJECTS</div>
        </Link> */}
      </nav>
    </header>
   
  );

}

export default Header;