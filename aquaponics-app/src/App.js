import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModuleList from "./components/ModuleList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModuleList />} />
      </Routes>
    </Router>
  );
};

export default App;
