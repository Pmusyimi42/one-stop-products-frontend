import React from 'react'
import AddProducts from './AddProduct'
import UserDetails from './UserDetials'
import AssignRoleForm  from './AssignRoleForm'
import AddNewUser from './AddNewUser'
import Orders from './Orders'


function AdminSection() {
  return (
    <div className='mx-auto'>
      Admin Section
        <AddProducts />
        <AddNewUser />
        <UserDetails />
        {/* <AssignRoleForm /> */}
        <Orders />



    </div>
  )
}

export default AdminSection