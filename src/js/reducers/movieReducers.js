export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_MOVIE':
            return [
                ...state,
                Object.assign({}, action.movie)
            ];
        case 'LOAD_MOVIES':
            return [
                ...state,
                ...action.movies
            ];
        default:
            return state;
    }
};