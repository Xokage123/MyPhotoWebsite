// Экшен на подгрузку всех фото
export const loadPhotos = (photos) => {
  return {
    type: "LOAD_PHOTOS",
    photos,
  };
};
// Экшен на подгрузку определенного фото
export const getPhoto = (photo) => {
  return {
    type: "GET_PHOTO",
    photo,
  };
};
// Экшен на лайка фотографии
export const likePhoto = (id) => {
  return {
    type: "LIKE_PHOTO",
    id,
  };
};
// Экшен на дизлайк фотографии
export const unlikePhoto = (id) => {
  return {
    type: "UNLIKE_PHOTO",
    id,
  };
};