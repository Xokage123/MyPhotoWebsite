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