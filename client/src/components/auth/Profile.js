import React from "react";

import Popin from "../Popin.js";
import authService from "./auth-service.js";
import { Redirect } from "react-router-dom";

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
          <Popin
            one={
              <>
                <img
                  className="avatar"
                  src={
                    this.props.user.imageUrl ||
                    "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
                  }
                />

                <h1>Bonjour</h1>
                <h2>
                  <span>{this.props.user.clientType}</span>
                  <span>{this.props.user.username}</span>
                </h2>
                <div className="cta">
                  <button className="btn logout" onClick={this.logout}>
                    Logout
                  </button>
                </div>
              </>
            }
          />
        )}
      </>
    );
  }
}
