import data from './data.json';

const mockApi = {
    loadMovies() {
        return new Promise(resolve => {
            resolve(data);
        });
    }
};

export default mockApi;