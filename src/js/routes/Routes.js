import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LastFmWidget from '../../components/LastFmWidget';  
import latestrack from '../../components/latestrack';  
import "../assets/css/main/main.css"
import BlogPost2 from '../layouts/LinkedIn'; // Updated import path
import Startup from '../layouts/Startup'; // Updated import path
import Bitcoin from '../layouts/Bitcoin'; // Updated import path
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
        <Route exact path="/LinkedIn" element={<BlogPost2 />} />
        <Route exact path="/Startup" element={<Startup />} />
        <Route exact path="/Bitcoin" element={<Bitcoin />} />
        <Route exact path="/blog1" element={<Blog />} />
        <Route exact path="/lastfm" element={<LastFmWidget apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
        <Route exact path="/latest" element={<Latestrack apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
      </Routes>
    </Router>
  );
}

export default App;
