import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import "./assets/css/index.css"
import MainContent from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header></Header>  
          <MainContent></MainContent> 
      </div>
    </BrowserRouter>
    );
}

export default App;
