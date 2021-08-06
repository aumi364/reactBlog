import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showPost, deletePost } from "Services/PostService";
import showImg from "Assets/Img/view.jpg";
import Error from "Pages/Error/Error";
import style from "./ShowPost.module.css";
import { CapitalizeFirstLetter } from "Utils/Funcs/index";
const ShowPost = () => {
  const { postId } = useParams();
  const [error, setError] = useState();
  const [post, setPost] = useState();
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    if (showPost) {
      (async () => {
        const response = await showPost(postId);
        if (response.status === 200) {
          setPost(response.data);
        } else {
          setError(response.status);
        }
      })();
    }
  }, []);
  const deleteHandler = (id) => {
    return async () => {
      await deletePost(id);
      setDeleted(true);
    };
  };
  return (
    <>
      {!error && !deleted && post && (
        <div className={style.PostContainer}>
          <div className={style.ShowPost}>
            <div className={style.ShowImg}>
              <img src={showImg} alt="" />
            </div>
            <div className={style.Wrapper}>
              <div className={style.Title}>
                {CapitalizeFirstLetter(post.title)}
              </div>
              <div className={style.Body}>{post.body}</div>
            </div>
          </div>
          <div>
            <button className={style.Button} onClick={deleteHandler(post.id)}>
              X Delete Post!
            </button>
          </div>
        </div>
      )}
      {error && <Error status={error} />}
      {!error && deleted && (
        <div className={style.Deleted}>
          <p className={style.TextDeleted}>The post has been deleted.</p>
        </div>
      )}
    </>
  );
};

export default ShowPost;
