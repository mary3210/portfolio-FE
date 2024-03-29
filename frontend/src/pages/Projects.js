import {useState, useEffect} from 'react';

function Projects(props) {
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch("./projects.json");
        console.log(response)
        const data = await response.json();
        setProjects(data)
    };

    useEffect(() => {
        getProjectsData();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            threshold: .75,
            
        };
     
        const projectswrapper = document.querySelectorAll(".projectswrapper");
        console.log(projectswrapper)
        if (projectswrapper) {
            let observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(element => {
                    console.log(entries)
                    element.target.classList.toggle("show")
                    
                });
            }, options);
                
            projectswrapper.forEach((element)=> {
                if(element){
                    observer.observe(element)
                    
                }
            })
        }
    }, [projects]);

    
        

    const loaded = () =>{

        return (
            <div id="projects" className='projectsContainer'>
                <div className='projectstitle'>
                <h1>Projects</h1>
                </div>
            
            {projects.map((project) => (
            <div className="projects">
                <div className='projectswrapper show'>
                <div className='projectimage'>
                <img className="laptopimage" src={project.image} alt="project"/>
                
                <div className='mobileimage'>
                <img src={project.mobileimage} alt="phone version"/>
                </div>
                </div>
                <div className='projectcontent'>
                <div className='contentwrapper'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className='skillsWrapper'>
                {project.skills.map((skill) => (
                    <div className='skillitem'>{skill}</div>
                ))}
                </div>
                </div>
                <div className="probtns">
                <a href={project.git}>
                    <button className="button-1">Github</button>
                </a>
                <a href={project.live}>
                    <button className="button-2">live site</button>
                </a>
                </div>
                </div>
                </div>
            </div>
            
        ))}</div>);
    };
    return projects ? loaded() : <h1>Loading...</h1>
  }
  
  export default Projects;