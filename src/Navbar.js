import { ReactComponent as Logo } from "./logo2.svg";
const Navbar = () => {
  return (
    <>
      <ul class="nav justify-content-start" style={{userSelect:"none"}}>
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/legend">
            Legendă
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/history">
            Istorie
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/helicopter">
            Elicoptere
          </a>
        </li>
        <li class="nav-item" style={{marginLeft:"80rem"}}>
          <a class="nav-link" href="/about">
            About
          </a>
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
          <a class="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
