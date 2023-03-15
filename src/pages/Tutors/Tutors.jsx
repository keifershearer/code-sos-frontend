import React, { useEffect, useState } from 'react'
import myApi from '../../service/service'
import { Link } from 'react-router-dom'
import './tutors.css'

const Tutors = () => {

  const [tutors, setTutors] = useState([])


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
        return (
          <div className='tutor-card' key={tutor._id}>

            <div className='tutor-card-header'>
              <img src={tutor.profilePic} alt="profile-pic" />
              <h4>{tutor.username}</h4>
            </div>

            <div>
              {/* <p>{question}</p>
                <p>{code_example}</p> */}
              <Link to={`/profile/${tutor._id}`}>Contact {tutor.username} for help</Link>
            </div>

          </div>


        )
      })}
    </section>
  )
}

export default Tutors