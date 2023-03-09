import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
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
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
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