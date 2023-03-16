import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../../components/PostCard";
import myApi from "../../../service/service";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    myApi
      .allPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
    <div>
    <Link to='create'><button> + New Post </button></Link>
    </div>
      <div>
      <ul>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            _id={post._id}
            question={post.question}
            code_example={post.code_example}
            owner={post.owner}
          />
        ))}
      </ul>
    </div>
    </div>

  );
};

export default Posts;
