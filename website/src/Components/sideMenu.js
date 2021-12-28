import React from 'react';
import Styled from 'styled-components';
import Menu from './Menu';
import SocialMediaLinks from './SocialMediaLinks';
import ResumeButton from './ResumeButton';

const Wrapper = Styled.div`

.background {
    z-index: -600;
    top: -100px;
    left: -100px;
    width: 150vw;
    height: 200vh;
    background-color: ${(props) => props.theme.colors.darkGray};
    opacity: 40%;
    position: fixed;
    

}


.menuLayout {
    z-index: -500;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    max-width: 340px;
    background-color: ${(props) => props.theme.colors.charcoal};
    border-radius: 25px;
    border: solid 5px ${(props) => props.theme.colors.darkGray};
    
    
    

}
    


@media only screen and (max-width: 480px) {
.menuLayout {
  width: 100%;
};
}; 


.links {
    padding-top: 40px;
}


.nav-links, .nav-link, .active, li, .resume {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}








.nav-links, .nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    padding: 5px 0px;
    transition: all 0.3s ease 0s;
    font-size: 1.3em;
    font-weight: 400px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    padding: 5px 20px;
  
  }




a:hover:not(.active, .resume) {
  color: ${(props) => props.theme.colors.orange};
  transition: ease-in-out 500ms ;
}



  .active {
    transition: .5s ease-in-out;
    border-radius: 25px;
    background:${(props) => props.theme.colors.orange}; 
    padding: 5px 20px;
    position: relative;
  
  }

  
.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}


hr {
  margin-top: 10px;
  width: 60%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border: none;
  border-radius: 20px;
  transform: ${(props) => (props.showMenu ? 'translateX(-10px)' : 'rotate(0)')};
}






`;

const sideMenu = () => {
  return (
    <Wrapper>
      <div className="menuLayout">
        <div className="links">
          <Menu />
        </div>

        <hr />

        <SocialMediaLinks />

        <ResumeButton />
      </div>
      <div className="background"></div>
    </Wrapper>
  );
};

export default sideMenu;
