import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1>Movie Catalog</h1>
        )
    }
}
export default HomePage
ReactDOM.render(<HomePage/>, document.body.querySelector('.container'));