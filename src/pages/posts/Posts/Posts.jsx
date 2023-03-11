import React, { useEffect, useState } from 'react'
import myApi from 'code-sos-frontend/src/service/service.js'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
  myApi
  .getAllPosts()
  .then((res) => setPosts(res.data))
  .catch((e) => console.log(e))
  },[])
  return (
    <div>
  
  </div>
  )
}

export default Posts