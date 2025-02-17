import { Link } from "react-router-dom";
import "./navBar.css"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nab-bar__ul">
        
        <li>
          <Link to="/" className={"nav-bar__ul-li"}>Juego</Link>
        </li>
        <li>
          <Link to="/instructions" className={"nav-bar__ul-li"}>Como jugar</Link>
        </li>
        
      </ul>
    </nav>
  );
};
export { NavBar };
