// Dependency Imports
import React, {useState} from 'react';

import Styled from 'styled-components';

//  File Imports

import Menu from './Menu';
import SideMenu from './sideMenu';
import '../App.css';

// Component Styling

const StyledBurger = Styled.div`


/* Hamburger Icon Styling */


.hamburger {
  margin-right: 20px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transform: ${(props) => (props.showMenu ? 'rotate(-45deg)' : 'rotate(0)')};
  transition: all 0.3s linear;

  &:hover, * {
    fill: red;
  }
 
}





.rect1 {

 fill: ${(props) => props.theme.colors.tan};
 &:hover{
   fill: red;
   transition: all 0.3s linear;

 }
}

.rect2 {

 fill: ${(props) => props.theme.colors.tan};
 transition: all 0.6s linear;
 &:hover{
  transition: all 0.3s linear;
   fill: red;
 }

}

.rect3 {

fill: ${(props) => props.theme.colors.orange};
transform: ${(props) => (props.showMenu ? 'translateX(-30px)' : 'rotate(0)')};
 transition: all 0.6s linear;

 &:hover{
  transition: all 0.3s linear;
   fill: red;
 }
}




`;

const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  let test = 'this sucks';

  let menu;

  if (showMenu) {
    menu = (
      <div className="sideMenu">
        <SideMenu />
      </div>
    );
  }

  return (
    <StyledBurger showMenu={showMenu}>

      <div>
        <svg
          className="hamburger"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={handleClick}
        >
          <rect className="rect1" y="0" width="100" height="15" rx="7"></rect>
          <rect className="rect2" y="30" width="100" height="15" rx="7"></rect>
          <rect
            className="rect3"
            y="60"
            x="30"
            width="70"
            height="15"
            rx="7"
          ></rect>
        </svg>

        {menu}
      </div>
    </StyledBurger>
  );
};

export default Burger;
