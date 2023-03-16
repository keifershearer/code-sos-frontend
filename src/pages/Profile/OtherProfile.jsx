import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myApi from '../../service/service'


const OtherProfile = () => {

  const [otherProfile, setOtherProfile] = useState(null)
  const [question, setQuestion] = useState('')
  const params = useParams()


  useEffect(() => {
    myApi.otherProfile(params.profileId)
      .then((res) => {
        const otherUser = res.data.user
        const theirPost = res.data.theirPost
        console.log('otherUser ----->', otherUser)
        console.log('theirPost ----->', theirPost)
        setOtherProfile({ ...otherUser, theirPost })
      })
      .catch((error) => console.error(error))
  }, [])

  if (!otherProfile) {
    return <div>Loading...</div>
  }


  return (
    <div>
      <img className='profile-pic' src={otherProfile.profilePic} />
      <p>{otherProfile.username}</p>
      <p>{otherProfile.profileId}</p>

      {otherProfile.theirPost.map((post) => {
        return (
          <PostCard
            key={post._id}
            _id={post._id}
            question={post.question}
            code_example={post.code_example}
            owner={post.owner}
          />
        )
      })}

    </div>
  )
}

export default OtherProfile