import React, { useContext } from "react";
import style from "./ViewPost.module.css";
import GlobalStyle from "Assets/Styles/GlobalStyle.module.css";
import Card from "Components/Card";
import viewImg from "Assets/Img/view.jpg";
import CreateSvg from "Assets/Svg/create.svg";
import PostContext from "Utils/Context/PostContext";
import Error from "Pages/Error/Error";
const ViewPost = () => {
  const { posts, error } = useContext(PostContext);
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
        <div className={GlobalStyle.LargeContaienr}>
          <div className={style.Cards}>
            <Card imageUrl={CreateSvg} create={true} />
            {renderPosts}
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ViewPost;
