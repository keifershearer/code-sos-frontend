import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../../components/PostCard'
import myApi from '../../service/service'
import './Profile.css'
const Profile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    myApi

      .myProfile()
      .then((res) => {
        const userInfo = res.data.user
        const myPosts = res.data.myPosts
        const helps = res.data.allHelp
        setProfile({ ...userInfo, myPosts, helps })
         console.log('allHelp is ------>', helps);
      })
      .catch((error) => console.error(error))

  }, [])

  // console.log(profile)
  if (!profile) {
    return <div>Loading...</div>
  }

  if (profile.isTutor) {
    return profile.helps.map((e) => {
      return <div key={e._id}>
        <p>{e.owner.username}</p>
        <p>{e.owner.email}</p>
        <p>{e.question}</p>
      </div>
    })
  }

  return (
    <div>
    <div className='profile-card'>
      <img className='profile-pic' src={profile.profilePic} />
      <p>{profile.username}'s Profile</p>
      </div>

      {profile.myPosts.map((post) => {
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

export default Profile