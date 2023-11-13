import React, { useState } from "react";
import Header from "../components/Header/Header";
import SectionAddKPI from "../components/SectionAddKPI/SectionAddKPI";
import SectionForm from "../components/SectionForm/SectionForm";

const Home = () => {
  const [starCliqued, setStarCliqued] = useState(false);
//revoir
  const whenStarCliqued = (value) => {
    setStarCliqued(value);
  };

  return (
    <>
      <Header />
      <SectionAddKPI whenStarCliqued={starCliqued} />
      <SectionForm whenStarCliqued={whenStarCliqued} />
    </>
  );
};

export default Home;
