import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Header from "./components/Header"
import { useEffect, useState } from "react"

function App() {
  
  return (
    <>
      {/* Header start */}
        <Header />
      {/* Header End */}

      {/* Hero section start */}
        <HeroSection />
      {/* Hero section end */}


      {/* About section start */}
        <AboutSection />
      {/* About section end */}
    </>
  )
}

export default App
