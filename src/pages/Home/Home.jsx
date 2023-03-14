import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
      <h1>CodeSOS</h1>
      <p>Get help in a coding emergenncy</p>
      <div className='home-page-button'>
      <Link to='/auth/login'><button>Login</button></Link>
      <Link to='/auth/signup'><button>Signup</button></Link>
      </div>
    </div>
  )
}

export default Home