import * as React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import {AvatarSelection} from "./pages/AvatarSelection/AvatarSelection";

export default function App() {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/avatar" element={<AvatarSelection/>} /> 
      </Routes>
    </HashRouter>
  );
}
