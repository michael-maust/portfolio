// Dependency Imports
import React from "react";

import Styled from "styled-components";

//  File Imports

import logo from "../media/logo.svg";
import Menu from "./Menu";
import searchIcon from "../media/searchIcon.svg";
import Burger from "./Burger";


// Component Styling

const Wrapper = Styled.div`
      
.navbarClass {
  position: fixed;
  top: 0;
  left: 0px;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; 
  align-items: center; 
  z-index: 500; 
  margin-top: 40px;
  
}


header {
  
    position: relative;
    padding: auto;
    margin: 0px;
    max-height: 70px;
    width: 90vw;
    max-width: 1400px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height:70px;
    transition: all 0.5s;
    box-shadow: ${(props) => props.theme.shadow.box};
    


    &.toggleOff {
      transform: translateY(-200px);
    }
}

.search {
  margin-right: 50px; 
  
}

.logo  {
    height: 70%;
    padding-left: 50px;
  
}

.burger {
  padding-right: 50px;
}


/* Responsive Design Breakpoints  */

@media only screen and (min-width: 1024px) {
.burger {
  display: none;
};


};
@media only screen and (max-width: 1023px) {
.mainMenu, .search {
  display: none;
};
}; 


`;

const MenuStyle = Styled.div`


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


a:hover:not(.active) {
  color: ${(props) => props.theme.colors.orange};
  transition: ease-in-out 500ms ;
}

  .active {
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

//Function that hides the header when scrolling down and reveals when scrolling up
window.onscroll = function (e) {
  let elem = document.getElementById("navbar");

  //Will begin hiding header after scrolling 100px down.
  if (this.scrollY > 100) {
    if (this.oldScroll < this.scrollY) {
      elem.classList.add("toggleOff");
    } else {
      elem.classList.remove("toggleOff");
    }
  }
  this.oldScroll = this.scrollY;
};

const Navbar = () => {
  return (
    
      <Wrapper>
        <div>
          <div className="navbarClass">
            <header id="navbar">
              {/* TODO: Prevent logo clicking from reloading entire page. Use Router correclty  */}
              <a href="/">
                <img className="logo" src={logo} alt="logo"></img>
              </a>

              <MenuStyle>
                <div className="mainMenu">
                  <Menu />
                </div>
              </MenuStyle>

              <a href="">
                <img className="search" src={searchIcon} alt="search"></img>
              </a>

              <div className="burger">
                <Burger />
              </div>
            </header>
          </div>

          
        </div>
      </Wrapper>
    
  );
};

export default Navbar;
