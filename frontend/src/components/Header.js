import { Link } from "react-router-dom";

function Header(props) {
 
<script>

</script>
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