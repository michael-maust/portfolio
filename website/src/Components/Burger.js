// Dependency Imports
import React, {useState} from 'react';

import Styled from 'styled-components';

//  File Imports

import SideMenu from './sideMenu';
import '../App.css';

// Component Styling

const StyledBurger = Styled.div`

/* Hamburger Icon Styling */

.hamburger {
  
  cursor: pointer;
  transform-origin: center center;
  transform: ${(props) => (props.showMenu ? 'rotate(-45deg)' : 'rotate(0)')};
  transition: all 0.3s linear;

  &:hover {
    transform: ${(props) => (props.showMenu ? '' : 'scale(1.1)')};
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
  background-color: ${(props) => props.theme.colors.orange};
  margin-right: 0px;
  margin-left: auto;
  width: 25px;
  transform: ${(props) => (props.showMenu ? 'translateX(-10px)' : 'rotate(0)')};
  transition: all 0.6s linear;
}


`;

const Wrapper = Styled.div`




.menuLayout {
 
  top: 20px;
  transition:  all 0.7s;
  overflow: auto;
  height: ${(props) => (props.showMenu ? '80vh' : '0')};


  //Hide Scroll Bar
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar { 
    display: none; /* Chrome Safari */
} 
}

`;

const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);

  // let menu;

  // if (showMenu) {
  //   menu = (
  //     <div className="sideMenuAnimation">
  //       <SideMenu showMenu={showMenu}/>
  //     </div>
  //   );
  // }

  return (
    <div>
      <StyledBurger showMenu={showMenu}>
        <div className="hamburger" onClick={handleClick}>
          <div className="rect1 rect"></div>
          <div className="rect2 rect"></div>
          <div className="rect3 rect"></div>
        </div>
      </StyledBurger>

      <Wrapper showMenu={showMenu}>
        <SideMenu />
      </Wrapper>
    </div>
  );
};

export default Burger;
