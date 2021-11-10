import Styled from 'styled-components'
import './App.css';
import Test from './Components/test'


const Wrapper = Styled.div `

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}


p, a {

  padding: 1rem;

}

.App-header {
  background-color: #282c;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}



`


function App() {
  return (
    <Wrapper>
    <div className="App">
      <header className="App-header">
        

      <Test />

      </header>
    </div>
    </Wrapper>
  );
}

export default App;
