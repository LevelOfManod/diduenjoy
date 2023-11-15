import React, { useState } from "react";
import iconInfo from "../../asset/img/info_outined.svg";
import { arrayIcons } from "../SectionForm/ArrayIcons";

const KpiCard = ({ data }) => {
  const [cardIsCliqued, setCardIsCliqued] = useState(false);

  const aCardHasBeenSelected = () => {
    setCardIsCliqued(!cardIsCliqued);
  };

  return (
    <>
      {cardIsCliqued && data.kpiName !== null ? (
        <button className="kpiButtonBox flex flexCol gp16">
          <div className="flex gp7 w100">
            <div className="flex jcsb aic w100">
              <div className="flex aic gp4">
                <span className="titleCardKpi">{data.kpiName}</span>
                <img id="infoIcon" src={iconInfo} alt="Icon information" />
              </div>

              <div>
                {arrayIcons
                  .filter((icon) => icon.index === data.kpiIcon + 1)
                  .map((icon, index) => (
                    <div key={index}>{icon.src}</div>
                  ))}
              </div>
            </div>
            {/* {data.kpiTooltip} */}
            {/* <div id="tooltipText" className="flex aic"></div> */}
          </div>

          <div className="flex aic gp24">
            <span className="boldNumberCardKpi">{data.kpiNumber}</span>
            {data.kpiTrend}
          </div>
        </button>
      ) : (
        <button
          onClick={aCardHasBeenSelected}
          className="kpiButtonBox"
        ></button>
      )}
    </>
  );
};

export default KpiCard;
