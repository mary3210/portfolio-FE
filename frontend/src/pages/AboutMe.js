import { VscServerProcess } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiReact } from "react-icons/si";
function AboutMe(props) {
    return (
<div  id="about" className="AboutMeContainer">
    
    <div  className="AboutMeWrapper">        
        <div className="AboutDescription"> 
        <div  className="title">
        <h1 >About Me</h1>
            </div>  
              <p>I am a Fullstack software developer, who believes in the  philosophy of life-long learning. 
                I enjoy learning new technologies and using creativity to solve complex issues. In the past five years, 
                I have been in the service industry where I have obtained a strong foundation for precision in detail and communication. 
                <br></br>
                <br></br>
                When I'm not coding, you can find me reading fantasy books or switching between playing nostalgic final fantasy games to modern cute games like pokemon.
                </p> 
           </div>
           <div className="aboutstones">
           <div className="frontendstone boxstyle grow">
            <FaLaptopCode className="svgabout"/>
            <h3>Fontend Developer</h3>
            </div>
           <div className="backendstone boxstyle grow"><VscServerProcess className="svgabout"/>
           <h3>Backend developer</h3>
           </div>
           <div className="webdevstone boxstyle grow"><CgWebsite className="svgabout"/>
           <h3>Web Developer</h3>
           </div>
           <div className="reactdevstone boxstyle grow"><SiReact className="svgabout"/>
           <h3>React Developer</h3>
           </div>
           </div>
    </div>
</div>  
    );
  }
  
  export default AboutMe;