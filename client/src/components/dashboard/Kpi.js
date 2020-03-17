import React from "react"; 
import CarddonBooked from "../dons/Card_booked.js";
import CarddonAvailable from "../dons/Card_available.js"; 


class Kpi extends React.Component{
    render(){
        return(
            <div>
        
                <div className="Kpi1">
                <h1>Tableau de bord</h1>
                <p>{this.props.amount}€</p>
                </div>
                <div className="Kpi2">
                <p><img src="" alt="Logo" />{this.props.donsonGoing}Dons en cours</p>
                </div>

                <CarddonBooked/>
                <CarddonAvailable/>
                
                <div className= "Kpi3">
                <h2>Vos données</h2>
                <p><img src="" alt="Logo" />{this.props.donsDone}Dons réalisés</p>
                <p><img src="" alt="Logo" />{this.props.nbmealsGiven}Personnes bénéficiées</p>
                <p><img src="" alt="Logo" />{this.props.emissionsCO2}C02 Emissions CO2 évitées</p>
                </div> 
            </div>
        )
    }
}
export default Kpi;  