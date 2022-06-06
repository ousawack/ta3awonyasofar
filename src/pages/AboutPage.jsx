import React from "react";
import "../App.css";
import ContactSection from "../components/AboutPageSections/ContactSection";
import DataSection from "../components/AboutPageSections/DataSection";
import MissionSection from "../components/AboutPageSections/MissionSection";
import TeamSection from "../components/AboutPageSections/TeamSection";
import TitleSection from "../components/AboutPageSections/TitleSection";
import ValueSection from "../components/AboutPageSections/ValueSection";

const AboutPage = () => {
  return (
    <>
      <div class="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 dark:bg-gray-800">
        <TitleSection />
        <MissionSection />
        <DataSection />
        <ValueSection />
        <TeamSection />
        <ContactSection />
      </div>
    </>
  );
};

export default AboutPage;
