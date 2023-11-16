import React, { useState, useEffect, useRef } from "react";
import DoubleArrow from "../../asset/img/double_caret_vertical.svg";

const SelectTrend = ({ updateOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [elementCliqued, setElementCliqued] = useState(false);
  const [optionValueCliqued, setOptionValueCliqued] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownOption = ["—", "Positive", "Neutral"];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleClickOptionDropdown = (event, index) => {
    setOptionValueCliqued(dropdownOption[index]);
    setElementCliqued(true);
    setShowDropdown(false);
    updateOption(index)
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flexCol gp8 selectDropdown" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="selectTrend flex jcsb aic"
      >
        {elementCliqued ? (
          <p className="trendOption">{optionValueCliqued}</p>
        ) : (
          <p>Select</p>
        )}
        <img src={DoubleArrow} alt="Flèche de sélection" />
      </button>

      {showDropdown && (
        <div className="selectTrendMenu">
          <ul>
            {dropdownOption.map((option, index) => (
              <li key={index}>
                <button
                  onClick={(event) => handleClickOptionDropdown(event, index)}
                  className="flex w100"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectTrend;
