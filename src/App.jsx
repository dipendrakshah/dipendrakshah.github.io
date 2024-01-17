import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import "./App.css";
import NavbarComponent from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Routes>
        <Route path="/about" component={About} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/projects" component={Projects} />       
      </Routes>
    </BrowserRouter>   
  );
};

export default App;