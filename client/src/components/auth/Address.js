import React from "react";
import Script from "react-load-script";

class Address extends React.Component {
  state = {
    address: this.props.address || "",
    results: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = { types: ["geocode", "address"] };

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );
    // Avoid paying for data that you don't need by restricting the
    // set of place fields that are returned to just the address
    // components and formatted address
    this.autocomplete.setFields(["address_components", "formatted_address"]); // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        address: addressObject.formatted_address
      });
      this.props.pushAddress(addressObject.formatted_address);
    }
  };

  render() {
    return (
      <div className="address">
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCEIV2Qpr3Jruoar-cm6RrUo6mBvyg7YKM&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <input
          id="autocomplete"
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          list="list"
        />
      </div>
    );
  }
}

export default Address;
