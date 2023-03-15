import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Mappage from "./pages/map";
import Alumni from "./pages/alumni";
import Schools from "./pages/schools";
import Projects from "./pages/projects";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/schools" element={<Schools />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/alumni" element={<Alumni />}></Route>
            <Route path="/map" element={<Mappage />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
