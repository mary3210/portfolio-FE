
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
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        </div>
        <div><a href="#projects">PROJECTS</a></div>
        <div>CONTACT</div>
        {/* <Link to="/projects">
          <div>PROJECTS</div>
        </Link> */}
      </nav>
    </header>
   
  );

}

export default Header;