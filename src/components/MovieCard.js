import React, { Component } from 'react';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    navigateToMoviePage(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: this.props.data.id
        });
    }

    navigateToEditMoviePage(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: this.props.data.id + '/edit'
        });
    }

    render() {
        return (
            <div className="card border-0">
                <div className="movie-preview">
                    <img className="card-img-top" src={this.props.data.img} alt={this.props.data.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">Год выпуска: {this.props.data.year}</p>
                    <p className="card-text">
                        Жанры: {this.props.data.categories.list.map(item => item.name).join(', ')}
                    </p>
                    <p className="card-text">
                        {this.props.data.collectives[0].title}:&nbsp;
                        {this.props.data.collectives[0].list.map(item => item.name).join(', ')}
                    </p>
                    <p className="card-text">Продолжительность: {this.props.data.duration}</p>

                    <a href={this.props.data.id} onClick={this.navigateToMoviePage.bind(this)} className="btn btn-link">Show details</a>
                    <a href={this.props.data.id + '/edit'} onClick={this.navigateToEditMoviePage.bind(this)} className="btn btn-link">Edit movie</a>
                </div>
            </div>
        )
    }
}
export default MovieCard
