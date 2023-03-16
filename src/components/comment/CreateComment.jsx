import React from "react";
import myApi from "../../service/service";

const CreateComment = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentToCreate = { comment };
    try {
      const response = await myApi.createComment(commentToCreate);

      if (response.status === 201) {
      }
    } catch (error) { }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Your Comment:</label>
      <div>
        <textarea
          value={comment}
          name="comment"
          id="comment"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button>Create a Comment</button>
      </div>
    </form>
  );
};

export default CreateComment;
