import React from 'react';
import Styled from 'styled-components';


import AboutMe from './AboutMe';



const Wrapper = Styled.div`

body {
    background-color: red;
}


font-weight: 200px;
display: flex;
justify-content: center;
width: 100%;
padding-top: 200px;
  
  background-color: ${props => props.theme.colors.charcoal};
  font-family: ${props => props.theme.fonts.primary};


h1 {
    font-size: ${props => props.theme.fontSizes.large}

}




`;

const About = () => {
  return (
    <Wrapper>
      <div>
        

    <AboutMe />



      </div>
    </Wrapper>
  );
};

export default About;

