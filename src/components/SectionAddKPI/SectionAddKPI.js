import React, { useState } from "react";
// import GraphCourbe from "../../asset/img/trend.svg";
import iconInfo from "../../asset/img/info_outined.svg";
// import Sparkles from "../../asset/img/sparkles.svg";

import { arrayIcons } from "../SectionForm/ArrayIcons";
import KpiCard from "../KpiCard/KpiCard";

const SectionAddKPI = ({ kpiName, kpiNumber, kpiTooltip, kpiTrend, kpiIcon }) => {

  const [arrayKpiCardEmpty, setArrayKpiCardEmpty] = useState([]);
  const [cardIsCliqued, setCardIsCliqued] = useState(false);
  
  const cardIsActive = () => {
    setCardIsCliqued(true);
  };
  
  
  // const [active, setActive] = useState(null)
  // const addKpiBlockWithEmptyData = () => {
  //   setCardIsCliqued(true)
  //   console.log(cardIsCliqued);
    
  // }

  const addKpiBlockWithEmptyData = () => {
    
    setArrayKpiCardEmpty([
      ...arrayKpiCardEmpty,
      <button
        onClick={cardIsActive}
        className="kpiButtonBox"
        key={arrayKpiCardEmpty.length}
      >
        {cardIsCliqued && (
          <div className="flex flexCol gp16">
            <div className="flex gp7">
              <div className="flex aic gp4">
                <span className="titleCardKpi">{kpiName}</span>
                <img id="infoIcon" src={iconInfo} alt="Icon information" />
                {/* <div className="test">
                  <p id="tooltipText">KPI explanation</p>
                </div> */}
              </div>


              {/* à activer au hover */}
                {/* {kpiTooltip} */}


              <div className="flex aic">
                 {/* {kpiIcon.index} */}

                {kpiIcon && arrayIcons.map((icon, index) => (
                  <div key={index}>
                    {icon.src}
                  </div>
                ))} 

                
              </div>
            </div>

            <div className="flex aic gp24">
              <span className="boldNumberCardKpi">{kpiNumber}</span>
              {/* <img src={GraphCourbe} alt="Courbe" /> */}
              {kpiTrend}
            </div>
          </div>
        )}
      </button>,
    ]);
  };

  return (
    <div className="addKpiArea">
      <div className="containerKpiArea flex flexWrap jcs gp24">
        {arrayKpiCardEmpty}

        {/* <KpiCard  /> */}

        <button onClick={addKpiBlockWithEmptyData} className="kpiButtonAddElement">
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
