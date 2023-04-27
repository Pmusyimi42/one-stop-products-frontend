import React, { useState, useEffect } from 'react';
import './AssignRoleForm.css';

export default function AssignRoleForm({ currentUser }) {
  const [permissions, setPermissions] = useState({
    access: false,
    create: false,
    edit: false,
    view: false,
    remove: false
  });

  useEffect(() => {
    fetch('/permissions')
      .then((response) => response.json())
      .then((data) => {
        const userPermissions = data.find((item) => item.role === currentUser);
        if (userPermissions) {
          setPermissions(userPermissions.permissions);
        }
      });
  }, [currentUser]);

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const permissionsData = { userId: currentUser.id, role: currentUser.role, ...permissions };
    console.log('Submitting permissions data:', permissionsData); // Log the data being sent to the server

    const createPermission = (permissionData) => {
      fetch(`/permissions/${currentUser.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(permissionData)
      })
        .then(response => response.json())
        .then(data => console.log('Permission created:', data))
        .catch(error => console.error('Error creating permission:', error));
    };
  
    createPermission(permissionsData);
  };

  return (
    <div className="permissions">
      <h2>Permissions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Roles</label>
          <label>Access</label>
          <label>Create</label>
          <label>Edit</label>
          <label>View</label>
          <label>Delete</label>
        </div>
        <div>
          <label>{currentUser}</label>
          <input
            type="checkbox"
            name="access"
            checked={permissions.access}
            onChange={handlePermissionChange}
          />
          <input
            type="checkbox"
            name="create"
            checked={permissions.create}
            onChange={handlePermissionChange}
          />
          <input
            type="checkbox"
            name="edit"
            checked={permissions.edit}
            onChange={handlePermissionChange}
          />
          <input
            type="checkbox"
            name="view"
            checked={permissions.view}
            onChange={handlePermissionChange}
          />
          <input
            type="checkbox"
            name="remove"
            checked={permissions.remove}
            onChange={handlePermissionChange}
          />
        </div>
      </form>
    </div>
  );
}
