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
      setProfile({...userInfo, myPosts})
      console.log(myPosts);
    })
      .catch((error) => console.error(error))
      
    }, [])
    
 if(!profile){
  return<div>Loading...</div>
 } 
  return (
    <div className='profile-card'>
    <img src={profile.profilePic}/>
    <p>{profile.username}</p>
    <p>{profile._id}</p>
    <p></p>
    {profile.myPosts.map((e) => {
      return(
        <p key={e._id}>{e.question}</p>
      )
    })}

    </div>
  )
}

export default Profile