const express = require("express");
const passport = require("passport");
const router = express.Router();
const Donation = require("../models/Donation");

router.post("/new-donation", (req, res, next) => {
  if (!req.user || !req.user.clientType === "restaurant") {
    res.status(401).json({
      message: "Vous devez être un restaurateur authentifié pour créer des dons"
    });
    return;
  }

  if (!req.body.donationBox || req.body.donationBox.length === 0) {
    res.status(401).json({ message: "Vous devez donner au moins un produit" });
    return;
  }
  const donationBox = req.body.donationBox; //Array of donation items
  const giver = req.user._id;
  const status = "pending";
  const location = req.body.location || req.user.address || {};
  //NE FONCTIONNE PAS
  // const boxExpirationDate = new Date(
  //   Math.max(donationBox.map(donation => donation.expirationDate))
  // );

  const newDonation = new Donation({
    donationBox,
    // boxExpirationDate,
    giver,
    status,
    location
  });
  console.log(newDonation);
  newDonation
    .save()
    .then(donation => {
      res.status(201).json(donation);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong during donation save" });
    });
});

//Récupère les dons pending pour les associations
router.get("/available", (req, res, next) => {
  console.log(req.user);
  if (!req.user || !req.user.clientType === "association") {
    res.status(401).json({
      message:
        "Vous devez être une association authentifiée pour visioner les dons disponibles"
    });
    return;
  }

  Donation.find({ status: "pending" })
    .then(listDonations => {
      res.status(201).json(listDonations);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong during donations request" });
    });
});

module.exports = router;
