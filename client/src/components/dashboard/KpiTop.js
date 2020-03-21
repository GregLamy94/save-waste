import React from "react";

class KpiTop extends React.Component {
  render() {
    return (
      <div>
        <div className="Kpi1">
          <p>{this.props.amount}€</p>
        </div>
        <div className="Kpi2">
          <p>
            <img src="" alt="Logo" />
            {this.props.donsOnGoing.length}Dons en cours
          </p>
        </div>
      </div>
    );
  }
}
export default KpiTop;
