import React from "react";
import Navbar from "../navigation/Navbar.js"; 
import Kpi from "Kpi.js";
import Availabledons from "../dons/Availabledons.js"; 
import Bookeddons from "../dons/Bookeddons.js"; 
import { Link } from "react-router-dom";


export default props => {
  return (
        <div>
            <Navbar/>
            <Kpi/>
            <Bookeddons/>
            <Availabledons/>
            
        </div>
  );
};
