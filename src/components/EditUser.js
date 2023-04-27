import React, { useState, useEffect } from 'react';
import AssignRoleForm from './AssignRoleForm'


function EditUser(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch(`/users/${props.userId}`)
      .then(response => response.json())
      .then(user => {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setPassword(user.password);
      })
      .catch(error => console.error(error));
  }, [props.userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdate(props.userId, name, email, role, password);
  };

  return (
    <div className='container'>
      <h2 className='p-2 text-lg font-semibold'>Edit User Details</h2>
      <form onSubmit={handleSubmit} className='form-container items-center  flex flex-col mx-auto p-2 text-lg font-semibold bg-zinc-200'>
        <label className='flex gap-2'>
          Name:
          <input type="text" className='rounded-lg text-base font-normal' value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label className='flex gap-2'>
          Email:
          <input type="email" className='rounded-lg text-base font-normal' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='flex gap-2 '>
        Role:
        <select value={role} onChange={(event) => setRole(event.target.value)} className='rounded-lg text-base font-normal'>
          <option value="user">Seller</option>
          <option value="admin">Admin</option>
        </select>
      </label>
        <br />
        <label className='flex gap-2'>
          Password:
          <input type="password" className='rounded-lg text-base font-normal' value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <div className='flex gap-4 mx-auto p-2'>
            <button type="submit" className='rounded-lg hover:bg-red-600 hover:text-white hover:font-semibold'>Save</button>
            <button type="button" className='rounded-lg hover:bg-red-600 hover:text-white hover:font-semibold' onClick={props.onCancel}>Cancel</button>
        </div>
        <AssignRoleForm />

      </form>
    </div>
  );
}

export default EditUser;
