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
    background-color: gray;
    position: absolute;
    top: 50%;
    right: 0px;
    width: 100%;
    max-width: 400px;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    border: solid .5px black;
}
    

.links {

    padding-top: 50px;
}



.nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    display: flex;
    //flex-direction: column;
    padding: 10px 20px;
    transition: all 0.3s ease 0s;
    font-size: 2rem;
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
  float:right; 
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
