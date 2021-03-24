import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import './GLOBAL.css';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import photos from "./reducers/photos";
import currentPhoto from "./reducers/currentPhoto";
import Photos from "./containers/Photos";
import CurrentPhoto from "./containers/CurrentPhoto";

// История
const customHistory = createBrowserHistory();
// Создаем хранилище состояний
const rootReducer = combineReducers({photos, currentPhoto});
const store = createStore(rootReducer);
// Присваиваем номер страницы
localStorage.setItem("page", "1");


ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/photos/:id" component={CurrentPhoto} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);