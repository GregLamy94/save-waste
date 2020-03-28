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
              <div className= "btn-open">
                <img src="Gift-Box.png" alt="Logo panier" />
                Panier disponible
              <div className="toggleButton">
              <button onClick={this.toggleCard}>
                <img src="icon_fleche_open.svg" alt="Logo chevron open " />
                {this.state.isOpen}
              </button>
              </div>
            </div>
            <div>
              {this.props.donationBox.map(unitDon => (
                <div className = "cardInfo">  
                  <div>
                    <div>Produit: {unitDon.productName}</div>
                    <div className ="productType">Type: {unitDon.productType}
                    <div>
                    <img src={foodTypes[unitDon.productType]} alt='food type'/>
                    </div>
                    </div>
                    <div>Poids: {unitDon.quantity.value} {" " + unitDon.quantity.qtyType}</div>
                    <div>Date de peremption: {unitDon.expirationDate}</div>
                  </div>
                </div>
              ))}
            </div>
            <button class="btn">Modifier</button>
            {/*Renvoi au formulaire de don */}
          </div>
        )}
      </div>
    );
  }
}
export default CarddonAvailable;
