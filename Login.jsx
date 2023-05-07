//========================================================================================================================================
//Exercise useState - `Login` as a function component
/*
import React, { useState } from 'react';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleLoginClick = () => {
    props.onLogin({ username, password, remember });
  };

  const handleResetClick = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  const isLoginDisabled = username === '' || password === '';

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <label htmlFor="remember">Remember me:</label>
      <input
        type="checkbox"
        id="remember"
        checked={remember}
        onChange={handleRememberChange}
      />
      <br />
      <button disabled={isLoginDisabled} onClick={handleLoginClick}>
        Login
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default Login;
*/