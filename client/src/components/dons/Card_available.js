import React from "react";
import UnitDonCard from "./UnitDonCard";
import donationServices from "./donationServices";

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

  bookDon = () => {
    //USE HERE Donation Services to book this.props._id

    donationServices.bookDonation(this.props._id).then(donation => {
      this.props.history.push("/dashboard");
    });
  };
  render() {
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

            {this.props.donationBox.map(
              unitDon =>
                this.props.user && (
                  <UnitDonCard
                    key={unitDon._id}
                    user={this.props.user}
                    {...unitDon}
                  />
                )
            )}
            {this.props.user.clientType === "association" ? (
              <button onClick={this.bookDon}>Réserver</button>
            ) : (
              <button>Modifier</button>
            )}

            {/*Renvoi au formulaire de don */}
          </div>
        )}
      </div>
    );
  }
}
export default CarddonAvailable;
