import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';

const App = ({ data }) => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <HomePage data={data.slice(0, 5)} />} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;