import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MoviePage from './MoviePage';

const App = ({ data }) => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <HomePage data={data.slice(0, 5)} />} />
                    <Route path="/:id" render={(props) => <MoviePage data={data.find(movie => movie.id == props.match.params.id )} />} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;