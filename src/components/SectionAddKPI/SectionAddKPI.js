import React, { useState } from "react";
import GraphCourbe from "../../asset/img/trend.svg";
import iconInfo from "../../asset/img/info_outined.svg";
import Sparkles from "../../asset/img/sparkles.svg";

// import { ArrayKpiCards } from "./ArrayKpiCards";

const SectionAddKPI = ({ whenStarCliqued }) => {
  // const array = ArrayKpiCards
  const [kpiItems, setKpiItems] = useState([]);

  console.log("valeur: ", whenStarCliqued);
  const addKpiBlock = () => {
    setKpiItems([
      ...kpiItems,
      <button className="kpiButtonBox" key={kpiItems.length}>
        {whenStarCliqued && (
          <div className="flex flexCol gp16">
            <div className="flex gp7">
              <div className="flex aic gp4">
                <span className="titleCardKpi">NPS</span>
                <img src={iconInfo} alt="Icon information" />
              </div>

              <div className="flex aic">
                <p className="tooltipText hoverEffect">KPI explanation</p>
                <img src={Sparkles} alt="sparkles" />
              </div>
            </div>

            <div className="flex aic gp24">
              <span className="boldNumberCardKpi">74</span>
              <img src={GraphCourbe} alt="Courbe" />
            </div>
          </div>
        )}
      </button>,
    ]);
  };

  return (
    <div className="addKpiArea">
      <div className="containerKpiArea flex flexWrap jcs gp24">
        {kpiItems}

        <button onClick={addKpiBlock} className="kpiButtonAddElement">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            className="w100"
          >
            <path
              d="M9 1.5V17.5M17 9.5H1"
              stroke="#71899C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SectionAddKPI;
