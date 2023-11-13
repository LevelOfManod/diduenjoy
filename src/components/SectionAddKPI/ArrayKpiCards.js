import iconInfo from "../../asset/img/info_outined.svg";
import Sparkles from "../../asset/img/sparkles.svg";
import GraphCourbe from "../../asset/img/trend.svg";

export const ArrayKpiCards = [
  {
    index: 1,
    card: (
      <button className="kpiButtonBox">
        <div className="flex flexCol gp16">
          <div className="flex gp7">
            <div className="flex aic gp4">
              <span className="titleCardKpi">NPS</span>
              <img src={iconInfo} alt="Icon information" />
            </div>

            <div className="flex aic">
              <p className="tooltipText">KPI explanation</p>
              <img src={Sparkles} alt="sparkles" />
            </div>
          </div>

          <div className="flex aic gp24">
            <span className="boldNumberCardKpi">74</span>
            <img src={GraphCourbe} alt="Courbe" />
          </div>
        </div>
      </button>
    ),
  },
  {
    index: 2,
    card: (
      <button className="kpiButtonBox">
        <div className="flex flexCol gp16">
          <div className="flex gp7">
            <div className="flex aic gp4">
              <span className="titleCardKpi">NPS 22222</span>
              <img src={iconInfo} alt="Icon information" />
            </div>

            <div className="flex aic">
              <p className="tooltipText">KPI explanation</p>
              <img src={Sparkles} alt="sparkles" />
            </div>
          </div>

          <div className="flex aic gp24">
            <span className="boldNumberCardKpi">74</span>
            <img src={GraphCourbe} alt="Courbe" />
          </div>
        </div>
      </button>
    ),
  },
];
