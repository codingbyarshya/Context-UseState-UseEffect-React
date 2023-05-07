//useState - `ClickCounter` as a function component
/*
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
*/
//=============================================================================================================================================
//Exercise useEffect -`Counter` as a function component
/*
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
*/