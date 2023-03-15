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

  // const handleSubmit = async (e) => {
  //   e.prevent.default()

  //   const newComment = question

  //   myApi.
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const newComment = { question, owner }

  //   try {
  //     const updatedPost = await myApi.updatePost(params.postId, postToUpdate)
  //     if (updatedPost.status === 202) {
  //       navigate('/posts')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }






  return (
    <div>
      <img src={otherProfile.profilePic} />
      <p>{otherProfile.username}</p>
      <p>{otherProfile.profileId}</p>

      {otherProfile.theirPost.map((e) => {
        return (
          <p key={e._id}>{e.question}</p>
        )
      })}

      {otherProfile.isTutor &&
        <section className="help-request-section">

          <form onSubmit={handleSubmit}>
            <label htmlFor="question">Request help from {otherProfile.username}</label>
            <input type="text" name="question" id="question" onChange={(e) => setQuestion(e.target.value)} />
          </form>

        </section>
      }
    </div>
  )
}

export default OtherProfile