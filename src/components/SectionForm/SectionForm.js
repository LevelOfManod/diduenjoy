import React, { useState } from "react";

const SectionForm = () => {
  const [kpiName, setKpiName] = useState("");

  return (
    <div className="mainContainer">
      <div className="cardSettings flex flexCol gp32">
        <div>
          <h4>Card settings</h4>
        </div>

        <div className="allElementsInput flex flexCol gp24">
          <div className=" flex flexCol gp8">
            <div className="fixContent">
              <p className="BoldText">KPI name</p>
            </div>

            <div className="w100">
              <input
                className="input w100"
                placeholder="Element name"
                type="text"
                value={kpiName}
                onChange={(e) => setKpiName(e.target.value)}
              />
            </div>
          </div>

          {kpiName && (
            <div className="flex flexCol gp8 tooltipBox">
              <div className="fixContent">
                <p className="BoldText">Tooltip</p>
              </div>

              <div className="w100">
                <input
                  className="input w100"
                  placeholder="Element name"
                  type="text"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
