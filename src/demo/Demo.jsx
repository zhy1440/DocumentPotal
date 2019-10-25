import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ButtonAppBar from "./ButtonAppBar";
import routes from "./routes";

var hist = createBrowserHistory();

class Demo extends Component {
    state = {};
    render() {
        return (
            <Router history={hist}>
                <ButtonAppBar></ButtonAppBar>
                {routes}
            </Router>
        );
    }
}

export default Demo;
