import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Admin from "./components/AdminPage/Admin";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </Routes>
    </Router>
  );
}

export default App;
