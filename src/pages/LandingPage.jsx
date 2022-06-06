import React from "react";
import Hero from "../components/Hero";
import HandicraftSlider from "../components/HandicraftSlider";
import CosmeticsSlider from "../components/CosmeticsSlider";
import CooperativeCards from "../components/CooperativeCards";
import Services from "../components/Services";

const LayoutPage = () => {
  return (
    <>
      <Hero />
      <CooperativeCards />
      <HandicraftSlider />
      <CosmeticsSlider />
      <Services />
    </>
  );
};

export default LayoutPage;
