import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {assignments} from "./data/landingpageData"
import Home from "./components/commonComponents/landingpage/Home.jsx"
import HomePage1 from './components/assignment1/Homepage1.jsx';
import HomePage2 from './components/assignment2/Homepage2.jsx';
import HomePage3 from './components/assignment3/Homepage3.jsx';
import HomePage4 from './components/assignment4/Homepage4.jsx';
import HomePage5 from './components/assignment5/Homepage5.jsx';



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
