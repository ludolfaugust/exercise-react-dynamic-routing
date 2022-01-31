import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/Pages/About";
//import CatFacts from "./Components/Pages/CatFacts";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import FactsCat from "./Components/Pages/FactsCat";
import NewFacts from "./Components/Pages/NewFacts";
//import DetailFacts from "./Components/Pages/DetailFacts";

function App() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
      setCatFacts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            exact
            path="/factscat"
            element={<FactsCat catFacts={catFacts} />}
          />
          {/* <Route exact path="/catfacts" element={<CatFacts />} /> */}
          <Route
            path="/factscat/:id"
            element={<NewFacts catFacts={catFacts} />}
          />
          {/* <Route path="/catfacts/:id" element={<DetailFacts />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
