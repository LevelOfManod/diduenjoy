import React, { useState } from "react";
import Header from "../components/Header/Header";
import SectionAddKPI from "../components/SectionAddKPI/SectionAddKPI";
import SectionForm from "../components/SectionForm/SectionForm";

const Home = () => {

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

  // console.log(allDataFromTheForm.kpiName);
  // console.log(allDataFromTheForm.kpiTooltip);
  // console.log(allDataFromTheForm.kpiIcon);
  // console.log(allDataFromTheForm.kpiNumber);
  // console.log(allDataFromTheForm.kpiTrend);

  return (
    <>
      <Header />

      <SectionAddKPI
       data={allDataFromTheForm}
      />
     
      <SectionForm
        data={allDataFromTheForm}
        onUpdate={handleFormUpdate}
      />
    </>
  );
};

export default Home;
