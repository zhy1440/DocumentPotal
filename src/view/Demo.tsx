import React, { Component, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import TopBar from "./TopBar";
import routes from "../demo/routes";
import { Provider } from "react-redux";
import configureStore from "../demo/redux/store";
import { loadCats } from "../demo/redux/actions/catActions";
import Main from "./Main";

var hist = createBrowserHistory();

const store = configureStore();
store.dispatch(loadCats());

// loading component for suspense fallback
const Loader = () => (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>loading...</div>
    </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function Demo() {
    return (
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <Router history={hist}>
                    <Main>{routes}</Main>
                </Router>
            </Provider>
        </Suspense>
    );
}
