import { Route,Routes } from "react-router-dom";
import React from "react";
import "./assets/css/index.css"
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import  { AnonymousMiddleware } from './middleware/Auth';
import PersistLogin from './middleware/PersistLogin';
import Layout from "./components/Layout";

function App() {
  return (
      <Routes>
        <Route element={<PersistLogin/>}>
          <Route path="/" element={<Home/> }></Route>
          <Route element={<Layout/>}>
            <Route path="/contact" element={<Contact/> }></Route>
            <Route path="/tour/:id" element={<TourDetail/>}></Route>
            <Route path="/article/:id" element={<Article/>}></Route>
          </Route>
          <Route element={<AnonymousMiddleware/>}>
            <Route element={<AuthLayout/>}>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    );
}

export default App;
