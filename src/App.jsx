
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route index element={<Home />} />    
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
