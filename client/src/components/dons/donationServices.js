// components/auth/auth-service.js

import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || "http://localhost:5000"}/`,
    withCredentials: true
  }),

  createDonation(donationBox, location, GeoLoc) {
    return this.service
      .post("/donations/new-donation", {
        donationBox,
        location,
        GeoLoc
      })
      .then(response => response.data);
  },

  getDonationsAvailable() {
    return (
      this.service
        .get("/donations/available")
        // WARNING PAS SUR DE CE QUE JE FAIS
        .then(response => response.data)
    );
  },

  getDonationsGiver() {
    return this.service.get("/donations/giver").then(response => {
      // console.log("donations", response.data);
      return response.data;
    });
  },

  getDonationsAssociation() {
    return this.service.get("/donations/taker").then(response => {
      // console.log("donations", response.data);
      return response.data;
    });
  },

  bookDonation(donationID) {
    console.log("function bookDonation called");
    return this.service.put(`/donations/book/${donationID}`).then(response => {
      console.log("booked", response.data);
      return response.data;
    });
  }
};
