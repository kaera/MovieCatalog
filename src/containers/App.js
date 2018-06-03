import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import MovieCreatePage from './MovieCreatePage';
import MovieUpdatePage from './MovieUpdatePage';
import '../assets/styles/styles.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/new" component={MovieCreatePage} />
                <Route path="/:id/edit" component={MovieUpdatePage} />
                <Route path="/:id" component={MoviePage} />
            </Switch>
        </Router>
    )
};

export default App;