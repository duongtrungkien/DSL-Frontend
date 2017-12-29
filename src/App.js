import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index'


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
