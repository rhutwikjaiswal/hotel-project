import React from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Destinations from "./Components/Destinations/Destinations";
import Blog from "./Components/Blog/Blog";
import Testimonial from "./Components/Testimonial/Testimonial";




function App() {
  return (
   
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
