import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieForm from "./MovieForm";

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    updateMovie(movie) {
        Object.assign(this.props.movies.find(_ => _.id == movie.id), movie);
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        const movie = this.props.movies.find(item => item.id == this.props.match.params.id);
        return(
            <div>
                <h1>Update movie</h1>
                <div className="row">
                    <MovieForm submitMovie={this.updateMovie.bind(this)} movie={movie} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMovie: movie => dispatch(movieActions.createMovie(movie))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);