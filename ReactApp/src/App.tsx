// import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from "./pages/FirstPage"
import SecondPage from "./pages/SecondPage"
import SecureRoute from "./components/SecureRoute"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/secondpage" element={<SecureRoute><SecondPage /></SecureRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
