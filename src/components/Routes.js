import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custom Components
import Home from './Home';
import Result from './Result';
import Details from './Details';
import PageNotFound from './PageNotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/result" component={Result} />
                <Route exact path="/details" component={Details} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;