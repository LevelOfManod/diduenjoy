import React, { useState } from "react";
import { arrayIcons } from "./ArrayIcons";
import RefreshIcon from "../../asset/img/refresh.svg";

const SectionForm = ({ onUpdate, data }) => {
  const [displayAllForm, setDisplayAllForm] = useState(false);

  const getIcon = (index) => {
    const iconValue = index;
    onUpdate({ ...data, kpiIcon: iconValue });
  };


  const getValueFromAllInput = (event) => {
    // Déstructuration pour obtenir la valeur des input avec leur name=""
    const { name, value } = event.target;

    if(name === "kpiName") {
      setDisplayAllForm(value !== "")
      // Si la valeur de name="kpiName" n'est n'est pas une chaine vide on le passe a true
    }

    onUpdate({ ...data, [name]: value });
  };

  return (
    <div className="mainContainer">
      <div className="cardSettings flex flexCol gp32">
        <div>
          <h4>Card settings</h4>
        </div>

        <div className="flex flexCol gp24">
          <div className=" flex flexCol gp8">
            <div className="fixContent">
              <p className="BoldText">KPI name</p>
            </div>

            <div className="w100">
              <input
                className="input w100"
                name="kpiName"
                placeholder="Element name"
                type="text"
                onChange={getValueFromAllInput}
              />
            </div>
          </div>

          {displayAllForm && (
            <>
              <div className="flex flexCol gp8 tooltipBox">
                <div className="fixContent">
                  <p className="BoldText">Tooltip</p>
                </div>

                <div className="w100">
                  <textarea
                    name="kpiTooltip"
                    className="input w100"
                    placeholder="Element name"
                    onChange={getValueFromAllInput}
                  ></textarea>
                </div>
              </div>

              <div className="flex flexCol gp8 tooltipBox">
                <div className="fixContent">
                  <p className="BoldText">Icon</p>
                </div>

                <div className="w100 flex gp8">
                  {arrayIcons.map((icon, index) => (
                    <button
                      onClick={() => getIcon(index)}
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
                    name="kpiNumber"
                    className="input w100"
                    placeholder="Enter a value"
                    type="number"
                    onChange={getValueFromAllInput}
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
                    placeholder="Select"
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
