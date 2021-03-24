import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPhoto } from "../actions/actions";

import { unsplashGetPhoto } from "../unsplash/unsplash";

import getFormattedDate from "../utils";

import liked from "../assets/001-like.png";
import unliked from "../assets/002-heart.png";
import close from "../assets/003-left-arrow.png";

// console.log('Дошел до сюда');

function CurrentPhoto (props) {
  console.log(props);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    getPhoto(props.match.params.id);
  }, [props.photo])

  function getPhoto(id) {
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

  const id = props.photo.id;
  const url = props.photo.links.html;
  const author = props.photo.user.name;
  const image = props.photo.urls.small;
  const likesCount = props.photo.likes;
  const date = getFormattedDate(props.photo.updated_at);

  return (
    <div>Перешел на отдельное фото</div>
  )
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    photo: state.currentPhoto,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPhoto: (photo) => dispatch(getPhoto(photo))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentPhoto);
