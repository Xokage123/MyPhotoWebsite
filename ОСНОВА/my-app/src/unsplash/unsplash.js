import { createApi } from 'unsplash-js';
import options from "../CONST";

const unsplash = createApi({
    accessKey: options.access_key,
});

export async function unsplashGetPhoto(id) {
    const answer = await unsplash.photos.get({ photoId: id });
    if (answer.status === 200) {
        const photo = answer.response;
        return photo;
    }
}

export async function unsplashGetListPhotos(page) {
    const answer = await unsplash.photos.list({
        page
    });
    if (answer.status === 200) {
        const photoList = answer.response.results;
        return photoList;
    }
}