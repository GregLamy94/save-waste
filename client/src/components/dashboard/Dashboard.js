import React from "react";

import KpiTop from "./KpiTop.js";
import KpiBottom from "./KpiBottom.js";
import MenuBar from "../navigation/MenuBar.js";
import CarddonBooked from "../dons/Card_booked.js";
import CarddonAvailable from "../dons/Card_available.js";

import donationServices from "../dons/donationServices";

//import { Link } from "react-router-dom";

class Dashboard extends React.Component {

  // PERMET DE RENDRE LE TITRE DE LA PAGE DYBAMIQUE --> A REPLACER 
  // componentDidMount(){
  //   this.props.getCurrentPageName("Tableau de bord");
  // }
  // render(){
  //   return(
  // state = {
  //   donations: []
  // };

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
          <CarddonBooked key={don._id} {...don} />
        ))}

        {donsOnGoing.map(don => (
          <CarddonAvailable key={don._id} {...don} />
        ))}

        <KpiBottom
          donsDone={donsDone}
          nbmealsGiven={nbmealsGiven}
          emissionsCO2={emissionsCO2}
        />
        <MenuBar />
      </div>
    );
  }
}
export default Dashboard;
