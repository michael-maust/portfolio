import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
} from 'react-router-dom';

import Styled from 'styled-components';
import Home from '../Pages/Home/home';
import Blog from '../Pages/Blog/blog';
import Portfolio from '../Pages/Portfolio/portfolio';
import logo from '../media/cup.png';

const Wrapper = Styled.div`

navbar {
  position: -webkit-sticky;
  position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 30px 10%;
    background-color: #403d39;

    

}

.nav-link, li {
    display: inline-block;
    padding: 10px 40px;
    transition: all 0.3s ease 0s;
    border-radius: 20px;
    background-color: #81b29a;
    margin: 10px;
  }


li,
  a,
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    font-weight: 200px;
    text-decoration: none;
    color: white;
  }

.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}


p {

  vertical-algin: middle;
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
          <navbar>
            <a href="/">
              <img className="logo" src={logo} alt="logo"></img>
            </a>

            <nav>
              <ul className="nav-links">
                <li className="nav-link">
                  <NavLink exact activeClassName="selected" to="/">
                    HOME
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink exact activeClassName="selected" to="/Blog">
                    BLOG
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink exact activeClassName="selected" to="/Portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
              </ul>
            </nav>
          </navbar>

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
