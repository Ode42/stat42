import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Frame from "./Frame";
import NewStat from "./NewStat";

const StatRouter = () => {
    return (
        <Router>
            <Frame />
            <Switch>
                <Route exact path="/newstat" component={NewStat} />
            </Switch>
        </Router>
    );
}

export default StatRouter;