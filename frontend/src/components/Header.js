
import { Link } from "react-router-dom"
import Projects from "../pages/Projects";
import { IoMdMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
function Header(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log(!showDropdown);};
  const closeDropdown = () => {
    setShowDropdown(false);
};

  return (
    <header>
        <nav >
            <div className="home">
                <div className="logo">
                    <svg viewBox="0 0 25 25" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z" fill="currentColor" stroke="currentColor" stroke-width="1.2"></path> </g></svg>
                </div>
                <div className="headerabout">
                    <div className="desktopmenu">
                    <a href="#home">HOME</a> 
                    </div>
                    <div className="desktopmenu">
                    <a href="#about">ABOUT</a> 
                    </div>
                    <div className="desktopmenu">
                    <a href="#projects">PROJECTS</a>
                    </div>
                    <div className="desktopmenu">
                    <a href="#contact">CONTACT</a>
                    </div>
                    <div className={`mobilemenu ${showDropdown ? 'dropdownShown' : 'dropdownNotShown'}`} onClick={toggleDropdown}>
                    {showDropdown ? <CgClose /> : <IoMdMenu />}
              
                    
                    </div>
                </div>
                
            </div>
            {showDropdown && (
                <ul className="menudropdown">
                  <li>
                  <a href="#home">HOME</a> 
                  </li>
                  <li>
                  <a href="#about">ABOUT</a> 
                  </li>
                  <li>
                  <a href="#projects">PROJECTS</a>
                  </li>
                  <li>
                  <a href="#contact">CONTACT</a>
                  </li>
                  </ul>
                  )} 
        </nav>
    </header>
   
  );

}

export default Header;