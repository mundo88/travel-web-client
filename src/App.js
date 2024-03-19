import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from "react";
import "./assets/css/index.css"
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home> }></Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
