import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

export const history = createBrowserHistory()

export default function configureStore() {

  const persistedState = loadFromLocalStorage();

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    persistedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk // ... other middlewares ...
      )
    )
  );

  store.subscribe(() => saveToLocalStorage({
    token: store.getState().token
  }))


  return store
}
