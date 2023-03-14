import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

const Home = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div className='home-page'>
      <h1>CodeSOS</h1>
      <p>Get help in a coding emergency</p>
      {!user ? (
      <div className='home-page-button'>
      <Link to='/auth/login'><button>Login</button></Link>
      <Link to='/auth/signup'><button>Signup</button></Link>
      </div>) : (<p>Welcome {user.username}</p>)}
    </div>
  )
}

export default Home