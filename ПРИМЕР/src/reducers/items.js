export function login(state = false, action) {
  switch (action.type) {
    case 'GET_LOGIN':
      return action.login;

    default:
      return state;
  }
}


export function token(state = null, action) {
  switch (action.type) {
    case 'GET_TOKEN':
      return action.token;

    case 'GET_OUT':
      return action.token;

    default:
      return state;
  }
}


export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.itemsHasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.itemsIsLoading;

    default:
      return state;
  }
}

export function scrolling(state = false, action) {
  switch (action.type) {
    case 'SCROLLING':
      console.log('action.scrolling', action.scrolling);
      return action.scrolling;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {

    case 'ITEMS_FETCH_DATA_SUCCESS':
      console.log('action.items', action.items);
      console.log('state', state);

      const newAction = [];
      action.items.forEach(el => {
        const indexElement = state.findIndex(photo => photo.id === el.id);
        if (indexElement < 0) {
            console.log('элемент не повторяется, indexElement = ', indexElement);
            newAction.push(el);
        }
      });
      console.log('newActionItems', newAction);
      return [ ...state, ...newAction ]


    case 'GET_NEW_LIKE':
      console.log('action.id', action.id);
      console.log('action.likes', action.likes);
      console.log('state', state);
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, likes: action.likes, liked_by_user: action.liked_by_user }
        }
          return item
        })

    default:
      return state;
  }
}

export function page(state = 1, action) {
  switch (action.type) {
    case 'ITEMS_INCR_PAGE':
      console.log('action.page', action.page);
      console.log('state', state);
      return action.page

    default:
      return state;
  }
}

export function isOpen(state = false, action) {
  switch (action.type) {
    case 'OPEN_MODAL_WINDOW':
      return action.isOpen

    default:
      return state;
  }
}

export function targetId(state = null, action) {
  switch (action.type) {
    case 'GET_TARGET_ID':
      return action.targetId

    default:
      return state;
  }
}
