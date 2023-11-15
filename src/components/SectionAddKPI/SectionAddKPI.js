import React, { useState } from "react";

import { arrayIcons } from "../SectionForm/ArrayIcons";

import KpiCard from "../KpiCard/KpiCard";

const SectionAddKPI = ({ data }) => {
  const [arrayKpiCardEmpty, setArrayKpiCardEmpty] = useState([]);


  // console.log(data.kpiName);
  // console.log(data.kpiTooltip);
  // console.log(data.kpiIcon);
  // console.log(data.kpiNumber);
  // console.log(data.kpiTrend);


  const addKpiBlockWithEmptyData = () => {
    setArrayKpiCardEmpty([
      ...arrayKpiCardEmpty,
      <KpiCard
        data={data}
      />,
    ]);

    // setArrayKpiCardEmpty([
    //   ...arrayKpiCardEmpty,
    //   <button
    //     onClick={aCardHasBeenSelected}
    //     className="kpiButtonBox"
    //     key={arrayKpiCardEmpty.length}
    //   >
    //     {cardIsCliqued && (
    //       <div className="flex flexCol gp16">
    //         <div className="flex gp7">
    //           <div className="flex aic gp4">
    //             <span className="titleCardKpi">{data.kpiName}</span>
    //             <img id="infoIcon" src={iconInfo} alt="Icon information" />
    //           </div>

    //           <div className="flex aic">
    //           </div>
    //         </div>

    //         <div className="flex aic gp24">
    //           <span className="boldNumberCardKpi">{data.kpiNumber}</span>
    //           {data.kpiTrend}
    //         </div>
    //       </div>
    //     )}

    //   </button>,
    // ]);
  };

  return (
    <div className="addKpiArea">
      <div className="containerKpiArea flex flexWrap jcs gp24">
        {arrayKpiCardEmpty}

        <button
          onClick={addKpiBlockWithEmptyData}
          className="kpiButtonAddElement"
        >
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
