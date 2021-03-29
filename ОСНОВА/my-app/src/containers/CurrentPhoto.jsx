import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPhoto, likePhoto, unlikePhoto} from "../actions/actions";

import {unsplashGetPhoto } from "../unsplash/unsplash";

import getFormattedDate from "../utils";

import liked from "../assets/001-like.png";
import unliked from "../assets/002-heart.png";
import close from "../assets/003-left-arrow.png";

const bgImages = {
  liked: {
    width: "20px",
    height: "20px",
    border: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(" + liked + ")",
    background: "white"
  },
  unliked: {
    width: "20px",
    height: "20px",
    border: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(" + unliked + ")",
  },
  close: {
    backgroundImage: "url(" + close + ")",
  },
};
const styleBack = {
  display: "flex",
  alignItems: "center"
}

function CurrentPhoto (props) {
  console.log(props);
  useEffect(() => {
      document.body.style.overflowY = "hidden";
      unsplashGetPhoto(props.match.params.id).then(photo => {
        props.getPhoto(photo);
      })
      return () => {
        document.body.style.overflowY = "auto";
      }
  }, []);

  function likePhoto (id) {
    fetch(`https://unsplash.com/oauth/photos/${id}/like`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(answer => console.log(answer));
    console.log(`https://unsplash.com/oauth/photos/${id}/like`)
    console.log(id);
  }
  const id = props.photo.id;
  const url = props.photo.links.html;
  const author = props.photo.user.name;
  const image = props.photo.urls.small;
  const likesCount = props.photo.likes;
  const date = getFormattedDate(props.photo.updated_at);
  // Основной контент
  const mainContent = <article className="full-photo">
    <Link to="/photos">
      <div style={styleBack}>
        <button
          className="full-photo__close-button"
          style={bgImages.close}
        />
        <span>Назад</span>
      </div>
    </Link>
    <h2 className="full-photo__heading">
      <a href={url}>{author}</a>
    </h2>
    <img alt="test" className="full-photo__image" src={image} />
    <p className="full-photo__likes-count">Нравится: {likesCount}</p>
    <button onClick={() => likePhoto(id)} style={ bgImages.unliked } />
    <time className="full-photo__time">{date}</time>
  </article>
  // Контекнт при загрузке
  const loadContent = <div>Подождите...</div>;

  return (
      <div className="overlay-modal">
        {
          props.photo.id ? mainContent : loadContent
        }
      </div>
  )
}

function mapStateToProps(state) {
  return {
    photo: state.currentPhoto,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPhoto: (photo) => dispatch(getPhoto(photo)),
    likePhoto: (id) => dispatch(likePhoto(id)),
    unlikePhoto: (id) => dispatch(unlikePhoto(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentPhoto);
