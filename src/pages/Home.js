import React, { useState } from "react";
import Header from "../components/Header/Header";
import SectionAddKPI from "../components/SectionAddKPI/SectionAddKPI";
import SectionForm from "../components/SectionForm/SectionForm";

const Home = () => {
  // const [kpiName, setKpiName] = useState("");
  // const [tooltipName, setTooltipName] = useState("");
  // const [numberValue, setNumberValue] = useState("");

  // const handleKpiNameChange = (newName) => {
  //   setKpiName(newName);
  //   // console.log(newName);
  // };

  // const handleTooltipChange = (newTooltip) => {
  //   setTooltipName(newTooltip);
  // };

  // const handleNumberChange = (newNumber) => {
  //   setNumberValue(newNumber);
  // };

  // const [icon, setIcon] = useState(null);
  // const handleIconChange = (newIcon) => {
  //   setIcon(newIcon);
  //   // console.log(newIcon);
  // };



  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------


  const [allDataFromTheForm, setAllDataFromTheForm] = useState({
    kpiName: "Element name",
    kpiTooltip: "Element name",
    kpiIcon: null,
    kpiNumber: "Enter a value",
    kpiTrend: "Select",
  });

  const handleFormUpdate = (updateData) =>{
    setAllDataFromTheForm(updateData)
  }

  console.log(allDataFromTheForm.kpiName);
  console.log(allDataFromTheForm.kpiTooltip);
  console.log(allDataFromTheForm.kpiIcon);
  console.log(allDataFromTheForm.kpiNumber);
  console.log(allDataFromTheForm.kpiTrend);

  return (
    <>
      <Header />

      <SectionAddKPI
       
      />
      {/* <SectionAddKPI
        kpiName={kpiName}
        kpiTooltip={tooltipName}
        kpiNumber={numberValue}
        kpiTrend={null}
        mainCard={null}
        kpiIcon={icon}
      /> */}

      <SectionForm
        data={allDataFromTheForm}
        onUpdate={handleFormUpdate}
      />
    </>
  );
};

export default Home;
