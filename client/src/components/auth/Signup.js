import React from "react";

import { Link } from "react-router-dom";

import Popin from "../Popin.js";
import authService from "./auth-service.js";

export default class extends React.Component {
  state = {
    clientType: "",
    companyName: "",
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    // 1. Signup
    authService
      .signup(
        this.state.email,
        this.state.password,
        this.state.companyName,
        this.state.clientType
      )
      .then(response => {
        this.setState({ error: "" });
        this.props.updateUser(response);
        this.props.history.push("/");
      })
      .catch(err => this.setState({ error: err.response.data.message }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Popin
        one={
          <>
            <h1>Sign up</h1>

            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className="error">{this.state.error}</p>}
              <p>
                <label>
                  <em>Vous êtes? </em>
                  <select
                    name="clientType"
                    value={this.state.clientType}
                    onChange={this.handleChange}
                  >
                    <option value=""></option>
                    <option value="association">Association</option>
                    <option value="restaurant">Restaurant</option>
                  </select>
                </label>
              </p>
              <p>
                <label>
                  <em>Raison sociale</em>
                  <input
                    type="text"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  <em>Mail</em>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  <em>Mot de passe</em>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <div className="cta">
                <button type="submit" className="btn">
                  Sign up
                </button>
              </div>
            </form>

            <p>
              <small>
                Vous avez déjà un compte?<Link to="/login">Login</Link>
              </small>
            </p>
          </>
        }
      />
    );
  }
}
