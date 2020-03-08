import React from "react";

import { Link } from "react-router-dom";
import Bell from "./Bell.js";

export default props => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="" alt="LOGO" />
      </Link>
      <Bell user={props.user} />
    </nav>
  );
};
