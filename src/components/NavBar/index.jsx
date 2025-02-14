import { NavLink } from "react-router-dom";
import "./navBar.css"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nab-bar__ul">
        
        <li>
          <NavLink to="/" className={"nav-bar__ul-li"}>Juego</NavLink>
        </li>
        <li>
          <NavLink to="/instructions" className={"nav-bar__ul-li"}>Como jugar</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};
export { NavBar };
