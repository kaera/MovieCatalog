export default (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            return [
                ...state,
                ...action.movies
            ];
        case 'CREATE_MOVIE':
            return [
                ...state,
                action.movie
            ];
        case 'UPDATE_MOVIE':
            return state.map(movie => movie.id == action.movie.id ? action.movie : movie);
        default:
            return state;
    }
};