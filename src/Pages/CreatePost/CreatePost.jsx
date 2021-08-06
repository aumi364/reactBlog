import React from "react";
import CreateForm from "./CreateForm";
import style from "./CreatePost.module.css";
const CreatePost = () => {
  return (
    <div className={style.FormContainer}>
      <CreateForm />
    </div>
  );
};

export default CreatePost;
