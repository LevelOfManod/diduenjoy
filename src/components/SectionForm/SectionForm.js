import React, { useState } from "react";
import { arrayIcons } from "./ArrayIcons";
import RefreshIcon from "../../asset/img/refresh.svg";

const SectionForm = ({ whenStarCliqued }) => {
  const [kpiName, setKpiName] = useState("");
  const [clickedIndex, setClickedIndex] = useState(null);

  const displayTooltipText = (index) => {
    console.log("Element:", index);
    setClickedIndex(index);

    if (index === 14) {
      console.log("Element 14 trouvé");
      whenStarCliqued(true);
    } else {
      console.log("pas trouvé", index);
    }
  };

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
            <>
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

              <div className="flex flexCol gp8 tooltipBox">
                <div className="fixContent">
                  <p className="BoldText">Icon</p>
                </div>

                <div className="w100 flex gp8">
                  {arrayIcons.map((icon, index) => (
                    <button
                      onClick={() => displayTooltipText(index)}
                      className="iconBox"
                      key={index}
                    >
                      {icon.src}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flexCol gp8 tooltipBox">
                <div className="fixContent">
                  <p className="BoldText">Value</p>
                </div>

                <div className="w100">
                  <input
                    className="input w100"
                    placeholder="74"
                    type="number"
                  />
                </div>
              </div>

              <div className="flex flexCol gp8 tooltipBox">
                <div className="fixContent">
                  <p className="BoldText">Trend</p>
                </div>

                <div className="w100">
                  <input
                    className="input w100"
                    placeholder="Positive"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex jce ">
                <button className="updateButtonKpi flex aic gp5">
                  <img src={RefreshIcon} alt="Refresh section" />
                  Update KPI
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
