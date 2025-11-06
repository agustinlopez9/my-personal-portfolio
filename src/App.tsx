import React from "react";
import Navbar from "components/layouts/Navbar";
import LandingPage from "views/heroSection/HeroSection";
import AboutMe from "views/aboutMe/AboutMe";
import ProjectsSection from "views/projects/ProjectsSection";
import Footer from "components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
