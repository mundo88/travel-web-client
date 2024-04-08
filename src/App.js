import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from "react";
import "./assets/css/index.css"
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
import Article from "./pages/Article";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/tour/:id" element={<TourDetail/>}></Route>
        <Route path="/article/:id" element={<Article/>}></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
