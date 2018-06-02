import React, { Component } from 'react';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    navigateToMovie(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: this.props.data.id
        });
    }

    render() {
        return (
            <div className="card col-4">
                <img className="card-img-top" src={this.props.data.img} alt={this.props.data.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">Год выпуска: {this.props.data.year}</p>
                    <p className="card-text">
                        {this.props.data.categories.title}:&nbsp;
                        {this.props.data.categories.list.map(item => item.name).join(', ')}
                    </p>
                    <p className="card-text">
                        {this.props.data.collectives[0].title}:&nbsp;
                        {this.props.data.collectives[0].list.map(item => item.name).join(', ')}
                    </p>
                    <p className="card-text">Продолжительность: {this.props.data.duration}</p>

                    <a href={this.props.data.id} onClick={this.navigateToMovie.bind(this)} className="btn btn-link">Show details</a>
                </div>
            </div>
        )
    }
}
export default MovieCard
