import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

// HashRouter - меньше телодвижений при публикции на сервер
// BrowserRouter - добавляет адресу красоту, убирает # из адреса

//import './css/addcomment.css';
//import './css/historycomments.css';

import App from './containers/app';
import Photo from './components/photo';

const initialState = [];

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        // <Route path="/:id" component={Photo} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
