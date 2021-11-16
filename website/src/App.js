import Styled from 'styled-components';
import React from 'react';
import './App.css';
import Theme from './Theme'

import Navbar from './Components/Navbar';



function App() {
  return (
    <Theme>
      <div className="App">
       

        <Navbar />

    
      </div>
    </Theme>
  );
}

export default App;
