import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieForm from "../components/MovieForm";

class Movie extends React.Component {
    submitMovie(movie) {
        this.props.dispatch(movieActions.createMovie(movie));
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

export default connect()(Movie);