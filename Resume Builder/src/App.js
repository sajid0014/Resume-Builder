import './App.css';
import React from 'react'
import Header from './components/Header/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Body from './components/Body/Body'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
         <Route exact path="/" element={<Header/>} />
         <Route path="/Body" element={<Body/>} />
         </Routes>
      </Router>
    </div>
  )
}

export default App
