import React, { useEffect, useState } from "react";
import BlogRouter from "../BlogRouter";
import style from "./Post.module.css";
import PostContext from "Utils/Context/PostContext.js";
import { getPosts } from "Services/PostService";
const Post = () => {
  const [posts, setPosts] = useState([]); //initialized state for storing posts
  const [toggle, setToggle] = useState(false); // to track if new data is inserted
  const [error, setError] = useState(); // if any error returns

  useEffect(() => {
    let localToggler = localStorage.getItem("toggler");
    let payload = localStorage.getItem("payload");
    //check if both available in local storage
    if (localToggler && payload) {
      // check if user committed a post request
      if (localToggler !== toggle.toString()) {
        (async () => {
          const response = await getPosts();
          if (response.status === 200) {
            localStorage.setItem("payload", JSON.stringify(response.data)); // storing in localstorage for preventing duplicate fetching
            localStorage.setItem("toggler", toggle); // fetching if new data inserted
            setPosts(response.data); //storing the response in the state
          } else {
            setError(response.status);
          }
        })();
      } else {
        const data = JSON.parse(payload);
        setPosts(data);
      }
    } else {
      localStorage.setItem("toggler", toggle);
      (async () => {
        const response = await getPosts();
        if (response.status === 200) {
          localStorage.setItem("payload", JSON.stringify(response.data));
          setPosts(response.data); //storing the response in the state
        } else {
          setError(response.status);
        }
      })();
    }
  }, [toggle]);
  return (
    <PostContext.Provider
      value={{
        toggler: { toggle, setToggle },
        viewError: { error, setError },
        posts: posts,
        error: error,
      }}
    >
      <div className={style.Post}>
        <BlogRouter />
      </div>
    </PostContext.Provider>
  );
};

export default Post;
