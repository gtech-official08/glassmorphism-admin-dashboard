import { BrowserRouter as Router } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"

import BgImg from "./assets/bg.png"
import Navbar from "./components/navbar/Navbar"
import Page from "./pages/Page"

function App() {
  return (
    <>
      <Router>
        {/* Root Layout or main */}
        <RootLayout>

          {/* Background Image */}
          <img src={BgImg} alt="bg img" className="w-full h-full object-cover object-center absolute top-0 left-0" />

          {/* Overlay bg */}
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-neutral-950/40 to-neutral-950/40"></div>

          {/* Layout Section */}
          <div className="w-full flex items-center gap-10 flex-wrap p-4 z-50">
            {/* Navbar */}
            <Navbar />

            {/* Dasboard Layout */}
            <Page />
          </div>
        </RootLayout>
      </Router>
    </>
  )
}

export default App
