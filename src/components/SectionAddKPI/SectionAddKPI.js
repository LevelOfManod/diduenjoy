import React, { useState } from "react";

const SectionAddKPI = () => {
  const [kpiItems, setKpiItems] = useState([]);

  const addKpiBlock = () => {
    setKpiItems([
      ...kpiItems,
      <button className="kpiButtonBox" key={kpiItems.length}>
        test
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SectionAddKPI;
