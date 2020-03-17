import React from "react";

import { Field } from "formik";
import * as Yup from "yup";

class UnitDonation extends React.Component {
  render() {
    return (
      <>
        <h2>Produit à donner </h2>
        <div className="produit">
          <Field
            name={`donationBox.${this.props.index}.productName`}
            type="text"
            placeholder="Nom du produit"
          ></Field>

          <Field
            name={`donationBox.${this.props.index}.productType`}
            as="select"
          >
            <option value="Légumes">Légumes</option>
            <option value="Fruits">Fruits</option>
            <option value="Viande">Viande</option>
            <option value="Divers">Divers</option>
          </Field>
        </div>

        <div className="quantity">
          <label>Quantité</label>
          <Field
            name={`donationBox.${this.props.index}.quantity.value`}
            type="number"
          ></Field>
          <Field
            name={`donationBox.${this.props.index}.quantity.qtyType`}
            as="select"
          >
            <option value="kg">kg</option>
            <option value="qty">items</option>
          </Field>
          <div className="date">
            <label>Date d'expiration</label>
            <Field
              type="date"
              name={`donationBox.${this.props.index}.expirationDate`}
            ></Field>
          </div>
        </div>
      </>
    );
  }
}

export default UnitDonation;
