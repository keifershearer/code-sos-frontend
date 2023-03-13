import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'
import { AuthContext } from '../../context/auth.context'

const Layout = () => {

  const {user, authenticateUser, removeToken} = useContext(AuthContext)
  function handleClick(){
    removeToken()
    authenticateUser()
  }
  return (
    <>
    <header>
<nav>
  <ul>
    <li>
      <NavLink to="/Tutors">Tutors</NavLink>
    </li>
    <li>
      <NavLink to="/posts">Help Postings</NavLink>
    </li>
    <li>
      <NavLink to="/profile">My Profile</NavLink>
    </li>
    {user ? ( 
      <>
    <li>
      <button onClick={handleClick}>Logout</button>
    </li>
    </>
    ) : (null
      // <>
      // <NavLink to="/login">Login</NavLink>
      // <NavLink to="/signup">Signup</NavLink>
      // </>
    )}
  </ul>
</nav>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Layout