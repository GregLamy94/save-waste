import React from "react";

class Address extends React.Component {
  state = {
    address: ""
  };

  render() {
    return (
      <p>
        <label>
          <em>Adresse</em>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </label>
      </p>
    );
  }
}

export default Address;
