import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';
import { loadMovies } from "./js/actions/movieActions";
import data from './data.json';

import configureStore from './js/store/configureStore';

const store = configureStore();
store.dispatch(loadMovies(data));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body.querySelector('.container')
);