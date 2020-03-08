import React from "react";

import { Link } from "react-router-dom";

import Popin from "../Popin.js";
import authService from "./auth-service.js";

export default class extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    authService
      .login(this.state.email, this.state.password)
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
            <h1>Log in</h1>

            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className="error">{this.state.error}</p>}

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
                <button className="btn" type="submit">
                  Log in
                </button>
              </div>
            </form>
            <p>
              <small>
                Vous n'avez pas un compte? <Link to="/signup">S'inscrire</Link>
              </small>
            </p>
          </>
        }
      />
    );
  }
}
