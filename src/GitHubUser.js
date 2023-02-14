import React, { useState,useEffect } from 'react';

const GitHubUser = ({username}) => {
  const [data,setData] = useState(null);

  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error=> console.error(`Error fetching user data: ${error}`));
  },[username]);

  if(!data) {
    return <div>Loading....</div>
  }
  return (
    <div>
      <h1>Data from GitHub</h1>
      <h2>Name : {data.name}</h2>
      <h3>Bio : {data.bio}</h3>
      <h3>Location : {data.location}</h3>
      <img src={data.avatar_url} alt={data.login}></img>
      </div>
  )
}

export default GitHubUser