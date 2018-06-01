import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';

import data from '../../data.json';

class HomePage extends Component {
    constructor(props) {
        super(props);
        props.data.forEach(_ => _.img = 'https://www.kinopoisk.ru/images/film_big/435.jpg')
    }

    render() {
        return (
            <div>
                <h1>Movie Catalog</h1>
                <div className="row">
                    {this.props.data.map(_=> <MovieCard key={_.id} data={_} />)}
                </div>
            </div>
        )
    }
}
export default HomePage
ReactDOM.render(<HomePage data={data} />, document.body.querySelector('.container'));