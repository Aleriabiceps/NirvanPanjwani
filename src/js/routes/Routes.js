import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LastFmWidget from '../../components/LastFmWidget';  // New Import
import latestrack from '../../components/latestrack';  
import "../assets/css/main/main.css"

import Contents from "../layouts/spotify";
import Experience from "../layouts/experience";
import Blog from "../layouts/blog1";
import Latestrack from "../../components/latestrack";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contents apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
        <Route exact path="/experience" element={<Experience />} />
        
        <Route exact path="/blog1" element={<Blog />} />
        <Route exact path="/lastfm" element={<LastFmWidget apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />  // New Route
        <Route exact path="/latest" element={<Latestrack apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />  // New Route
      </Routes>
    </Router>
  );
}

export default App;
