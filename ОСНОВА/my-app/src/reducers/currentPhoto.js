const currentPhoto = (state = { links: {}, user: {}, urls: { small: "" } }, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return action.photo;
    default:
      return state;
  }
};

export default currentPhoto;