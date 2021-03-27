import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPhoto } from "../actions/actions";

import { unsplashGetPhoto } from "../unsplash/unsplash";

import getFormattedDate from "../utils";

import liked from "../assets/001-like.png";
import unliked from "../assets/002-heart.png";
import close from "../assets/003-left-arrow.png";

function CurrentPhoto (props) {
  useEffect(() => {
    return () => {
      document.body.style.overflowY = "hidden";
      getPhoto(props);
      document.body.style.overflowY = "auto";
    }
  }, [props])
  const getPhoto = (props) => {
    const id = props.match.params.id;
    unsplashGetPhoto(id).then(photo => {
      props.getPhoto(photo);
    })
  }

  const bgImages = {
    liked: {
      backgroundImage: "url(" + liked + ")",
    },
    unliked: {
      backgroundImage: "url(" + unliked + ")",
    },
    close: {
      backgroundImage: "url(" + close + ")",
    },
  };

  const url = props.photo.links.html;
  const author = props.photo.user.name;
  const image = props.photo.urls.small;
  const likesCount = props.photo.likes;
  const date = getFormattedDate(props.photo.updated_at);
  // Основной контент
  const mainContent = <article className="full-photo">
    <Link to="/">
      <button
        className="full-photo__close-button"
        style={bgImages.close}
      />
    </Link>
    <h2 className="full-photo__heading">
      <a href={url}>{author}</a>
    </h2>
    <img alt="test" className="full-photo__image" src={image} />
    <p className="full-photo__likes-count">Нравится: {likesCount}</p>
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
    getPhoto: (photo) => dispatch(getPhoto(photo))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentPhoto);
