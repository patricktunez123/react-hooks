// import UseStateHook from "./useStateHook/UseStateHook";
import { useState } from "react";
import UseContext from "./useContext/UseContext";
import { CounterContext } from "./useContext/CounterContext";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App border padding">
      {/* Uncomment this to see how usestate works */}
      {/* <UseStateHook /> */}
      <h1>App component</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => setCounter((currentCounter) => currentCounter + 1)}
      >
        +
      </button>
      <button
        onClick={() => setCounter((currentCounter) => currentCounter - 1)}
      >
        -
      </button>
      <hr />
      <CounterContext.Provider
        value={{
          counter,
          setCounter,
        }}
      >
        {/* the value is a required prop */}
        <UseContext />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
