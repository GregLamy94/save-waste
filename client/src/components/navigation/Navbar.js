import React from "react";

import { Link } from "react-router-dom";
import Bell from "./Bell.js";

export default props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="logo_saveWaste.png" alt="LOGO" />
      </Link>
      <h1> 
      [TITLE]
      </h1>
      <Bell user={props.user} />
    </nav>
  );
};
