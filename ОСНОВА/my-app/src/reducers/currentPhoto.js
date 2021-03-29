const currentPhoto = (state = { links: {}, user: {}, urls: { small: "" } }, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return action.photo;
    case "LIKE_PHOTO":
      return action.id;
    case "UNLIKE_PHOTO":
      return action.id;
    default:
      return state;
  }
};

export default currentPhoto;