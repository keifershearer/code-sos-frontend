import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import myApi from "../../../service/service";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .getSpecificPost(params.postId)
      .then((res) => {
        console.log(res.data);
        setPost(res.data.PostDetails);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleClick = async () => {
    try {
      await myApi.deletePost(params.postId);
    } catch (error) {}
  };

  if (!post) {
    return <div className="loading">Loading...</div>;
  }

  return <div>PostDetails</div>;
};

export default PostDetails;
