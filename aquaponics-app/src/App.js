import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModuleListPage } from "./pages/ModuleListPage";
import { ModuleDetailPage } from "./pages/ModuleDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModuleListPage />} />
        <Route path="/modules/:id" element={<ModuleDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
