import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import myApi from "../../service/service";


const CreateComment = ({ fetchPost }) => {
  const [newComment, setNewComment] = useState('')
  const params = useParams()
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();


    // console.log(params.postId)
    try {
      const response = await myApi.createComment(newComment, params.postId);
      console.log(response);
      if (response.status === 201) {
        fetchPost()
      }
    } catch (error) {
      // console.log('new comment --->', newComment)
      // console.log('postId --->', params.postId);
      console.log(error)
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Your Comment:</label>
      <div>
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
