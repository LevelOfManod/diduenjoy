import React, { useState, useEffect, useRef } from "react";
import DoubleArrow from "../../asset/img/double_caret_vertical.svg";

const SelectTrend = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flexCol gp8 selectDropdown" ref={dropdownRef}>
      <button onClick={() => setShowDropdown(!showDropdown)} className="selectTrend flex jcsb aic">
        <p>Select</p>
        <img src={DoubleArrow} alt="Flèche de sélection" />
      </button>

      {showDropdown && (
        <div className="selectTrendMenu">
          <ul>
            <li>—</li>
            <li>Positive</li>
            <li>Neutral</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectTrend;
