import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/auth/Homepage.js";
import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/auth/Profile.js";

import Navbar from "./components/navigation/Navbar";
import MenuBar from "./components/navigation/MenuBar";

import authService from "./components/auth/auth-service.js";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  state = {
    user: {},
    terminatedDons: []
  };

  fetchUser = () => {
    if (!this.state.user._id) {
      authService
        .loggedin()
        .then(data => this.setState({ user: data }))
        .catch(err => this.setState({ user: {} }));
    } else {
      console.log("user already in the state");
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <Navbar user={this.state.user} />
        <Route
          render={props => (
            <div className="App" data-route={props.location.pathname}>
              {" "}
              {/* data-route="/" allow us to style pages */}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Homepage user={this.state.user} />}
                />

                <Route
                  exact
                  path="/signup"
                  render={props => (
                    <Signup
                      updateUser={this.updateUser}
                      history={props.history}
                    />
                  )}
                />

                <Route
                  exact
                  path="/login"
                  render={props => (
                    <Login
                      updateUser={this.updateUser}
                      history={props.history}
                    />
                  )}
                />

                <Route
                  exact
                  path="/profile"
                  render={props => (
                    <Profile
                      user={this.state.user}
                      updateUser={this.updateUser}
                      history={props.history}
                    />
                  )}
                />

                <Route
                  exact
                  path="/dashboard"
                  render={props => (
                    <Dashboard
                      clientType={this.state.user.clientType}
                      history={props.history}
                      amount={this.state.terminatedDons.length*7}
                      
                    />
                  )}
                />

                {/* last route, ie: 404 */}
                <Route render={() => <h1>Not Found</h1>} />
              </Switch>
            </div>
          )}
        />
        {this.state.user._id ? <MenuBar user={this.state.user} /> : ""}
      </div>
    );
  }
}

export default App;
