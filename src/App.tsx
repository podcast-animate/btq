import * as React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Yellow } from "./pages/Yellow";
import { Home } from './pages/Home';

export default function App() {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route  path="/"  element={<Home/>} />
        <Route path="/yellow" element={<Yellow/>} /> 
      </Routes>
    </HashRouter>
  );
}
