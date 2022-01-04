import Styled from 'styled-components';
import React from 'react';
import './App.css';
import Theme from './Theme'

import Navbar from './Components/Navbar';
import Footer from './Components/footer';




const Wrapper = Styled.div`


.app {

  user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */

`;



function App() {
  return (
    <Theme>
       <Wrapper> 
      <div className="app">
     
        <Navbar />
        <div className="test">Hello world</div>
        <Footer />

        
      </div>
      </Wrapper>
    </Theme>
  );
}

export default App;
