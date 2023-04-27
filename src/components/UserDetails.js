import React, { useState, useEffect } from 'react';
import {FaUserEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import EditUser from './EditUser'

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  
  const handleUpdateUser = (userId, name, email, role, password) => {
    const userToUpdate = { name, email, role, password };
    fetch(`/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userToUpdate),
    })
      .then(response => response.json())
      .then(updatedUser => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        setEditUserId(null);
      })
      .catch(error => console.error(error));
  };

  const handleEditUser = (userId) => {
    setEditUserId(userId);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`/users/${userId}`, {
        method: 'DELETE'
      })
        
         document.location.reload();

    }
}


  return (
    <div className='flex flex-col p-2'>
      <h1 className='text-3xl font-bold font-serif mx-auto'>User Details</h1>
      <p className='text-xl mx-auto mt-2'>Details regarding the various users</p>
      <table className='mx-4 mt-2'>
        <thead className=''>
          <tr >
            <th>User No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {/* <hr/> */}
        </thead>
        <tbody className='bg-zinc-100'>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className='bg-red-600 rounded p-1' onClick={() => handleEditUser(user.id)}>
                  <FaUserEdit/>
                </button>
                <button className='bg-red-600 rounded p-1 mx-2' onClick={() => handleDeleteUser(user.id)}>
                  <MdDelete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editUserId && <EditUser userId={editUserId} onUpdate={handleUpdateUser} onCancel={() => setEditUserId(null)} />}
    </div>
  );
}

export default UserDetails;
