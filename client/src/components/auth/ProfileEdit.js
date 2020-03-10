import React from "react";

import authService from "./auth-service.js";
import { Link, Redirect } from "react-router-dom";

import Address from "./Address";

export default class extends React.Component {
  state = {
    user: {
      companyName: this.props.user.companyName,
      clientType: this.props.user.clientType,
      contactName: this.props.user.contactName || "",
      email: this.props.user.email,
      phone: this.props.user.phone || "",
      siret: this.props.user.siret || "", //uniquement sociétés
      address: this.props.user.address || "",
      imageUrl: this.props.user.imageUrl || ""
    },
    error: ""
  };

  logout = event => {
    authService.logout().then(response => {
      this.props.updateUser(false);
    });
  };

  handleUpload = event => {
    let formData = new FormData();
    formData.append("image", event.target.files[0]);

    authService.upload(formData).then(response => {
      this.props.updateUser(response);
    });
  };

  handleSubmit = () => {
    authService.edit(this.state.user).then(response => {
      this.props.updateUser(response);
      this.props.history.push("/profile");
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  updateAddress = address => {
    this.setState({
      user: {
        ...this.state.user,
        address: address
      }
    });
  };

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/" />
        ) : (
          <div className="container profile edit">
            <img
              className="avatar"
              src={
                this.state.imageUrl ||
                "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
              }
            />
            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className="error">{this.state.error}</p>}

              <p>
                <label>
                  <em>Vous êtes? </em>
                  <select
                    name="clientType"
                    value={this.state.user.clientType}
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
                    value={this.state.user.companyName}
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
                    value={this.state.user.email}
                    onChange={this.handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  <em>Contact Name</em>
                  <input
                    type="text"
                    name="contactName"
                    value={this.state.user.contactName}
                    onChange={this.handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  <em>N° de Téléphone</em>
                  <input
                    type="tel"
                    name="phone"
                    value={this.state.user.phone}
                    onChange={this.handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  <em>Numéro Siret</em>
                  <input
                    type="number"
                    name="siret"
                    value={this.state.user.siret}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <Address updateAddress={this.updateAddress} />

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </>
    );
  }
}
