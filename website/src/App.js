import styled from "styled-components";
import React, {useEffect} from "react";
import {Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom";

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

.centerSpacing {
    padding-top: 150px;
  }


  .pages {
    margin-bottom: 100px;
  }


  .disable-select {
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}




`;




export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




function App() {


   
  


  
  return (
    <Theme>
      <Wrapper>
        <Router>
          <div className="app">
            <Navbar />

          <ScrollToTop />
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

            <div className="centerSpacing"></div>
            <Footer />
          </div>
        </Router>
      </Wrapper>
    </Theme>
  );
}

export default App;
