import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import About from "./components/pages/About";
import Course from "./components/pages/Course";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
