import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Profile from "./Profile";
import { TypeAnimation } from 'react-type-animation';

function About(props) {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch("./../about.json");
        const data = await response.json();
        setAbout(data);
    };
    useEffect(() => {
        getAboutData()}, [])
    ;

    const loaded = () => (
        <div className="about" id="about">
        <div className='headimage'>
            <img className="headshot" src="https://i.imgur.com/gXCdVNr.png" alt="selfie"/>
            <img className="irlphoto" src="https://i.imgur.com/wjNtEMO.jpg" alt="irl selfie"/>
        </div>
        <div className='aboutcontent'>
            <h1><span className='transparenttext'>Hey, I'm </span>
            {/* <span className='animatedtitle'>Mary.</span> */}
            <TypeAnimation
              sequence={[
                "Mary.",
                2000,
                "Web Developer.",
                2000,
                "Fullstack Dev.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /></h1>
            <div className="text">
                <p>I'm a software Engineer who is passionate about solving complex problems and creating responsive apps. </p>
            </div>
            <div className='abouticons'>
            <Footer/>
            </div>
            <Profile/>
        </div>
        </div>
    );
    return about ? loaded() : <h1>Loading...</h1>;
  }
  
  export default About;