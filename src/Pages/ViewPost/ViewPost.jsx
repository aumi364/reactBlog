import React, { useEffect, useState, useContext } from "react";
import { getPosts } from "Services/PostService.js";
import PostContext from "Utils/Hooks/Context/PostContext.js";
import style from "./ViewPost.module.css";
import GlobalStyle from "Assets/Styles/GlobalStyle.module.css";
import Card from "Components/Card";
import viewImg from "Assets/Img/view.jpg";
import CreateSvg from "Assets/Svg/create.svg";
const ViewPost = () => {
  // const [posts, setPosts] = useState([]); //initialized state for storing posts
  // const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     const data = await getPosts();
  //     setPosts(data); //storing the responst in the state
  //   })();
  // }, [toggle]);
  const { postData } = useContext(PostContext);
  const { posts } = postData;
  console.log(posts);
  const renderPosts = posts.map((post, index) => (
    <Card
      key={index}
      imageUrl={viewImg}
      title={post.title}
      body={post.body}
      showId={post.id}
    />
  ));
  return (
    <div className={GlobalStyle.LargeContaienr}>
      <div className={style.Cards}>
        <Card imageUrl={CreateSvg} create={true} />
        {renderPosts}
      </div>
    </div>
  );
};

export default ViewPost;
