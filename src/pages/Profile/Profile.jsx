import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myApi from '../../service/service'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  

  useEffect(()=>{
    myApi
    .myProfile()
    .then((res) => {
      console.log(res.data)
      const user = res.data.user
      const myPosts = res.data.myPosts
      setProfile({...user, myPosts})})

    .catch((error) => console.error(error))

  }, [])
 if(!profile){
  return<div>Loading...</div>
 }
  return (
    <div className='profile-card'>
        <img src={profile.profilePic}/>
        <p>{profile.username}</p>
        {profile.myPosts.map((e) => {
          return(
            <p>{e.question}</p>
          )
        })}

    </div>
  )
}

export default Profile