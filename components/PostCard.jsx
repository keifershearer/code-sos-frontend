import React from 'react'
import { Link } from 'react-router-dom'



export default function PostCard({ _id, question, code_example, owner }) {



    return (
        <div className='post-card'>

            <div className='post-card-header'>
                <img src={owner.profilePic} alt="" />
                <h4>{owner.username}</h4>
            </div>

            <div>
                <p>{question}</p>
                <p>{code_example}</p>
                <Link to={`/posts/${_id}`}></Link>
            </div>

        </div>
    )
}
