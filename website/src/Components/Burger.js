// Dependency Imports
import React, {useState} from 'react';

import Styled from 'styled-components';

//  File Imports

import Menu from './Menu'
import SideMenu from './sideMenu'
import '../App.css';

// Component Styling

const Wrapper = Styled.div`


/* Hamburger Icon Styling */


.hamburger {
  margin-right: 20px;
  height: 40px;
  width: 40px;
  cursor: pointer;
 
}

.rect1 {
 
 fill: ${(props) => props.theme.colors.tan};
 color: ${(showMenu) => showMenu ? 'rotate(45deg)' : 'rotate(0)'}
 transform: ${(showMenu) => showMenu ? 'rotate(45deg)' : 'rotate(0)'};
}

.rect2 {

 fill: ${(props) => props.theme.colors.tan};

}

.rect3 {

fill: ${(props) => props.theme.colors.orange};
}








`;

const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = <div className="sideMenu">
        <SideMenu />
    </div>
    
    
    
  }

  return (
    <Wrapper>
      <div>
        <svg
          className="hamburger"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={() => setShowMenu(!showMenu)}
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

     


    </Wrapper>
  );
};

export default Burger;
