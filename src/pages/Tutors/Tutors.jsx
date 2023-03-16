import React, { useContext, useEffect, useState } from 'react'
import myApi from '../../service/service'
import { Link } from 'react-router-dom'
import './tutors.css'
import { AuthContext } from '../../context/auth.context'

const Tutors = () => {

  const [tutors, setTutors] = useState([])
  const {user} = useContext(AuthContext)
const userID = user._id
  useEffect(() => {
    myApi.availableTutor()
      .then((res) => setTutors(res.data))
      .catch((error) => console.error(error))
  }, [])

  if (!tutors) {
    return <div className="loading">Loading...</div>
  }

  return (

    <section className='available-tutors'>

      {tutors.map((tutor) => {
        // <PostCard key={tutor._id} question={tutor.question} code_example={tutor.code_example} owner={tutor.owner} />
        
        return (<div key={tutor._id}>
          {userID !== tutor._id ? ( <div className='tutor-card' >

<div className='tutor-card-header'>
              <img src={tutor.profilePic} alt="profile-pic" />
              <h4>{tutor.username}</h4>
         
              {/* <p>{question}</p>
                <p>{code_example}</p> */}
              <Link to={`/profile/help/${tutor._id}`}>Contact {tutor.username} for help</Link>
            </div>

          </div>) : (null)}
          </div>

        )
              })}
    </section>
  )
}

export default Tutors