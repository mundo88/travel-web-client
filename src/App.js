import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from "react";
import "./assets/css/index.css"
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/tour/:id" element={<TourDetail/>}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
