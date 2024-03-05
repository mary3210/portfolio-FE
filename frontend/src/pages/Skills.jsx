import { Icon } from '@iconify/react';

function Skills(props) {
    return (
<div className='skills'>
    <div className='skillstitle h1title'>
        <h1>Technical Skills</h1>
    </div>
    <div className='iconcontainer'>        
    <div className="iconss">
        <div className='heartdiv python'><Icon icon="vscode-icons:file-type-python" className="icon" width="100" height="50"/></div>
        <div className='heartdiv js' ><Icon icon="logos:javascript" width="100" className="icon" height="50"/></div>
        <div className='heartdiv html'><Icon icon="vscode-icons:file-type-html" className="icon" width="100" height="50"/></div>
        <div className='heartdiv css'><Icon icon="vscode-icons:file-type-css" className="icon" width="100" height="50"/></div>
        <div className='heartdiv react'><Icon icon="skill-icons:react-dark" className="icon" width="100" height="50"/></div>
        <div className='heartdiv express'><Icon icon="skill-icons:expressjs-dark" className="icon" width="100" height="50"/></div>
        <div className='heartdiv sass'><Icon icon="skill-icons:sass" className="icon" width="100" height="50"/></div>
        <div className='heartdiv changeicon'><Icon icon="devicon:mongodb-wordmark" className='icon'/></div>
        <div className='heartdiv node'><Icon icon="vscode-icons:file-type-git" className="icon" width="100" height="50"/></div>
        <div className='heartdiv github'><Icon icon="logos:github-icon" className="icon" width="100" height="50"/></div>
        <div className='heartdiv sql'><Icon icon="skill-icons:postgresql-dark" className="icon" width="100" height="50"/></div>
        <div className='heartdiv django'><Icon icon="logos:django" className="icon" width="100" height="50"/></div>
    </div>
    </div> 
               
           </div>

    );
  }
  
  export default Skills;