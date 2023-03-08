import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  async function deleteUser(id) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, 
    {
      method: 'DELETE'
    }); //for deleting element in the server
    
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers); //for rendering the updated element list in the browser
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
