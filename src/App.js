import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LastFmWidget from '../../components/LastFmWidget';

import "../assets/css/main/main.css"

import Contents from "../layouts/spotify";
import Experience from "../layouts/experience";
import Blog from "../layouts/blog1";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contents />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/blog1" element={<Blog />} />
        <Route exact path="/lastfm" element={<LastFmWidget apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />  // New Route
      </Routes>
    </Router>
  );
}

export default App;
