// Dependency Imports
import React, {useState, useEffect} from "react";

import Styled from "styled-components";
import {useLocation} from "react-router-dom";
//  File Imports

import SideMenu from "./sideMenu";
import "../App.css";

const orangeColor = (props) => props.theme.colors.orange;
const blueColor = (props) => props.theme.colors.blue;

// Component Styling

const StyledBurger = Styled.div`

/* Hamburger Icon Styling */

.hamburger {
  position: relative;
  cursor: pointer;
  transform-origin: center center;
  transform: ${(props) => (props.showMenu ? "rotate(-45deg)" : "rotate(0)")};
  transition: all 0.3s linear;

  &:hover {
    transform: ${(props) => (props.showMenu ? "" : "scale(1.1)")};
    transition: all 0.7s linear;
  }
}


.rect {
  width: 40px;
  height: 6px;
  border-radius: 10px;
  margin: 7px 0px;
  background-color: ${(props) => props.theme.colors.tan};
}


.rect1 {
 background-color: ${(props) => props.theme.colors.tan};
}

.rect2 {
 background-color: ${(props) => props.theme.colors.tan};
}

.rect3 {
  background-color: ${(props) => (props.showMenu ? blueColor : orangeColor)};
  margin-right: 0px;
  margin-left: auto;
  width: 25px;
  transform: ${(props) => (props.showMenu ? "translateX(-13px)" : "rotate(0)")};
  transition: all 0.6s ease-in-out;
}


`;

const Wrapper = Styled.div`

.background {
  visibility: ${(props) => (props.showMenu ? "" : "hidden")};
  z-index: -600;
    top: -100px;
    left: -100px; 
    width: 150vw;
    height: 200vh;
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    position: fixed;
   
}


.menuLayout {
  
  right: 0;
  top: 20px;
  transition:  all 0.7s;
  overflow: auto;
  height: ${(props) => (props.showMenu ? "90vh" : "0")};


  //Hide Scroll Bar
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar { 
    display: none; /* Chrome Safari */
} 
}






`;

const Burger = () => {
  //State that toggle the mobile menu
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleMenuOff = () => setShowMenu(false);

  //Toggle mobile menu off upon scrolling

  window.addEventListener("scroll", toggleMenuOff);
  window.addEventListener("resize", toggleMenuOff);

  const navLinks = document.querySelector("menuLayout");

  const location = useLocation();

  React.useEffect(() => {
    // runs on location, i.e. route, change
    toggleMenuOff();
  }, [location]);

  // navLinks.addEventListener('click', toggleMenuOff);

  return (
    <div>
      <StyledBurger showMenu={showMenu}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="rect1 rect"></div>
          <div className="rect2 rect"></div>
          <div className="rect3 rect"></div>
        </div>
      </StyledBurger>

      <Wrapper showMenu={showMenu}>
        <SideMenu />

        <div className="background" onClick={toggleMenu}></div>
      </Wrapper>
    </div>
  );
};

export default Burger;
