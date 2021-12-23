import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
} from 'react-router-dom';
import Styled from 'styled-components';

const Wrapper = Styled.div`

position: relative;
z-index: -200;



.nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    display: inline-block;
    padding: 10px 20px;
    transition: all 0.3s ease 0s;
    font-size: 1.2rem;
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
  transition: ease-in-out 500ms ;
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
  transition: background-color 2s ease-in-out;
  z-index: 3;
  }


.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}

`;

const Menu = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink exact activeClassName="active" to="/">
            HOME
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink exact activeClassName="active" to="/About">
            ABOUT
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

        <li className="nav-link">
          <NavLink exact activeClassName="active" to="/Contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
