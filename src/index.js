import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { loadMovies } from "./actions/movieActions";
import data from './data.json';

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadMovies(data));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body.querySelector('.container')
);