import React from "react";
import Script from "react-load-script";

class Address extends React.Component {
  state = {
    address: this.props.address || "",
    GeoLoc: {},
    results: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["geocode", "address"]
    };
    const input = document.getElementById("autocomplete");
    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(input);
    // Avoid paying for data that you don't need by restricting the
    // set of place fields that are returned to just the address
    // components and formatted address
    this.autocomplete.setFields([
      "address_components",
      "formatted_address",
      "geometry"
    ]); // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const GeoLoc = {
      lat: addressObject.geometry.location.lat(),
      lng: addressObject.geometry.location.lng()
    };
    console.log(GeoLoc);
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        address: addressObject.formatted_address,
        GeoLoc: GeoLoc
      });
      this.props.pushAddress(addressObject.formatted_address, GeoLoc);
    }
  };

  render() {
    return (
      <div className="address">
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <input
          id="autocomplete"
          type="text"
          name="address"
          value={this.state.address}
          placeholder={this.state.address}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Address;
