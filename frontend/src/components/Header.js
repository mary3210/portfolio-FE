import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   background: "pink",
  //   border: "3px solid black",
  //   padding: "8px",
  //   width: "90%",
  //   margin: "auto",
  //   position: "fixed",
  // };

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
        {/* <Link to="/projects">
          <div>PROJECTS</div>
        </Link> */}
      </nav>
    </header>
  );

}

export default Header;