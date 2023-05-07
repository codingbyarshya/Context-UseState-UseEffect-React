//========================================================================================================================================
//Exercise useEffect - Add a side effect to the `ClickCounter`
/*
import React, { useState, useEffect } from "react";

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}

export default ClickCounter;
*/
//Exercise useState - `ClickCounter` as a function component
/*
import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ClickCounter;
*/