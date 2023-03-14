import React, { useEffect, useState } from 'react'
import PostCard from '../../../../components/PostCard'
import myApi from '../../../service/service'

const Posts = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    myApi.allPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error))
  }, [])



  return (
    <>

      <ul>
        {/* {posts.map((post) =>
          <PostCard array={post} />
        )} */}
      </ul>

    </>
  )
}

export default Posts