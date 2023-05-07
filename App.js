//Exercise Context - Create a `LanguageContext`
/*
import React, { useState } from 'react';

const LanguageContext = React.createContext('en');

function App() {
  const [language, setLanguage] = useState('en');

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select value={language} onChange={handleLanguageChange}>
          <option value="En">English</option>
          <option value="Tr">Türkçe</option>
          <option value="فا">فارسی</option>
        </select>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

function DisplayLanguage() {
  const language = React.useContext(LanguageContext);
  return <h1>{`Selected language: ${language}`}</h1>;
}

export default App;
*/
//========================================================================================================================================
//Context - Consume the `LanguageContext`
/*
import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';

function App() {
  const [language, setLanguage] = useState('en');
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <select value={language} onChange={handleLanguageChange}>
          <option value="En">English</option>
          <option value="Tr">Türkçe</option>
          <option value="فا">فارسی</option>
        </select>
        <DisplayLanguage />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
*/
//========================================================================================================================================
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
//========================================================================================================================================
//Exercise useState - `Login` as a function component
/*
import React from 'react';
import Login from './Login';

function App() {
  const handleLogin = (data) => {
    console.log('Login data:', data);
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
*/
//========================================================================================================================================
//Exercise useEffect - Add a side effect to the `ClickCounter`
/*
import React, { useState } from "react";
import ClickCounter from "./ClickCounter";

function App() {
  const [counter, setCounter] = useState(0);

  function handleCounterChange(newCounterValue) {
    setCounter(newCounterValue);
  }

  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
      <p>Current counter value: {counter}</p>
    </div>
  );
}

export default App;
*/
//========================================================================================================================================
//Exercise useEffect -`Counter` as a function component
/*
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
*/
//========================================================================================================================================
//Exercise useEffect - Create a GithubUser
/*
import React from "react";
import GithubUser from "./GithubUser";

function App() {
  return (
    <div>
      <GithubUser username="codingbyarshya" />
    </div>
  );
}

export default App;
*/
//========================================================================================================================================
// Exercise useEffect - Create a GithubUserList component
/*
import React from "react";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <div>
      <GithubUserList />
    </div>
  );
}

export default App;
*/