import React, { useState } from "react";
import Header from "../components/Header/Header";
import SectionAddKPI from "../components/SectionAddKPI/SectionAddKPI";
import SectionForm from "../components/SectionForm/SectionForm";

const Home = () => {
// un tableau d'objet
  const [allDataFromTheForm, setAllDataFromTheForm] = useState({
    kpiName: null,
    kpiTooltip: null,
    kpiIcon: null,
    kpiNumber: null,
    kpiTrend: null,
  });

  const handleFormUpdate = (updateData) => {
    setAllDataFromTheForm(updateData);
  };

  const updateOption = (index) => {
    setAllDataFromTheForm({
      ...allDataFromTheForm,
      kpiTrend: index,
    });
  };

  return (
    <>
      <Header />

      <SectionAddKPI data={allDataFromTheForm} />

      <SectionForm
        data={allDataFromTheForm}
        onUpdate={handleFormUpdate}
        updateOption={updateOption}
      />
    </>
  );
};

export default Home;
