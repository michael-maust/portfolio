import Styled from "styled-components";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import "./App.css";
import Theme from "./Theme";

import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/portfolio";
import Contact from "./Pages/Contact/contact";
import SinglePost from "./Pages/Blog/SinglePost";

function App() {
  return (
    <Theme>
    <Router>
      
        <div className="app">
          <Navbar />

          <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>






          <Footer />
        </div>
      

     
    </Router>
    </Theme>
  );
}

export default App;
