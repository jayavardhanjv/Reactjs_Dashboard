import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Manager from "../pages/Manager";


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/Manager" component={Manager} />
                </Switch>
            </Router>
        )
    }
}