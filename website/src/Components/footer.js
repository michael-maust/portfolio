// Dependency Imports
import React from 'react';
import Styled from 'styled-components';

//  File Imports
import SocialMediaLinks from './SocialMediaLinks';
import ResumeButton from './ResumeButton';

// Component Styling

const Wrapper = Styled.div`




.footer {
        margin-top: 100px;
        position: relative;
        bottom: 0px;
        width: 100%;
        height: auto;
        background-color: ${(props) => props.theme.colors.darkGray};
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
        
}


.copyright {

  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.0em;
    font-weight: 400px;
    color: ${(props) => props.theme.colors.tan};
}










`;

const footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <SocialMediaLinks />
        <ResumeButton />
        <p className="copyright">© 2022 Michael Maust</p>
      </div>
    </Wrapper>
  );
};

export default footer;
