import React from "react";
import Kpi from "./Kpi.js";
import MenuBar from "../navigation/MenuBar.js";
import donationServices from "../dons/donationServices";

//import { Link } from "react-router-dom";

// donsonGoing={this.state.pendingDons.length}
//                       donsDone={this.state.terminatedDons.length}
//
//                       nbmealsGiven={this.state.terminatedDons.length * 5}
//                       emissionsCO2={this.state.terminatedDons.length * 20}

class Dashboard extends React.Component {
  state = {
    donations: []
  };

  fetchDonationsRestaurant = () => {
    if (this.state.donations.length === 0) {
      donationServices
        .getDonationsGiver()
        .then(data => this.setState({ donations: data }))
        .catch(err => this.setState({ donations: {} }));
    } else {
      console.log("donations already in the state");
    }
  };

  fetchDonationsAssociation = () => {
    if (this.state.donations.length === 0) {
      donationServices
        .getDonationsAssociation()
        .then(data => this.setState({ donations: data }))
        .catch(err => this.setState({ donations: {} }));
    } else {
      console.log("donations already in the state");
    }
  };

  componentDidMount = () => {
    console.log("seraching donations");
    if (this.props.user.clientType === "restaurant") {
      this.fetchDonationsRestaurant();
    } else {
      this.fetchDonationsAssociation();
    }
  };

  render() {
    //calculs qui sont identiques Restaurant/Association non ?
    const donsDone = this.state.donations.filter(
      don => don.status === "pickedUp"
    );
    const donsonGoing = this.state.donations.filter(
      don => don.status !== "pickedUp"
    );
    const amount = 7 * donsDone.length;
    const nbmealsGiven = donsDone.length * 5;
    const emissionsCO2 = donsDone.length * 20;

    return (
      <div className="dashboard">
        <Kpi
          amount={amount}
          donsDone={donsDone}
          nbmealsGiven={nbmealsGiven}
          emissionsCO2={emissionsCO2}
          donsonGoing={donsonGoing}
        />
        <MenuBar />
      </div>
    );
  }
}
export default Dashboard;
