// Dependency Imports
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
} from 'react-router-dom';
import Styled from 'styled-components';

//  File Imports

import '../App.css';

// Component Styling

const Wrapper = Styled.div`


.navbar {

    
}

.footer {

       
        bottom: 0;
        width: 100%;
        height: 300px;
        background-color: ${(props) => props.theme.colors.darkGray};
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px 50px 0px 0px;
 
    
   
}













`;

const footer = () => {
  return (
    <Router>
      <Wrapper>
        <div className="footer">hello world</div>
      </Wrapper>
    </Router>
  );
};

export default footer;
