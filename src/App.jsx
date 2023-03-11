import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Signup from './pages/auth/signup/Signup'
import Login from './pages/auth/login/login'
import Tutors from './pages/Tutors/Tutors'
import Profile from './pages/Profile/Profile'
import Posts from './pages/posts/Posts/Posts'





function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  )
}

export default App
