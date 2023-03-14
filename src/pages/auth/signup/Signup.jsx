import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import myApi from './../../../service/service'
import axios from 'axios'

export default function Signup() {

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const [imageFile, setImageFile] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [isTutor, setTutor] = useState(false)
  const [{ username, email, password, profilePic }, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  // console.log(imageFile)

  function handleCheck(e){
    console.log(e.target.checked)
    setTutor(e.target.checked)
  }

  function handleChange(e) {
    const updatedState = {
      username,
      email,
      password,
      profilePic,
      [e.target.id]: e.target.value,
    }
    setFormData(updatedState)
  }


  async function handleSubmit(e) {
    e.preventDefault()
    
    const fd = new FormData();
    fd.append('username', username)
    fd.append('email', email)
    fd.append('password', password)
    fd.append('profilePic', imageFile)
    fd.append('isTutor', isTutor)
    // const userToCreate = { username, email, password, isTutor }

    // console.log('user', userToCreate)
    try {
      const response = await myApi.post('/auth/signup', fd)
      if (response.status === 201) {
        navigate('/auth/login')
      }
    } catch (error) {
      console.log(error)
      // console.log(error.response.data)
      // setError(error.response.data.message)
    }

    // const { data: { profilePic } } = await axios.post('http://localhost:5005/images', fd)
    // fd.append("profilePic", profilePic)



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
        <input type='checkbox' id='isTutor' checked={isTutor} onChange={handleCheck} />

        <input type="file" name="profilePic" id='profilePic' onChange={(e) => setImageFile(e.target.files[0])} />
        <input type="submit" value="upload" />

        <button >Sign up</button>

      </form>
    </>
  )
}