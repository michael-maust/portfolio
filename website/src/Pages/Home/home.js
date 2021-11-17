import React from 'react';
import Styled from 'styled-components';
import image from './portrait.svg';

const Wrapper = Styled.div`




font-family: ${(props) => props.theme.fonts.primary};


.welcome {
padding-top: 150px;
font-weight: bold;

color: ${(props) => props.theme.colors.tan}


}


.centered {

   display: flex;
   align-items: center;
   flex-direction: column


}

.portrait {

  width: 300px;
  margin: 0px 0px 40px 0px ;
}


h1 {
 
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.large}
 
}

p:before {
  
  content:""; 
  margin-right: 20px;
  float:left; 
  background:${(props) => props.theme.colors.tan}; 
  width:15px; 
  height:22rem; 
  border-radius: 15px;
  transition: background-color 2s ease-in 2s ease-out;
  
}


.bio {
  
  width: 45%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.tan};


}




.highlight {
  color: ${(props) => props.theme.colors.orange};
  font-weight: bold;
}


`;

const home = () => {
  return (
    <Wrapper>
      <div>
        <section className="centered">
          <h1 className="welcome"> WELCOME!</h1>
          <img className="portrait" src={image} alt="portrait" />

            
            <p className="bio">
              Hello! My name is{' '}
              <span className="highlight"> Michael Maust</span>. I am
              entrepreneur, engineer, and software developer. I believe in
              creating software and businesses that bring value to peoples’
              lives. I am very ambitious and driven to constantly improve and
              learn more each and every day.
            </p>
         
        </section>
      </div>
    </Wrapper>
  );
};

export default home;
