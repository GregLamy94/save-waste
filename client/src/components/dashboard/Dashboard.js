import React from "react";
import Navbar from "../navigation/Navbar.js"; 
import Kpi from "./Kpi.js"; 
import Availabledons from "../dons/Availabledons.js"; 
import Bookeddons from "../dons/Bookeddons.js"; 
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render(){
    return(
      <div>
      <Kpi/>
      
      </div>
    )
  }
}
export default Dashboard; 
