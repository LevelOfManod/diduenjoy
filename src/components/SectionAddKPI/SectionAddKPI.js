import React, { useState } from "react";
import { arrayIcons } from "../SectionForm/ArrayIcons";
import KpiCard from "../KpiCard/KpiCard";

const SectionAddKPI = ({ data }) => {
  const [arrayKpiCardData, setArrayKpiCardData] = useState([]);

  const addKpiBlockWithEmptyData = () => {
    const newKey = arrayKpiCardData.length + 1;
    const newData = { key: newKey, data: data };
    setArrayKpiCardData([...arrayKpiCardData, newData]);
  };

  return (
    <div className="addKpiArea">
      <div className="containerKpiArea flex flexWrap jcs gp24">
        {arrayKpiCardData.map((kpiData) => (
          <KpiCard
            key={kpiData.key}
            data={kpiData.data}
          />
        ))}
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
