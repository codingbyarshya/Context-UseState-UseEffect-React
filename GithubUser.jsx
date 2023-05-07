//Exercise useEffect - Create a GithubUser
/*
import React, { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, [username]);

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  const { name, avatar_url, bio } = userData;

  return (
    <div>
      <h1>{name}</h1>
      <img src={avatar_url} alt={`${name} avatar`} />
      <p>{bio}</p>
    </div>
  );
}

export default GithubUser;
*/

