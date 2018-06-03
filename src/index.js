import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { loadMovies } from "./actions/movieActions";
import mockApi from "./mockApi";

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(dispatch => {
    mockApi.loadMovies().then(movies => {
        dispatch(loadMovies(movies));
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body.querySelector('#root')
);