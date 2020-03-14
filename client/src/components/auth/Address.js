import React from "react";

class Address extends React.Component {
  state = {
    address: "",
    results: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <label>Adresse </label>
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          list="list"
        />
        <datalist id="list">
          {/* {this.state.results.map(address => {
            return <option>{address}</option>;
          })} */}
          <option value="7 rue civiale" />
          <option value="7 rue Mitoni" />
          <option value="7 rue Huilll" />
        </datalist>
      </div>
    );
  }
}

export default Address;
