import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`

body {
    background-color: red;
}

padding-top: 100px;
font-weight: 200px;
display: flex;
justify-content: center;
width: 100%;
  
  background-color: ${props => props.theme.colors.charcoal};
  font-family: ${props => props.theme.fonts.primary};


h1 {
    font-size: ${props => props.theme.fontSizes.large};
    margin-bottom: 900px;

}




`;

const about = () => {
  return (
    <Wrapper>
      <div>
        <h1> This is the about page.</h1>
        <p>
       


        </p>


      </div>
    </Wrapper>
  );
};

export default about;