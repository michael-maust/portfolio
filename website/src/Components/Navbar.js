// Dependency Imports
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
} from 'react-router-dom';
import Styled from 'styled-components';

//  File Imports
import Home from '../Pages/Home/home';
import Blog from '../Pages/Blog/blog';
import Portfolio from '../Pages/Portfolio/portfolio';
import logo from '../media/cup.png';
import '../App.css';

// Component Styling

const Wrapper = Styled.div`



header {
   
    position: fixed;
    width: 100%;
    top: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    
}



.nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    display: inline-block;
    padding: 10px 40px;
    transition: all 0.3s ease 0s;
    
    margin: 10px;
    font-size: 1.7em;
    font-weight: 400px;
    text-decoration: none;
    
  }


  a {

    text-decoration: none;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
   
  }


a:hover {
  color: ${(props) => props.theme.colors.orange};
  transition: 500ms ease-out;
}



  .active {
    /* color: ${(props) => props.theme.colors.orange}; */
    transition: 2s ease-out;
  }

  .active:after {
  content:""; 
  float:left; 
  background:${(props) => props.theme.colors.orange}; 
  width:100%; 
  height:6px; 
  border-radius: 3px;
  transition: background-color 2000ms ease-out;

  }




.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}


.logo {
    height: 60px
}


`;

const Navbar = () => {
  return (
    <Router>
      <Wrapper>
        <div>
          <header>
            <a href="/">
              <img className="logo" src={logo} alt="logo"></img>
            </a>

            <nav>
              <ul className="nav-links">
                <li className="nav-link">
                  <NavLink exact activeClassName="active" to="/">
                    HOME
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink exact activeClassName="active" to="/Blog">
                    BLOG
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink exact activeClassName="active" to="/Portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
};

export default Navbar;
