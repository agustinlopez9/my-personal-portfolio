import React from "react"
import Navbar from "components/layouts/Navbar"
import LandingPage from "views/LandingPage"
import JobTimeline from "views/JobTimeline"
import ProjectsSection from "views/ProjectsSection"

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <JobTimeline />
      <ProjectsSection />
    </>
  )
}

export default App
