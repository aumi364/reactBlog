import React from "react";
import BlogRouter from "../BlogRouter";
import style from "./Post.module.css";
import { PostContextProvider } from "Utils/Context/PostContext.js";

const Post = () => {
  return (
    <PostContextProvider>
      <div className={style.Post}>
        <BlogRouter />
      </div>
    </PostContextProvider>
  );
};

export default Post;
