import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext);
  function handleClick() {
    removeToken();
    authenticateUser();
  }

  return (
    <header>
      <nav className='navbar'>
        <ul>
          {user ? (
            <>
              <li>
                <NavLink to="/Tutors">Tutors</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Help Postings</NavLink>
              </li>
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
              <li>
                <button onClick={handleClick}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <NavLink to="/auth/login">Login</NavLink>
              <NavLink to="/auth/signup">Signup</NavLink>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
