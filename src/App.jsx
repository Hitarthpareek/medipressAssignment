import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {assignments} from "./data/landingpageData"
import Home from "./components/commonComponents/landingpage/Home"
import HomePage1 from './components/assignment1/Homepage1';
import HomePage2 from './components/assignment2/Homepage2';
import HomePage3 from './components/assignment3/Homepage3';
import HomePage4 from './components/assignment4/Homepage4';
import HomePage5 from './components/assignment5/Homepage5';



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/assignment1"
          element={
            <HomePage1/>
          }
        />

        <Route
          path="/assignment2"
          element={
            <HomePage2/>
          }
        />

        <Route
          path="/assignment3"
          element={
            <HomePage3/>
          }
        />

        <Route
          path="/assignment4"
          element={
            <HomePage4/>
          }
        />

        <Route
          path="/assignment5"
          element={
            <HomePage5/>
          }
        />
      </Routes>
      </Router>
  )
}

export default App
