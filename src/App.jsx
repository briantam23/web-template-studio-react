﻿import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Master_Detail from "./components/Master_Detail";
import Blank from "./components/Blank";
import List from "./components/List";
import Grid from "./components/Grid";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Master_Detail" />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <Route path = "/Blank" component = { Blank } />
          <Route path = "/List" component = { List } />
          <Route path = "/Grid" component = { Grid } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
