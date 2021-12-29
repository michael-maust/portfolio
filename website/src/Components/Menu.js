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
