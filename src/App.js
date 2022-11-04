import React from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
   
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
