import React from 'react';
import {NavLink} from 'react-router-dom';
import Styled from 'styled-components';

const Wrapper = Styled.div`



`;

const Menu = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink  activeclassname="active" to="/">
            HOME
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink  activeclassname="active" to="/about">
            ABOUT
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink  activeclassname="active" to="/blog">
            BLOG
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink  activeclassname="active" to="/portfolio">
            PORTFOLIO
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink  activeclassname="active" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
