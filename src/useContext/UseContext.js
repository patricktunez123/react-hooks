import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const UseContext = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="border margin-top">
      <h1>UseContext component</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => setCounter((currentCounter) => currentCounter - 2)}
      >
        Can even be changed from here (-2)
      </button>
      <hr />
      <ChildComponent />
    </div>
  );
};

export const ChildComponent = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="border margin-top">
      <h1>This is the UseContext Child component</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => setCounter((currentCounter) => currentCounter + 2)}
      >
        Can even be changed from here (+2)
      </button>
      <hr />
    </div>
  );
};

export default UseContext;
