import React from "react";

class CarddonAvailable extends React.Component {
  state = {
    isOpen: false
  };
  toggleCard = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  // imgProductType = productType => {
  //   let img_product = "altIMG";
  //   if (productType === "légume") {
  //     img_product = "carrot.svg";
  //   }
  //   return img_product;
  // };
  render() {
    const foodTypes = {
      fruits: 'carrot.svg',
      Légumes: 'carrot.svg',
      viandes: 'carrot.svg',
      divers: 'carrot.svg',
    };
    return (
      <div className="card_dons">
        {!this.state.isOpen && (
          <div className="cardClosed">
            <div>
              <img src="Gift-Box.png" alt="Logo panier" />
              Panier disponible
            </div>
            <div className="toggleButton">
              <button onClick={this.toggleCard}>
                <img src="icon_fleche_closed.svg" alt="Logo chevron closed" />
              </button>
            </div>
          </div>
        )}
        {this.state.isOpen && (
          <div className="cardOpen">
            <div>
              <p>
                <img src="Gift-Box.png" alt="Logo panier" />
                Panier disponible
              </p>
              <button onClick={this.toggleCard}>
                <img src="icon_fleche_open.svg" alt="Logo chevron open " />
                {this.state.isOpen}
              </button>
            </div>
            <div>
              {this.props.donationBox.map(unitDon => (
                <div>
                  <div>
                    Type:
                    {unitDon.productType}
                    <img src={foodTypes[unitDon.productType]} alt='food type'/>
                    <img src={this.props.img_product} alt="Logo productType" />
                  </div>
                  <div>{unitDon.productName}</div>

                  <div>
                    <p>Poids</p>
                    <p>
                      {unitDon.quantity.value} {" " + unitDon.quantity.qtyType}
                    </p>
                  </div>
                  <div>
                    <p>Date de peremption</p>
                    <p>{unitDon.expirationDate}</p>
                  </div>
                </div>
              ))}
            </div>
            <button>Modifier</button>
            {/*Renvoi au formulaire de don */}
          </div>
        )}
      </div>
    );
  }
}
export default CarddonAvailable;
