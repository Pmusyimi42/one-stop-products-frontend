import React from 'react'
import './Navlink.css';
// import { NavLink } from 'react-router-dom';
import image from './images/shoplogo3.png'
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";




function Navlink({search, setSearch}) {
  return (
    <div className='navlink'>
      <div>
        <img src={image}/>
      </div>
      <div className='nav mt-5'>
        <nav className="navba">
          <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="text" value ={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
          </div>
        </nav>  
      </div>
     
      
      <div className="create">
        <Link to={"/signup"} style={{ color: "black" }}>
          <BsFillPeopleFill />
            Sign Up
        </Link>
      </div>

      <div className="create">
        <Link to={"/login"} style={{ color: "black" }}>
          <BsPersonCheckFill />
            Login
        </Link>
      </div>         
          
      <div className="cart">
          <Link to={"/signup"} style={{ color: "black" }}><BsBagCheckFill />Cart</Link>
      </div>

      
    </div>
  )
}

export default Navlink