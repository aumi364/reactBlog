import React from "react";
import BlogRouter from "../BlogRouter";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.Post}>
      <BlogRouter />
    </div>
  );
};

export default Post;
