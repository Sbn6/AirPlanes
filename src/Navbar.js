import { ReactComponent as Logo } from "./logo2.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul class="nav justify-content-start" style={{userSelect:"none"}}>
        <li class="nav-item">
        <Link to="/" class="nav-link">
            Home
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/legend" class="nav-link">
            Legendă
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/history" class="nav-link">
            Istorie
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/helicopter" class="nav-link">
            Elicoptere
          </Link>
        </li>
        <li class="nav-item" style={{marginLeft:"80rem"}}>
        <Link to="/about" class="nav-link">
            About
          </Link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/Sbn6/AirPlanes"
            target={"_blank"}
          >
            GitHub
          </a>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
