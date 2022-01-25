import styled from "styled-components";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import "./App.css";
import Theme from "./Theme";

import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Blog from "./Pages/Blog/Blog";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/contact";
import SinglePost from "./Pages/Blog/SinglePost";
import SingleProject from "./Pages/Projects/SingleProject";

const Wrapper = styled.div`


.pages{
  
}


`;

function App() {
  return (
    <Theme>
      <Wrapper>
        <Router>
          <div className="app">
            <Navbar />


          <div className="pages">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<SinglePost />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<SingleProject />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>

            </div>


            <Footer />
          </div>
        </Router>
      </Wrapper>
    </Theme>
  );
}

export default App;
