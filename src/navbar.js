import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <NavLink to="/" className="logo">
          <FontAwesomeIcon icon={faStackOverflow} />
          StackOverflow
        </NavLink>
        <input type="text" placeholder="Search" className="search" />
        <NavLink to="/login" className="login">
          Log In
        </NavLink>
        <NavLink to="/signup" className="signup">
          Sign Up
        </NavLink>
      </header>
    </>
  );
}

export default Navbar;
