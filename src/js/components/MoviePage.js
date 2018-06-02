import React, { Component } from 'react';

class MoviePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="media">
                    <img className="mr-3" src={this.props.data.img} alt={this.props.data.title} />
                    <div className="media-body">
                        <h2 className="mt-0">{this.props.data.title}</h2>
                        {Object.entries(this.props.data.ratings).map(([name, rating]) => <p className="text-capitalize" key={name}>{name}: {rating}</p>)}
                        <p>{this.props.data.plot}</p>

                    </div>

                </div>

                <dl className="row mt-5">
                    <dt className="col-sm-3">Год выпуска:</dt>
                    <dd className="col-sm-9">{this.props.data.year}</dd>

                    <dt className="col-sm-3">{this.props.data.categories.title}:</dt>
                    <dd className="col-sm-9">{this.props.data.categories.list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">{this.props.data.countries.title}:</dt>
                    <dd className="col-sm-9">{this.props.data.countries.list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">{this.props.data.collectives[0].title}:</dt>
                    <dd className="col-sm-9">{this.props.data.collectives[0].list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">{this.props.data.collectives[1].title}:</dt>
                    <dd className="col-sm-9">{this.props.data.collectives[1].list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">Продолжительность:</dt>
                    <dd className="col-sm-9">{this.props.data.duration}</dd>
                </dl>
            </div>
        )
    }
}
export default MoviePage
