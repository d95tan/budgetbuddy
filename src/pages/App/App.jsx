import '../../App.css'
import { Route, Routes } from "react-router-dom"

import LandingPage from '../LandingPage/LandingPage'

function App() {

  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
