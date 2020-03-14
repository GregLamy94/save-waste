import React from "react";

class CarddonPicked extends React.Component {
    state={
        isOpen:false,
    }
    toggleCard=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
      return(
        <div className="card_dons">
            {!this.state.isOpen && (
                <div className="cardClosed">
                <p><img src="" alt="Logo panier" />Panier reservé par <img src="" alt="Logo asso" /></p>
                <button onClick={this.toggleCard}><img src="" alt="Logo chevron closed"/>Open</button>
                </div>
            )}
            {this.state.isOpen && (
                <div className ="cardOpen">
                <div>
                <p><img src="" alt="Logo panier" />Panier récupéré par <img src="" alt="Logo asso" /></p>
                <button onClick={this.toggleCard}><img src="" alt="Logo chevron open "/>{this.state.isOpen}Close</button>
                </div>
                <div>
                <p>Product type name<img src="" alt="Logo productType" /></p>
                <p>Poids</p><p>{/*poids*/}</p>
                <p>Date de peremption</p><p>{/*{date jours et mois}*/}</p>  
                </div>
                <p><img src="" alt="Logo calendrier" />Récupéré le <img src="" alt="Logo asso" /></p>
                <p><img src="" alt="Logo geoloc" />{/*Adresse*/}</p>
                <p><img src="" alt="Logo money" />{this.props.amount}</p>
                
                <button className = "certificat">Télécharger le certificat</button>
                </div>
            )}
        
        </div>
      )
    }
  }
  export default CarddonPicked;  