import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MoviePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <MovieCard data={this.props.data} />
            </div>
        )
    }
}
export default MoviePage
