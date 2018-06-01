import React, { Component } from 'react';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card col-4">
                <img className="card-img-top" src={this.props.data.img} alt={this.props.data.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.plot}</p>
                    <a href="#" className="btn btn-link">Go somewhere</a>
                </div>
            </div>
        )
    }
}
export default MovieCard
