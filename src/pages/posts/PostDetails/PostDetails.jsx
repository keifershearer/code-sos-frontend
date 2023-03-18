import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import myApi from "../../../service/service";
import CreateComment from "../../../components/comment/CreateComment";
import './post-details.css'


const PostDetails = () => {

  const { user } = useContext(AuthContext)

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null)

  const params = useParams();
  const navigate = useNavigate()

  const fetchPost = () => {
    myApi
      .getSpecificPost(params.postId)
      .then((res) => {
        // console.log(res.data.allComments);
        setPost(res.data.postDetails);
        setComments(res.data.allComments)
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchPost()
  }, []);


  const handleClick = async () => {
    try {
      await myApi.deletePost(params.postId);
      navigate('/posts')
    } catch (error) {
      console.log(error)
    }
  };

  if (!post) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="postdetail">

      <div className="postdetail-header">
        <img src={post.owner.profilePic} alt="profile-pic" />
        <h3>{post.owner.username}'s Post</h3>
      </div>

      {/* <div className="postdetail-container"> */}
        <div className="postdetail-description">
          <p>Question: {post.question}</p>
          <p>Code Example: {post.code_example}</p>
        </div>
        
        <div className="comments">
          <div className='comment-list-form'>
            <CreateComment fetchPost={fetchPost} />
          {comments.map((comment) => {
            return (
              <div className="comment" key={comment._id}>
                <div className="author-comment">
                  <img src={comment.author.profilePic} alt="profile-pic" />
                  <h6>{comment.author.username}</h6>
                </div>
                <p>{comment.comment}</p>
              </div>
            )
          })}
          <div>
          </div>
          </div>
        {user._id === post.owner._id ? (
          <>
            <button onClick={handleClick} className='button' >Delete Post</button>
            <Link to={`/posts/${post._id}/edit`}><button className='button' >Edit Post</button></Link>
          </>
        ) : (null)}

      </div>

    </section>
  )
};

export default PostDetails;
