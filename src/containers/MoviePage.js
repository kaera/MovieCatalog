import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.movies.find(item => item.id == this.props.match.params.id);
        return (
            <div>
                <div className="media">
                    <img className="mr-3" src={data.img} alt={data.title} />
                    <div className="media-body">
                        <h2 className="mt-0">{data.title}</h2>
                        {Object.entries(data.ratings || {}).map(([name, rating]) => <p className="text-capitalize" key={name}>{name}: {rating}</p>)}
                        <p>{data.plot}</p>
                    </div>
                </div>

                <dl className="row mt-5">
                    <dt className="col-sm-3">Год выпуска:</dt>
                    <dd className="col-sm-9">{data.year}</dd>

                    <dt className="col-sm-3">Жанры:</dt>
                    <dd className="col-sm-9">{data.categories.list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">Страны:</dt>
                    <dd className="col-sm-9">{data.countries.list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">{data.collectives[0].title}:</dt>
                    <dd className="col-sm-9">{data.collectives[0].list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">{data.collectives[1].title}:</dt>
                    <dd className="col-sm-9">{data.collectives[1].list.map(item => item.name).join(', ')}</dd>

                    <dt className="col-sm-3">Продолжительность:</dt>
                    <dd className="col-sm-9">{data.duration}</dd>
                </dl>
            </div>
        )
    }
}
export default connect(state => ({ movies: state.movies }))(MoviePage)
