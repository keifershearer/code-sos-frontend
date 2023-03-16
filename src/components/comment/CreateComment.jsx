import React, { useState } from "react";
import { useParams } from "react-router-dom";
import myApi from "../../service/service";

const CreateComment = () => {
  const [newComment, setNewComment] = useState('')
  const params = useParams()


  const handleSubmit = async (event) => {
    event.preventDefault();


    console.log(params.postId)
    try {
      const response = await myApi.createComment({ newComment }, params.postId);

      if (response.status === 201) {
      }
    } catch (error) { console.log(error) }
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
