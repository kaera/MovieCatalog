export const loadMovies = (movies) => {
    return {
        type: 'LOAD_MOVIES',
        movies
    }
};

export const createMovie = (movie) => {
    return {
        type: 'CREATE_MOVIE',
        movie
    }
};

export const updateMovie = (movie) => {
    return {
        type: 'UPDATE_MOVIE',
        movie
    }
};