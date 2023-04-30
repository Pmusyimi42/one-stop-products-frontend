import React, {useState} from 'react';
import './AddNewUser.css';

export default function AddNewUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your API endpoint to save the user's data to the database
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('User saved successfully:', data);
        // Reset the form
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
  };

  return (
    <div className="container">
    <h1 className="add-user-title">Add New User</h1>
    <p className="add-user-subtitle">Create a brand new user and add them to the site</p>

    <form className="add-user-form" onSubmit={handleSubmit}>
      <div className="add-user-form-row">
        <label htmlFor="username" className="add-user-label">Username</label>
        <input type="text" className="add-user-input" id="username" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="add-user-form-row">
        <label htmlFor="email" className="add-user-label">Email address</label>
        <input type="email" className="add-user-input" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="add-user-form-row">
        <label htmlFor="password" className="add-user-label">Password</label>
        <input type="password" className="add-user-input" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className="add-user-form-row">
        <label htmlFor="role" className="add-user-label">Role</label>
        <select className="add-user-select" aria-label="Default select example" id="role" value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="">Choose Role</option>
          <option value="admin">Admin</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div className="add-user-form-row">
        <button type="submit" className="add-user-button">Add User</button>
      </div>
    </form>
  </div>
  );
}
