import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Users from "./Users";
import UserDetail from './UserDetail';

export default (
    // {/* A <Switch> looks through its children <Route>s and
    //     renders the first one that matches the current URL. */}
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/users" exact component={Users}></Route>
        <Route path="/users/:id" component={UserDetail}></Route>
    </Switch>
);
