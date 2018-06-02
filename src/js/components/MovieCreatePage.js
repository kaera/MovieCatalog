import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieForm from "./MovieForm";

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    submitMovie(movie) {
        this.props.createMovie(movie);
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        return(
            <div>
                <h1>Add movie</h1>
                <div className="row">
                    <MovieForm submitMovie={this.submitMovie.bind(this)} />
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