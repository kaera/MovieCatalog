import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/new" className="btn btn-link">Add movie</Link>
                <div className="row">
                    {this.props.movies.map(_=> <MovieCard {...this.props} key={_.id} data={_} />)}
                </div>
            </div>
        )
    }
}

export default connect(state => ({ movies: state.movies }))(HomePage);
