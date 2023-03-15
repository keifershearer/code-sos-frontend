import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myApi from '../../service/service'

const Profile = ({profilePic, username}) => {
  const [profile, setProfile] = useState('')
  const params = useParams()
  console.log(params)
  const profileId = params.profileId
  useEffect(()=>{
    myApi
    .otherProfile(profileId)
    .then((res) => {
      setProfile(res.data)})

    .catch((error) => console.error(error))

  }, [])
 
  return (
    <div>
        <img src={profile.profilePic}/>
        <p>{profile.username}</p>

    </div>
  )
}

export default Profile