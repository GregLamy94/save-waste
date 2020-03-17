import React from "react";

import authService from "./auth-service.js";
import { Link, Redirect } from "react-router-dom";

export default class extends React.Component {
  logout = event => {
    authService.logout().then(response => {
      this.props.updateUser(false);
    });
  };

  handleUpload = event => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);

    authService.upload(formData).then(response => {
      this.props.updateUser(response);
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
              <p>{this.props.user.clientType}</p>
              <p>email : {this.props.user.email}</p>
              <p>
                Contact Name :{" "}
                {this.props.user.contactName ? (
                  <span>{this.props.user.contactName}</span>
                ) : (
                  " "
                )}{" "}
              </p>
              <p>
                Phone :{" "}
                {this.props.user.phone ? (
                  <span>{this.props.user.phone}</span>
                ) : (
                  " "
                )}{" "}
              </p>
              <p>
                Address :{" "}
                {this.props.user.address && this.props.user.address ? (
                  <span>
                    {this.props.user.address.street},{" "}
                    {this.props.user.address.zipCode},{" "}
                    {this.props.user.address.city}{" "}
                  </span>
                ) : (
                  " "
                )}{" "}
              </p>
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
