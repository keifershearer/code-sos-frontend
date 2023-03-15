import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import myApi from "../../../service/service";
import './post-details.css'


const PostDetails = () => {

  const { user } = useContext(AuthContext)

  const [post, setPost] = useState(null);

  const params = useParams();
  const navigate = useNavigate()



  useEffect(() => {
    myApi
      .getSpecificPost(params.postId)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  // console.log('user ----------->', user)

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
    <section className="postdetail-section">

      <div className="postdetail-header">
        <img src={post.owner.profilePic} alt="profile-pic" />
        <h3>{post.owner.username}</h3>
      </div>

      <div className="postdetail-description">
        <p>{post.question}</p>
        <p>{post.code_example}</p>

        {user._id === post.owner._id ? (
          <>
            <button onClick={handleClick}>Delete Post</button>
            <Link to={`/posts/${post._id}/edit`}>Edit post</Link>
          </>
        ) : (null)}
      </div>

    </section>
  )
};

export default PostDetails;
