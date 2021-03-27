import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'df7ICabs2U1sK_fvyU2BuzlCLv-eduqU51fMxIn6Hvs',
});

console.log(unsplash);

export async function unsplashGetPhoto (id) {
  const answer = await unsplash.photos.get({photoId: id});
  if (answer.status === 200) {
    const photo = answer.response;
    return photo;
  }
}

export async function unsplashGetListPhotos (page) {
  const answer = await unsplash.photos.list({
    page
  });
  if (answer.status === 200) {
    const photoList = answer.response.results;
    return photoList;
  }
}




