import React, { useContext, useEffect, useState } from 'react'
import myApi from '../../service/service'

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
    <div className='profile-card'>
      <img src={profile.profilePic} />
      <p>{profile.username}</p>
      <p>{profile._id}</p>


      {profile.myPosts.map((e) => {
        return (
          <p key={e._id}>{e.question}</p>
        )


      })}

    </div>
  )
}

export default Profile