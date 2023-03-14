import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import myApi from './../../../service/service'
import axios from 'axios'

export default function Signup() {

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const [imageFile, setImageFile] = useState('')

  const [{ username, email, password, profilePic, isTutor }, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePic: '',
    isTutor: false,
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  // console.log(imageFile)



  function handleChange(e) {
    const updatedState = {
      username,
      email,
      password,
      profilePic,
      isTutor,
      [e.target.id]: e.target.value,
    }
    setFormData(updatedState)
  }


  async function handleSubmit(e) {
    e.preventDefault()

    const userToCreate = { username, email, password, isTutor }

    try {
      const response = await myApi.post('/auth/signup', userToCreate)
      if (response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      // console.log(error.response.data)
      // setError(error.response.data.message)
    }
    const fd = new FormData();

    const { data: { profilePic } } = await axios.post('http://localhost:5005/images', fd)
    fd.append("profilePic", profilePic)



  }


  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form">

        <label htmlFor="username">Choose your username </label>
        <input type='text' id='username' value={username} onChange={handleChange} />

        <label htmlFor="password">Enter your password </label>
        <input type='text' id='password' value={password} onChange={handleChange} />

        <label htmlFor="email">Enter your email</label>
        <input type="text" id='email' value={email} onChange={handleChange} />

        <label htmlFor="isTutor">Are you a teacher</label>
        <input type='checkbox' id='isTutor' value={isTutor} onChange={handleChange} />

        <input type="file" name="profilePic" id='profilePic' onChange={(e) => setImageFile(e.target.files[0])} />
        <input type="submit" value="upload" />

        <button >Sign up</button>

      </form>
    </>
  )
}