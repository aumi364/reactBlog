import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { CapitalizeFirstLetter } from "Utils/Funcs/index";
import style from "./Card.module.css";
import GlobalStyle from "Assets/Styles/GlobalStyle.module.css";
const Card = ({ imageUrl, title, body, showId, create }) => {
  const { url } = useRouteMatch();
  return (
    <div className={style.Card}>
      {imageUrl && (
        <div className={style.Image}>
          <img src={imageUrl} alt="5 Terre"></img>
        </div>
      )}
      {title && (
        <div className={style.Title}>
          <p>{CapitalizeFirstLetter(title)}</p>
        </div>
      )}
      {body && (
        <div className={style.Body}>
          <p>{`${body.substr(0, 80)}...`}</p>
        </div>
      )}
      {showId && (
        <div className={style.ShowLink}>
          <Link className={GlobalStyle.NavLink} to={`${url}/${showId}`}>
            See More
          </Link>
        </div>
      )}
      {create && (
        <div className={style.CreateLink}>
          <Link className={GlobalStyle.NavLink} to={`${url}/create`}>
            Create a new post
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
