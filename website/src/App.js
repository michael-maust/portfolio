import './App.css';
import Test from './Components/test';

function App() {
  return (
    // <Wrapper>
    <div className="App">
      <div className=" flex flex-row">
        <div className=" border-green-400 text-red-600  padding-10 ">One</div>
        <div className="">Two</div>
        <div className="">Three</div>
        <div className="">Four</div>
      </div>

      <header className="App-header">
        <div className="fixed top-10000 left-0 h-screen w-30 ">
          <h3 className="">1</h3>
          <h3 className="">1000</h3>
          <h3 className="">1</h3>
        </div>

        <Test />
      </header>
    </div>
    // </Wrapper>
  );
}

export default App;
