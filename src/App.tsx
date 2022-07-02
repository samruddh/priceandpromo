import React from 'react';
import { NavbarAndSideBar } from './components/templates/NavbarAndSideBar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Home";

function App() {
  return (
    <>
    <NavbarAndSideBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
