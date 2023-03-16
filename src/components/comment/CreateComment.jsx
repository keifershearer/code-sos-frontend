import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import myApi from "../../service/service";
import './CreateComment.css'

const CreateComment = ({ fetchPost }) => {
  const [newComment, setNewComment] = useState('')
  const params = useParams()
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await myApi.createComment(newComment, params.postId);
      console.log(response);
      if (response.status === 201) {
        fetchPost()
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <form onSubmit={handleSubmit} className='form-comment'>
      <label htmlFor="comment" className="label-comment">Your Comment:</label>
      <div className="text-comment">
        <textarea
          value={newComment}
          name="comment"
          id="comment"
          onChange={(event) => setNewComment(event.target.value)}
        ></textarea>
        <button>Create a Comment</button>
      </div>
    </form>
  );
};

export default CreateComment;
