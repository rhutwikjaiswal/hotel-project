import React from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home";


function App() {
  return (
   
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
