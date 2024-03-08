import { Icon } from '@iconify/react';
function Footer(props) {
    return (
<div className='colz-icon' >
           <div className='githubicon'>
           <a href="https://github.com/mary3210">
           <Icon icon="uiw:github" width="40" height="50" />
           </a>
           </div>
           <div className='linkedinicon'>
           <a href="https://www.linkedin.com/in/mary-rodriguez-/">
           <Icon icon="ant-design:linkedin-filled" width="50" height="50"/>
           </a>
           </div>
           </div>

    );
  }
  
  export default Footer;