import Styled from 'styled-components';
import React from 'react';
import './App.css';
import Test from './Components/test';
import Navbar from './Components/Navbar';


const Wrapper = Styled.div`

`;

function App() {
  return (
    <Wrapper>
      <div className="App">
       

        <Navbar />

        {/* <Test /> */}

        <header className="App-header"></header>
      </div>
    </Wrapper>
  );
}

export default App;
