import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModuleList from "./components/ModuleList/ModuleList";
import ModuleDetails from "./components/ModuleDetails/ModuleDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModuleList />} />
        <Route path="/modules/:id" element={<ModuleDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
