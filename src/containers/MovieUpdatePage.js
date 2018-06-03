import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieForm from "../components/MovieForm";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.updateMovie = this.updateMovie.bind(this);
    }

    updateMovie(movie) {
        this.props.dispatch(movieActions.updateMovie(movie));
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        const movie = this.props.movies.find(item => item.id == this.props.match.params.id);
        return(
            <div className="container">
                <h1>Update movie</h1>
                <div className="row">
                    <MovieForm submitMovie={this.updateMovie} movie={movie} />
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

export default connect(mapStateToProps)(Movie);