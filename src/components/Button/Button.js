import React from "react";
import RefreshIcon from "../../asset/img/refresh.svg";

const Button = () => {
  return (
    <button className="updateButtonKpi flex aic gp5">
      <img src={RefreshIcon} alt="Refresh section" />
      Update KPI
    </button>
  );
};

export default Button;
