import React from "react";
import Kpi from "./Kpi.js"; 
import MenuBar from "../navigation/MenuBar.js"; 

//import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.getCurrentPageName("Tableau de bord");
  }
  render(){
    return(
      <div className="dashboard">
      <Kpi 
      amount={this.props.amount}
      donsDone={this.props.donsDone}
      nbmealsGiven={this.props.nbmealsGiven}
      emissionsCO2={this.props.emissionsCO2}
      donsonGoing={this.props.donsonGoing}/>
      <MenuBar/>
      </div>
      
    )
  }
}
export default Dashboard; 
