import React, { useEffect, useState } from "react";
import BlogRouter from "../BlogRouter";
import style from "./Post.module.css";
import { getPosts } from "Services/PostService";
import PostContext from "Utils/Hooks/Context/PostContext";
const Post = () => {
  const [posts, setPosts] = useState([]); //initialized state for storing posts
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let localToggler = localStorage.getItem("toggler");
    if (localToggler) {
      if (localToggler !== toggle.toString()) {
        (async () => {
          const data = await getPosts();
          localStorage.setItem("playload", JSON.stringify(data));
          localStorage.setItem("toggler", toggle);
          setPosts(data); //storing the response in the state
        })();
      } else {
        const data = JSON.parse(localStorage.getItem("playload"));
        setPosts(data);
      }
    } else {
      localStorage.setItem("toggler", toggle);
      (async () => {
        const data = await getPosts();
        localStorage.setItem("playload", JSON.stringify(data));
        setPosts(data); //storing the response in the state
      })();
    }
  }, [toggle]);

  return (
    <PostContext.Provider
      value={{ toggler: { toggle, setToggle }, postData: { posts, setPosts } }}
    >
      <div className={style.Post}>
        <BlogRouter />
      </div>
    </PostContext.Provider>
  );
};

export default Post;
