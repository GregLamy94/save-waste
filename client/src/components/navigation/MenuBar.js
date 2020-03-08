import React from "react";

import { Link } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/dashboard">
          <img src="bar_chart.svg" alt="to dashboard" />{" "}
        </Link>
        <Link to="/menu">
          <img src="menu.svg" alt="to menu" />{" "}
        </Link>
      </nav>
    );
  }
}

export default MenuBar;
