import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import MovieCard from '../components/MovieCard';

const HomePage = (props) => {
    return (
        <div>
            <h1>Movie Catalog</h1>
            <Link to="/new" className="btn btn-link">Add movie</Link>
            <div className="row">
                {props.movies.map(_=> <MovieCard {...props} key={_.id} data={_} />)}
            </div>
        </div>
    )
};

export default connect(state => ({ movies: state.movies }))(HomePage);