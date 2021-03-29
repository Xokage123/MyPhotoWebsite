import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { items, itemsHasErrored, itemsIsLoading, page, scrolling, isOpen, targetId, token, login } from './items'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  items,
  itemsHasErrored,
  itemsIsLoading,
  page,
  scrolling,
  isOpen,
  targetId,
  token,
  login
});

export default createRootReducer
