import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"


function Header(props) {
  const [scrolllTop, setScrollTop] = useState(0);

  useEffect(() => {
    
  const handleScroll = event => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

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
        <div>PROJECTS</div>
        <div>CONTACT</div>
        {/* <Link to="/projects">
          <div>PROJECTS</div>
        </Link> */}
      </nav>
    </header>
   
  );

}

export default Header;