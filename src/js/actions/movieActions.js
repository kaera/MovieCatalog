export const createMovie = (movie) => {
    return {
        type: 'CREATE_MOVIE',
        movie: movie
    }
};