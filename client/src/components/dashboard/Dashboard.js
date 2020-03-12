import React from "react";
import Kpi from "./Kpi.js"; 
//import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render(){
    return(
      <div className="dashboard">
      <Kpi x={this.props.amount}/>
      </div>

    )
  }
}
export default Dashboard; 
