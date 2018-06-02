import React from 'react';
import { Link } from 'react-router-dom';

let titleInput;
let yearInput;
let categoriesInput;
let plotInput;
let imgInput;
let countriesInput;
let directorsInput;
let durationInput;
let actorsInput;
let idInput;

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        const movie = {
            title: titleInput.value,
            img: imgInput.value,
            year: yearInput.value,
            categories: {
                list: categoriesInput.value.split(/,\s*/).map(_ => ({ name: _})),
            },
            countries: {
                list: countriesInput.value.split(/,\s*/).map(_ => ({ name: _})),
            },
            collectives: [
                {
                    title: "Режиссеры",
                    list: directorsInput.value.split(/,\s*/).map(_ => ({ name: _})),
                },
                {
                    title: "Актеры",
                    list: actorsInput.value.split(/,\s*/).map(_ => ({ name: _})),
                }
            ],
            plot: plotInput.value,
            duration: durationInput.value,
            id: idInput.value
        };
        this.props.submitMovie(movie);
    }

    render() {
        const movie = this.props.movie || {
            countries: { list: [] },
            categories: { list: [] },
            collectives: [{ list: [] }, { list: [] }],
            id: +new Date % 1e8
        };
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="hidden" name="id" ref={node => idInput = node} defaultValue={movie.id} />
                    <dl className="row mt-5">
                        <dt className="col-sm-3">Заголовок:</dt>
                        <dd className="col-sm-9">
                            <input
                                type="text"
                                name="title"
                                ref={node => titleInput = node}
                                defaultValue={movie.title}
                                required
                            />
                        </dd>

                        <dt className="col-sm-3">Превью:</dt>
                        <dd className="col-sm-9">
                            <input
                                type="url"
                                name="img"
                                ref={node => imgInput = node}
                                defaultValue={movie.img}
                                required
                            />
                        </dd>

                        <dt className="col-sm-3">Год выпуска:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="year" ref={node => yearInput = node} defaultValue={movie.year} />
                        </dd>

                        <dt className="col-sm-3">Страны:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="countries" ref={node => countriesInput = node} defaultValue={movie.countries.list.map(_ => _.name).join(', ')} />
                        </dd>

                        <dt className="col-sm-3">Жанры:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="categories" ref={node => categoriesInput = node} defaultValue={movie.categories.list.map(_ => _.name).join(', ')} />
                        </dd>

                        <dt className="col-sm-3">Режиссеры:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="directors" ref={node => directorsInput = node} defaultValue={movie.collectives[0].list.map(_ => _.name).join(', ')} />
                        </dd>

                        <dt className="col-sm-3">Актеры:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="actors" ref={node => actorsInput = node} defaultValue={movie.collectives[1].list.map(_ => _.name).join(', ')} />
                        </dd>

                        <dt className="col-sm-3">Продолжительность:</dt>
                        <dd className="col-sm-9">
                            <input type="text" name="duration" ref={node => durationInput = node} defaultValue={movie.duration} />
                        </dd>

                        <dt className="col-sm-3">Сюжет:</dt>
                        <dd className="col-sm-9">
                            <textarea name="plot" ref={node => plotInput = node} defaultValue={movie.plot} required>
                            </textarea>
                        </dd>
                    </dl>

                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                            <input className="btn btn-link" type="submit" value="Save"/>
                            <Link to="/" className="btn btn-link">Cancel</Link>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default MovieForm