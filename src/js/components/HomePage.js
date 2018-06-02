import React, { Component } from 'react';
import MovieCard from './MovieCard';

class HomePage extends Component {
    constructor(props) {
        super(props);
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
