import React from "react";

import KpiTop from "./KpiTop.js";
import KpiBottom from "./KpiBottom.js";
import MenuBar from "../navigation/MenuBar.js";
import CarddonBooked from "../dons/Card_booked.js";
import CarddonAvailable from "../dons/Card_available.js";

import donationServices from "../dons/donationServices";

//import { Link } from "react-router-dom";

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
    console.log("searching donations");

    this.props.updateCurrentPageName('Tableau de bord');

    if (this.props.user.clientType === "restaurant") {
      this.fetchDonationsRestaurant();
    } else {
      this.fetchDonationsAssociation();
    }
  };

  render() {
    //const isResto = this.props.user.clientType === "restaurant"

    const donsDone = this.state.donations.filter(
      don => don.status === "pickedUp"
    );
    const donsOnGoing = this.state.donations.filter(
      don => don.status !== "pickedUp"
    );
    const amount = 7 * donsDone.length;
    const nbmealsGiven = donsDone.length * 5;
    const emissionsCO2 = donsDone.length * 20;

    return (
      <div className="dashboard">
        <KpiTop amount={amount} donsOnGoing={donsOnGoing} />

        {donsDone.map(don => (
          <CarddonBooked key={don._id} user={this.props.user} {...don} />
        ))}

        {donsOnGoing.map(don => (
          <CarddonAvailable key={don._id} user={this.props.user} {...don} />
        ))}

        <KpiBottom
          donsDone={donsDone}
          nbmealsGiven={nbmealsGiven}
          emissionsCO2={emissionsCO2}
        />
      </div>
    );
  }
}
export default Dashboard;
