// Exercise useEffect - Create a GithubUserList component
/*
import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddUser() {
    setUsernames([...usernames, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddUser}>Add User</button>
      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
}

export default GithubUserList;
*/