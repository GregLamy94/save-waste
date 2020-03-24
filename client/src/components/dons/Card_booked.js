import React from "react";

class CarddonBooked extends React.Component {
  state = {
    isOpen: false
  };
  toggleCard = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="card_dons">
        {!this.state.isOpen && (
          <div className="cardClosed">
            <p>
              <img src="" alt="Logo panier" />
              Panier reservé par
              <img src="" alt="Logo asso" />
            </p>
            <button onClick={this.toggleCard}>
              <img src="icon_fleche_closed.svg" alt="Logo chevron closed" />
              Open
            </button>
          </div>
        )}
        {this.state.isOpen && (
          <div className="cardOpen">
            <div>
              <p>
                <img src="" alt="Logo panier" />
                Panier reservé par
                <img src="" alt="Logo asso" />
              </p>
              <button onClick={this.toggleCard}>
                <img src="icon_fleche_open.svg" alt="Logo chevron open " />
                {this.state.isOpen}Close
              </button>
            </div>
            <div>
              <p>
                Product type name
                <img src="" alt="Logo productType" />
              </p>
              <p>Poids</p>
              <p>{/*poids*/}</p>
              <p>Date de peremption</p>
              <p>{/*{date jours et mois}*/}</p>
            </div>
            <p>
              <img src="" alt="Logo calendrier" />
              Récupération à <img src="" alt="Logo asso" />
            </p>
            <p>
              <img src="" alt="Logo geoloc" />
              {/*Adresse*/}
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default CarddonBooked;
