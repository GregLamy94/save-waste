import React from "react";

import authService from "./auth-service.js";
import { Link, Redirect } from "react-router-dom";

export default class extends React.Component {
  logout = event => {
    authService.logout().then(response => {
      this.props.updateUser(false);
    });
  };

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/" />
        ) : (
          <div className="container profile">
            <Link className="editIcon" to="/profile/edit">
              <img src="edit.svg" />
            </Link>
            <img
              className="avatar"
              src={
                this.props.user.imageUrl ||
                "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
              }
            />

            <h1>{this.props.user.companyName}</h1>
            <div className="info">
              <p>
                {this.props.user.clientType.charAt(0).toUpperCase() +
                  this.props.user.clientType.slice(1)}
              </p>
              <p>email : {this.props.user.email}</p>
              <p>
                Nom de contact :{" "}
                {this.props.user.contactName ? (
                  <span>{this.props.user.contactName}</span>
                ) : (
                  " "
                )}{" "}
              </p>
              <p>
                Téléphone :{" "}
                {this.props.user.phone ? (
                  <span>{this.props.user.phone}</span>
                ) : (
                  " "
                )}{" "}
              </p>
              <p>
                Adresse :{" "}
                {this.props.user.address ? (
                  <span>{this.props.user.address}</span>
                ) : (
                  " "
                )}{" "}
              </p>
              {this.props.user.clientType === "restaurant" ? (
                <p>
                  Siret :{" "}
                  {this.props.user.siret ? (
                    <span>{this.props.user.address.siret}, </span>
                  ) : (
                    " "
                  )}{" "}
                </p>
              ) : null}
            </div>
            <div className="cta">
              <button className="btn logout" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
