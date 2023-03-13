import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [imageFile, setImageFile] = useState('')

  const navigate = useNavigate()

  console.log(imageFile)

  async function handleSubmit(e) {
    e.preventDefault()

    const fd = new FormData();
    const image = URL.createObjectURL(imageFile);

    fd.append('image', image);

    const response = await axios.post('http://localhost:5005/images')
    console.log(response);
  }


  return (
    <>
      <form onClick={handleSubmit} className="signup-form">

        <label htmlFor="username">Choose your username </label>
        <input type='text' id='username' value={username} onChange={handleChange} />

        <label htmlFor="password">Enter your password </label>
        <input type='text' id='password' value={password} onChange={handleChange} />

        <form onClick={handleSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="upload" onChange={(e) => setImageFile(e.target.files[0])} />
        </form>

      </form>
    </>
  )
}