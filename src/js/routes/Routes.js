import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LastFmWidget from '../../components/LastFmWidget';  
import latestrack from '../../components/latestrack';  
import "../assets/css/main/main.css"
import BlogPost2 from '../layouts/LinkedIn';
import NFT from '../layouts/NFT';
import Startup from '../layouts/Startup';
import Bitcoin from '../layouts/Bitcoin';
import Stress from '../layouts/Stress';
import Boost from '../layouts/Boost';
import List from '../layouts/List';
import Contents from "../layouts/spotify";
import Experience from "../layouts/experience";
import Blog from "../layouts/blog1";
import Latestrack from "../../components/latestrack";
import Board from '../../Board';  // Corrected path to import Board

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Contents apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/LinkedIn" element={<BlogPost2 />} />
        <Route exact path="/Startup" element={<Startup />} />
        <Route exact path="/Stress" element={<Stress />} />
        <Route exact path="/Boost" element={<Boost />} />
        <Route exact path="/List" element={<List />} />
        <Route exact path="/NFT" element={<NFT />} />
        <Route exact path="/Bitcoin" element={<Bitcoin />} />
        <Route exact path="/blog1" element={<Blog />} />
        <Route exact path="/lastfm" element={<LastFmWidget apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
        <Route exact path="/latest" element={<Latestrack apiKey="d0e46e1f2cbcde13e369288d104cf0b7" userName="nirvanp" />} />
        <Route exact path="/board" element={<Board />} />  // Added route for Board
      </Routes>
    </Router>
  );
}

export default App;
