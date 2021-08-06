import React from "react";
import style from "./Error.module.css";
const Error = ({ status }) => {
  return <div className={style.Error}>{`${status} error`}</div>;
};

export default Error;
