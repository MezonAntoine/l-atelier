import * as React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DuelPage from "./pages/duel/duel";
import ResultPage from "./pages/ranking/ranking";
import NotFound from "./pages/404/404";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DuelPage />} />
        <Route path="/ranking" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
