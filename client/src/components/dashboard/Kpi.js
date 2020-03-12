import React from "react"; 
import Dons from "../dons/Dons.js"; 


class Kpi extends React.Component{
    render(){
        return(
            <div>
        
                <div className="Kpi1">
                <h1>Tableau de bord</h1>
                <p>{this.props.x}€</p>
                </div>
                <div className="Kpi2">
                <p><img src="" alt="Logo" />Dons en cours</p>
                </div>
            
                
                <div className= "Kpi3">
                <h2>Vos données</h2>
                <p><img src="" alt="Logo" />Dons réalisés</p>
                <p><img src="" alt="Logo" />Personnes bénéficiées</p>
                <p><img src="" alt="Logo" />Emissions CO2 évitées</p>
                </div> 
            </div>
        )
    }
}
export default Kpi;  