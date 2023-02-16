import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

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
        <div className="about">
        <h1>{about.name}</h1>
        <img className="headshot" src="https://i.imgur.com/wjNtEMO.jpg" alt="selfie"/>
        <p>{about.bio}</p>
        <h3>Technical skills</h3>
        <Icon icon="vscode-icons:file-type-python" width="100" height="50"/>
        <Icon icon="logos:javascript" width="100" height="50"/>
        <Icon icon="vscode-icons:file-type-html" width="100" height="50"/>
        <Icon icon="vscode-icons:file-type-css" width="100" height="50"/>
        <Icon icon="skill-icons:react-dark" width="100" height="50"/>
        <Icon icon="skill-icons:expressjs-dark" width="100" height="50"/>
        <Icon icon="skill-icons:bootstrap" width="100" height="50"/>
        <Icon icon="skill-icons:sass" width="100" height="50"/>
        <Icon icon="vscode-icons:file-type-node2" width="100" height="50"/>
        <Icon icon="vscode-icons:file-type-git" width="100" height="50"/>
        <Icon icon="logos:github-icon" width="100" height="50"/>
        <Icon icon="skill-icons:postgresql-dark" width="100" height="50"/>
        <Icon icon="logos:django" width="100" height="50"/>
        </div>
    );
    return about ? loaded() : <h1>Loading...</h1>;
  }
  
  export default About;