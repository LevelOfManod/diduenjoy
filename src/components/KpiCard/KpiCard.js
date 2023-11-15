import React, { useState } from "react";
import iconInfo from '../../asset/img/info_outined.svg'

const KpiCard = ({ data }) => {
  const [cardIsCliqued, setCardIsCliqued] = useState(false);

  const aCardHasBeenSelected = () => {
    setCardIsCliqued(true);
  };


  return (
    <>
      {cardIsCliqued ? (
        <div className=" kpiButtonBox flex flexCol gp16">
          <div className="flex gp7">
            <div className="flex aic gp4">
              <span className="titleCardKpi">{data.kpiName}</span>
              <img id="infoIcon" src={iconInfo} alt="Icon information" />
            </div>

            <div className="flex aic"></div>
          </div>

          <div className="flex aic gp24">
            <span className="boldNumberCardKpi">{data.kpiNumber}</span>
            {data.kpiTrend}
          </div>
        </div>
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
