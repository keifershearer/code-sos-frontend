import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myApi from '../../service/service'


const OtherProfile = () => {
    const [otherProfile, setOtherProfile] = useState(null)
    const params = useParams()

    
    useEffect(()=>{
    myApi.otherProfile(params.profileId)
    .then((res) =>{
      const otherUser = res.data.user 
      const theirPost = res.data.theirPost
      setOtherProfile({...otherUser, theirPost})})
    .catch((error)=>console.error(error))
},[])
if(!otherProfile){
    return <div>Loading...</div>
}
    return( <div>
    <img src={otherProfile.profilePic}/>
    <p>{otherProfile.username}</p>
    <p>{otherProfile.profileId}</p>
    <p></p>
    {otherProfile.theirPost.map((e) => {
      return(
        <p key={e._id}>{e.question}</p>
      )
    })}
  </div>
  )
}

export default OtherProfile