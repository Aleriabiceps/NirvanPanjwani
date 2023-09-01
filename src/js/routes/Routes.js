import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "../assets/css/main/main.css"

import Contents from "../layouts/spotify";
import Experience from "../layouts/experience";
import Blog from "../layouts/Blog"; // Import the Blog component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contents />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/blog" element={<Blog />} /> {/* Add a new route for the Blog component */}
      </Routes>
    </Router>
  );
}

export default App;
