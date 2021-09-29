import React, { Component } from "react"
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Alumni from './components/alumni/alumni';
import './App.css';
import Navbar from './components/UI/Navbar';
import Workshop from './components/Workshop/Workshop';
import Team from './components/TeamPage/TeamPage';
import {
  Switch,
  Route
} from "react-router-dom";
import "./App.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/alumni">
            <Alumni />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/workshop">
            <Workshop />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
