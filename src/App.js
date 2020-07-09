import React, { Component } from "react";
import "./App.css";
import { GithubJobDesk, DetailJob, About } from "./Page/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Dependency />
          <div className="App">
            <div class="header">
              <a>
                <Link to="/">Home</Link>
              </a>
              <a>
                <Link to="/about">About Me</Link>
              </a>
            </div>
          </div>

          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/job/:id" component={DetailJob}></Route>
            <Route path="/job" component={GithubJobDesk}></Route>
            <Route path="/" component={GithubJobDesk}></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

function Dependency() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Chilanka"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      ></link>
    </>
  );
}

export default App;
