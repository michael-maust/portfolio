import React from 'react';
import Styled from 'styled-components';
import Menu from './Menu';

const Wrapper = Styled.div`

.background {
    z-index: -600;
    top: -100px;
    left: -100px;
    width: 150vw;
    height: 200vh;
    background-color: black;
    opacity: 40%;
    position: fixed;

}


.menuLayout {
    z-index: -500;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    max-width: 380px;
    height: 85vh;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    border: solid .5px black;
}
    

.links {
    padding-top: 80px;
}


.nav-links, .nav-link, .active, li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}






.nav-links, .nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    padding: 10px 0px;
    transition: all 0.3s ease 0s;
    font-size: 2rem;
    font-weight: 400px;
    text-decoration: none;

  
  }




  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    padding: 7px 20px;
    

  }


a:hover:not(.active) {
  color: ${(props) => props.theme.colors.orange};
  transition: ease-in-out 500ms ;
}



  .active {
    transition: .5s ease-in-out;
    border-radius: 25px;
    background:${(props) => props.theme.colors.orange}; 
    padding: 7px 20px;
    position: relative;
  
  }

  /* .active:after {
  content:""; 
  float:left; 
  background:${(props) => props.theme.colors.orange}; 
  width:100%; 
  height:6px; 
  border-radius: 3px;
  transition: background-color 2s ease-in-out;
  z-index: 3;
  } */


.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}


`;

const sideMenu = () => {
  return (
    <Wrapper>
      <div className="menuLayout">
        <div className="links">
          <Menu />
        </div>
      </div>
      <div className="background"></div>
    </Wrapper>
  );
};

export default sideMenu;
