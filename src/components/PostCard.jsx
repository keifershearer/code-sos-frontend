import React from "react";
import { Link } from "react-router-dom";

function PostCard({ _id, question, code_example, owner }) {
  return (
    <div className="post-card" key={_id}>
      <div className="post-card-header">
        <img src={owner.profilePic} alt="" />
        <h4>{owner.username}</h4>
      </div>

      <div>
        <p>Question: {question}</p>
        <p>Code Example: {code_example}</p>
        <Link to={`/posts/${_id}`}><button className='button'>Details</button></Link>
      </div>
    </div>
  );
}
export default PostCard;
