import React, { useEffect, useState, useContext } from "react";
import PostContext from "Utils/Hooks/Context/PostContext.js";
import style from "./ViewPost.module.css";
import GlobalStyle from "Assets/Styles/GlobalStyle.module.css";
import Card from "Components/Card";
import viewImg from "Assets/Img/view.jpg";
import CreateSvg from "Assets/Svg/create.svg";
import { getPosts } from "Services/PostService";
import Error from "Pages/Error/Error";
const ViewPost = () => {
  const [posts, setPosts] = useState([]); //initialized state for storing posts
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    let localToggler = localStorage.getItem("toggler");
    if (localToggler) {
      if (localToggler !== toggle.toString()) {
        (async () => {
          const response = await getPosts();
          if (response.status === 200) {
            localStorage.setItem("payload", JSON.stringify(response.data));
            localStorage.setItem("toggler", toggle);
            setPosts(response.data); //storing the response in the state
          } else {
            setError(response.status);
          }
        })();
      } else {
        const data = JSON.parse(localStorage.getItem("payload"));
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

  const renderPosts = posts
    ? posts.map((post, index) => (
        <Card
          key={index}
          imageUrl={viewImg}
          title={post.title}
          body={post.body}
          showId={post.id}
        />
      ))
    : [];
  return (
    <>
      {!error ? (
        <PostContext.Provider value={{ toggler: { toggle, setToggle } }}>
          <div className={GlobalStyle.LargeContaienr}>
            <div className={style.Cards}>
              <Card imageUrl={CreateSvg} create={true} />
              {renderPosts}
            </div>
          </div>
        </PostContext.Provider>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ViewPost;
