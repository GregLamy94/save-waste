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
  }
};
