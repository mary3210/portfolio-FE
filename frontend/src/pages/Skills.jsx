import { Icon } from '@iconify/react';

function Skills(props) {
    return (
<div className='skills'>
    <div className='skillstitle'>
        <h1>Technical skills</h1>
    </div>         
    <div className="iconss">
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
               
           </div>

    );
  }
  
  export default Skills;