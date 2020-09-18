import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custom Components
import Home from './Home';
import Result from './Result';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/result" component={Result} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;