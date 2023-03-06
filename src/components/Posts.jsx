import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Posts() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const [posts, setPosts] = useState({});
  console.log(posts);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="post-content">
      <article>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
      </article>
    </div>
  );
}

export default Posts;
