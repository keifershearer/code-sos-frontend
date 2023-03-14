import { useState } from 'react'
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
  const [imageFile, setImageFile] = useState("")
  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    // const image = URL.createObjectURL(imageFile);
    fd.append("image", imageFile)
    const { data: { image } } = await axios.post("http://localhost:5005/images", fd)
    setImageURL(image)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='file' name='image' onChange={(e) => setImageFile(e.target.files[0])} />
        <input type='submit' value='upload' />
      </form>
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
