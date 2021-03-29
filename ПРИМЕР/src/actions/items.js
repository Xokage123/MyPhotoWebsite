  import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "7Hl_-lhdVSrXSwnayqLBOpquMP_81ErK_zur6YkKx6M",
  secret: "kIkhYPaHa6xocrquAYfT6nDpo7Jwv9qFphlia68YFeo",
  callbackUrl: "http://viewerphoto.ru/"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export function getOut() {
  return {
    type: 'GET_OUT',
    token: null
  };
}

export function getLogin(bool) {
  return {
    type: 'GET_LOGIN',
    login: bool
  };
}

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    itemsHasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    itemsIsLoading: bool
  };
}

export function scrolling(bool) {
  return {
    type: 'SCROLLING',
    scrolling: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function itemsFetchData(page, token) {

  console.log('BARRERTOKEN');
  console.log('page', page);
  console.log('token', token);

  if (token != null) {
    unsplash.auth.setBearerToken(token);
  }

  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    dispatch(scrolling(true));

    unsplash.photos.listPhotos(page)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        console.log('response1', response);
        return response;
      })
      .then((response) => {
        console.log('response2', response);
        return response.json();
      })
      .then((response) => {
        console.log('response3', response);
        return response;
      })
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
      .then(() => dispatch(scrolling(false)));
  };
}

export function itemsIncrPage(page) {
  return {
    type: 'ITEMS_INCR_PAGE',
    page: page + 1
  };
}

export function openModalWindow(bool) {
  return {
    type: 'OPEN_MODAL_WINDOW',
    isOpen: bool
  };
}

export function getTargetId(id) {
  return {
    type: 'GET_TARGET_ID',
    targetId: id
  }
}
