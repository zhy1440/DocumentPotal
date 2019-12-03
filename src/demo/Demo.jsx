import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ButtonAppBar from "./ButtonAppBar";
import routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { loadCats } from './redux/actions/catActions';
import Main from './Main';

var hist = createBrowserHistory();

const store = configureStore();
store.dispatch(loadCats());

class Demo extends Component {
    state = {};
    render() {
        return (
            <Provider store={store}>
            <Router history={hist}>
                <Main>{routes}</Main>
                {/* <ButtonAppBar></ButtonAppBar> */}
            </Router>
        </Provider>
        );
    }
}

export default Demo;
