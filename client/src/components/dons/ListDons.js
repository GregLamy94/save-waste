import React from "react";

import donationServices from "../dons/donationServices";
import CarddonAvailable from "./Card_available";

class ListDons extends React.Component {
  state = {
    donationsAvailable: []
  };

  fetchDonationsAvailable = () => {
    if (this.state.donationsAvailable.length === 0) {
      donationServices
        .getDonationsAvailable()
        .then(data => this.setState({ donationsAvailable: data }))
        .catch(err => this.setState({ donationsAvailable: {} }));
    } else {
      console.log("donations already in the state");
    }
  };

  componentDidMount = () => {
    this.fetchDonationsAvailable();
  };

  render() {
    return (
      <div className="listDonsAvailable">
        {this.state.donationsAvailable.map(don => (
          <CarddonAvailable key={don._id} {...don} />
        ))}
      </div>
    );
  }
}
export default ListDons;
