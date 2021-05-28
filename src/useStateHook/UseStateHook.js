import React, { useState } from "react";

const UseStateHook = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 30 });

  return (
    <div>
      <h1>Count 1: {count1}</h1>
      <h1>Count 2: {count2}</h1>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        Increment only count 1
      </button>

      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count2: currentState.count2 + 1,
          }))
        }
      >
        Increment only count 2
      </button>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
            count2: currentState.count2 + 1,
          }))
        }
      >
        Increment both count 1 and count 2
      </button>
    </div>
  );
};

export default UseStateHook;
