import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Address from "../auth/Address";
import UnitDonation from "./UnitDonation";
import donationServices from "./donationServices";

class DonationForm extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <Formik
        initialValues={{
          donationBox: [
            {
              productName: "",
              productType: "Légumes",
              quantity: {
                value: 0,
                qtyType: "kg"
              },
              expirationDate: new Date(Date.now())
            }
          ],
          location: this.props.user.address || ""
        }}
        // validationSchema={Yup.object({
        //   productName: Yup.string()
        //     .max(30, "Doit contenir moins de 30 caractères")
        //     .required("Nom du produit requis"),
        //   value: Yup.number
        //     .positive("Doit être positif")
        //     .required("Quantité requise"),
        //   qtyType: Yup.string()
        //     .oneOf(["kg", "qty"], "Typologie invalide")
        //     .required("Requis"),
        //   expirationDate: Yup.date.min(
        //     Date.now(),
        //     "Date d'expiration doit être postérieure à la date d'aujourd'hui"
        //   )
        // })}
        onSubmit={(values, { setSubmitting }) => {
          const { donationBox, location } = values;
          console.log("values", values);
          donationServices
            .createDonation(donationBox, location)
            .then(response => {
              this.props.history.push(`/dashboard`);
            })
            .catch(err => console.log(err));
        }}
      >
        {({ values, setFieldValue }) => {
          const handleAddDon = () =>
            setFieldValue("donationBox", [
              ...values.donationBox,
              {
                productName: "",
                productType: "Légumes",
                quantity: {
                  value: 0,
                  qtyType: "kg"
                },
                expirationDate: Date.now()
              }
            ]);

          const handleAddress = address => {
            setFieldValue("location", address);
          };

          const deleteUnitDon = index => {
            const newDonationBox = values.donationBox;
            newDonationBox.splice(index, 1);
            setFieldValue("donationBox", newDonationBox);
          };
          console.log("values", values);
          console.log("values", values);

          return (
            <Form className="form donation">
              <h1>Faites un don</h1>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}

              {values.donationBox.map((donation, index) => {
                return (
                  <div className="unitDon">
                    <UnitDonation key={index} {...donation} index={index} />
                    <img
                      src="/delete.svg"
                      onClick={() => deleteUnitDon(index)}
                    />
                  </div>
                );
              })}
              <div className="plus" onClick={handleAddDon}>
                +
              </div>

              <div className="localisation">
                <label htmlFor="location">Localisation du don</label>
                <Address
                  pushAddress={handleAddress}
                  address={this.props.user.address}
                ></Address>
              </div>

              <button className="btn">Submit</button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default DonationForm;
