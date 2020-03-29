import React from "react";

class UnitDonCard extends React.Component {
  render() {
    const foodTypes = {
      fruits: "carrot.svg",
      Légumes: "carrot.svg",
      viandes: "carrot.svg",
      divers: "carrot.svg"
    };

    return (
      <div className="unitDonCard">
        <div>
          Type:
          {this.props.productType}
          <img src={foodTypes[this.props.productType]} alt="food type" />
          <img src={this.props.img_product} alt="Logo productType" />
        </div>
        <div>{this.props.productName}</div>

        <div>
          <p>Poids</p>
          <p>
            {this.props.quantity.value} {" " + this.props.quantity.qtyType}
          </p>
        </div>
        <div>
          <p>Date de peremption</p>
          <p>{this.props.expirationDate.split("T")[0]}</p>
        </div>
      </div>
    );
  }
}

export default UnitDonCard;
