import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/components/App';
import data from './data.json';

import configureStore from './js/store/configureStore';

const store = configureStore({
    movies: data
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body.querySelector('.container')
);