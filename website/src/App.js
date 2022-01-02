import Styled from 'styled-components';
import React from 'react';
import './App.css';
import Theme from './Theme'

import Navbar from './Components/Navbar';
import Footer from './Components/footer';



const Wrapper = Styled.div`


.App {






`

function App() {
  return (
    <Theme>
       <Wrapper> 
      <div className="App">
     
        <Navbar />
        <div className="test">Hello world</div>
        <Footer />

        
      </div>
      </Wrapper>
    </Theme>
  );
}

export default App;
