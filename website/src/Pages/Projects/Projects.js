import React from 'react';
import Styled from 'styled-components';

import AllProjects from './AllProjects';
import ContactForm from '../Contact/ContactForm';



const Wrapper = Styled.div`

body {
    background-color: red;
}


font-weight: 200px;
display: flex;
justify-content: center;
width: 100%;
  
  background-color: ${props => props.theme.colors.charcoal};
  font-family: ${props => props.theme.fonts.primary};


h1 {
    font-size: ${props => props.theme.fontSizes.large}

}




`;

const Projects = () => {
  return (
    <Wrapper>
      <div>
        


      <AllProjects />


      </div>
    </Wrapper>
  );
};

export default Projects;

