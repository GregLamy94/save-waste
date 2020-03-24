const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    companyName: String,
    clientType: { type: String, enum: ["association", "restaurant"] },
    contactName: String,
    email: String, //email
    password: String,
    phone: Number,
    siret: Number, //uniquement sociétés
<<<<<<< HEAD
    donationsArray: [{ type: Schema.Types.ObjectId, ref: "Donation" }],
=======
    //donationsArray:[{ type: Schema.Types.ObjectId, ref: "Donation" }],
>>>>>>> 790f6a7817ffb9712e60118c8cc0974245d9c83b
    // address: {
    //   street: String,
    //   zipCode: Number,
    //   city: String,
    //   geo: {
    //     lat: Number,
    //     long: Number
    //   }
    // },
    address: "",
    GeoLoc: {
      lat: Number,
      lng: Number
    },
    imageUrl: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
