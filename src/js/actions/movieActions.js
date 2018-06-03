export const createMovie = (movie) => {
    return {
        type: 'CREATE_MOVIE',
        movie
    }
};

export const loadMovies = (movies) => {
    return {
        type: 'LOAD_MOVIES',
        movies
    }
};