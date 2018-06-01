import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../../data.json';

class HomePage extends Component {
    constructor() {
        super();
        console.log(
            data
        )
    }

    render() {
        return (
            <h1>Movie Catalog</h1>
        )
    }
}
export default HomePage
ReactDOM.render(<HomePage/>, document.body.querySelector('.container'));