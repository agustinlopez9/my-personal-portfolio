import React from "react";
import Navbar from "components/layouts/Navbar";
import LandingPage from "views/LandingPage";
import AboutMe from "views/aboutMe/AboutMe";
//import ProjectsSection from "views/ProjectsSection"

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMe />
      {/*       <ProjectsSection /> */}
    </>
  );
}

export default App;
