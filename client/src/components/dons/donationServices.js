// components/auth/auth-service.js

import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || "http://localhost:5000"}/`,
    withCredentials: true
  }),

  createDonation(donationBox, location) {
    return this.service
      .post("/donations/new-donation", {
        donationBox,
        location
      })
      .then(response => response.data);
  },

  getDonationsAvailable() {
    return this.service
      .get("/donations/available")
      .then(response => response.data);
  },

  getDonationsGiver() {
    console.log("function DonationServices caleled)");
    return this.service.get("/donations/giver").then(response => {
      console.log("donations", response.data);
      return response.data;
    });
  },

  getDonationsAssociation() {
    console.log("function DonationServices called)");
    return this.service.get("/donations/taker").then(response => {
      console.log("donations", response.data);
      return response.data;
    });
  }
};