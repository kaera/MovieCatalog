import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    submitMovie(input){
        this.props.createMovie(Object.assign({
            categories: { list: [] },
            collectives: [
                { list: [] },
                { list: [] }
            ]
        }, input));
    }

    render(){
        let titleInput;
        let yearInput;
        let categoriesInput;
        let plotInput;
        let imgInput;
        let countriesInput;
        let directorsInput;
        let actorsInput;

        return(
            <div>
                <Link to="/"> Home </Link>
                <h3>Movie</h3>
                <ul>
                    {this.props.movies.map((b, i) => <li key={i}>{b.title}</li> )}
                </ul>
                <div>
                    <h3>Movie Form</h3>
                    <form onSubmit={e => {
                        e.preventDefault();
                        const movie = {
                            title: titleInput.value,
                            year: yearInput.value,
                            categories: {
                                list: categoriesInput.value.split(/,\s*/),
                            },
                            countries: {
                                list: countriesInput.value.split(/,\s*/),
                            },
                            collectives: [
                                {
                                    title: "Режиссеры",
                                    list: directorsInput.value.split(/,\s*/),
                                },
                                {
                                    title: "Актеры",
                                    list:  actorsInput.value.split(/,\s*/),

                                }
                            ],
                            plot: plotInput.value,
                            id: +new Date % 1e8
                        };
                        this.submitMovie(movie);
                        e.target.reset();
                    }}>
                        <dl className="row mt-5">
                            <dt className="col-sm-3">Заголовок:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="title" ref={node => titleInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Превью:</dt>
                            <dd className="col-sm-9">
                                <input type="url" name="img" ref={node => imgInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Год выпуска:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="year" ref={node => yearInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Страны:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="countries" ref={node => countriesInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Жанры:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="categories" ref={node => categoriesInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Режиссеры:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="directors" ref={node => directorsInput = node}/>
                            </dd>

                            <dt className="col-sm-3">Актеры:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="actors" ref={node => actorsInput = node}/>
                            </dd>

                            <dt className="col-sm-3"> Сюжет:</dt>
                            <dd className="col-sm-9">
                                <input type="text" name="plot" ref={node => plotInput = node}/>
                            </dd>
                        </dl>

                        <input type="submit" />
                    </form>
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