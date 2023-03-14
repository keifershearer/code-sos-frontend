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
    <div>
        <ul>
        {posts.map((post) =>
          <PostCard key={post._id} question={post.question} code_example={post.code_example} owner={post.owner}/>
        )}
        </ul>   
    </div>
  )
}

export default Posts