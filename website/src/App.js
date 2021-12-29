import Styled from 'styled-components';
import React from 'react';
import './App.css';
import Theme from './Theme'

import Navbar from './Components/Navbar';
// import Footer from './Components/footer';
// import Menu from './Components/Menu';


const Wrapper = Styled.div`

body {

  background-color: red;

}
`

function App() {
  return (
    <Theme>
      <div className="App">
       
        <Navbar />
       
        {/* <Footer /> */}

    
      </div>
    </Theme>
  );
}

export default App;
