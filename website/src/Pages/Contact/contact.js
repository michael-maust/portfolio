import React from 'react';
import Styled from 'styled-components';


import ContactForm from './ContactForm';



const Wrapper = Styled.div`

body {
    background-color: red;
}

padding-top: 150px;
margin-bottom: 0px;
display: flex;
justify-content: center;
width: 100%;
  
  background-color: ${props => props.theme.colors.charcoal};
  font-family: ${props => props.theme.fonts.primary};


h1 {
    font-size: ${props => props.theme.fontSizes.large}

}


hr {
  visibility: hidden;
}



`;





const contact = () => {




  return (
    <Wrapper>
      <div>
       

        
<ContactForm />

      </div>
    </Wrapper>
  );
};

export default contact;
