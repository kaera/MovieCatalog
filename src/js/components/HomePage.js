import React, { Component } from 'react';
import MovieCard from './MovieCard';
import {connect} from "react-redux";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Movie Catalog</h1>
                <a href="/new" className="btn btn-link">add movie</a>

                <div className="row">
                    {this.props.movies.map(_=> <MovieCard key={_.id} data={_} />)}
                </div>
            </div>
        )
    }
}

export default connect(state => ({ movies: state.movies }))(HomePage);
