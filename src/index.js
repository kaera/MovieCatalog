import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import data from './data.json';

ReactDOM.render(<App data={data} />, document.body.querySelector('.container'));