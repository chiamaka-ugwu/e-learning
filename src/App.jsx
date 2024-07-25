import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Submissions from "./components/submissions/Submissions";
import Classes from "./components/classes/Classes";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
