import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/item/:id" element={<SingleItem/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
