// App.jsx
"use client"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Elearning from "./Elearning";
// import Elearning2 from "./Elearning1";
// import Elearning3 from "";
// import Elearning4 from "";
// import Elearning5 from "";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/elearning" element={<Elearning />} />
        {/* <Route path="/elearning2" element={<Elearning2 />} />
        <Route path="/elearning3" element={<Elearning3 />} />
        <Route path="/elearning4" element={<Elearning4 />} />
        <Route path="/elearning5" element={<Elearning5 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
