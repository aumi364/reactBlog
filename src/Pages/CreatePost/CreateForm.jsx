import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import style from "./CreateForm.module.css";
import { createPost } from "Services/PostService";
import PostContext from "Utils/Context/PostContext";
const CreateForm = () => {
  const { toggler } = useContext(PostContext);
  const { toggle, setToggle } = toggler;

  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    await createPost(values);
    setToggle(!toggle); //as new data is inserted toggle  value is changed for a new fetch.
    setSubmitted(true);
  };
  return (
    <>
      {!submitted && (
        <form className={style.PostForm} onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            className={style.Input}
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />

          {errors.name && <p className={style.Errors}>Name is required.</p>}
          <label>Title</label>
          <input
            className={style.Input}
            type="text"
            id="title"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.name && <p className={style.Errors}>Title is required.</p>}
          <label>Body</label>
          <textarea
            className={style.Input}
            type="text"
            id="body"
            {...register("body", { required: true })}
            placeholder="Body"
          />
          {errors.name && <p className={style.Errors}>Body is required.</p>}
          <label>UserId</label>
          <input
            className={style.Input}
            type="text"
            id="useId"
            {...register("useId", { required: true })}
            placeholder="userId"
          />
          {errors.name && <p className={style.Errors}>User Id is required.</p>}
          <button className={style.Button}>Submit</button>
        </form>
      )}
      {submitted && (
        <div className={style.Submitted}>
          <p>The post has been Submitted.</p>
        </div>
      )}
    </>
  );
};

export default CreateForm;
