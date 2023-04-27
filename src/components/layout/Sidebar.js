import React from 'react'
import {MdOutlineAccountCircle, MdOutlineProductionQuantityLimits} from 'react-icons/md'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiDashboard3Line } from 'react-icons/ri';
import { FaUserPlus, FaUserShield } from 'react-icons/fa';

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-zinc-200 w-60 p-3 flex flex-col'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <MdOutlineAccountCircle fontSize='30' />
            <span className='text-2xl mx-4'>My Profile</span>
        </div>
        <div className='flex flex-row px-2 py-2 gap-2 text-lg hover:bg-red-600 hover:text-white'>
            <MdOutlineProductionQuantityLimits fontSize={25}/>
            <Link to="/add_products">Add Product</Link>
        </div>
        <div className='flex flex-row px-2 gap-2 text-lg mt-2 hover:bg-red-600 hover:text-white'>
            <BsFillCartCheckFill fontSize={25}/>
            <Link to="/products_list">View Products</Link>
        </div>
        <div className='flex flex-row px-2 gap-2 text-lg mt-2 hover:bg-red-600 hover:text-white'>
            <RiDashboard3Line fontSize={25}/>
            <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className='flex flex-row px-2 gap-2 text-lg mt-2 hover:bg-red-600 hover:text-white'>
            <FaUserPlus fontSize={25}/>
            <Link to="/add_user">Add User</Link>
        </div>
        <div className='flex flex-row px-2 gap-2 text-lg mt-2 hover:bg-red-600 hover:text-white'>
            <FaUserShield fontSize={25}/>
            <Link to="/user_details">User Credentials</Link>
        </div>
    </div>
  )
}

export default Sidebar