import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';


export default function Navbar() {

const [isShow, setisShow] = useState(false)

function showNav(){
  setisShow(prev=>!prev)
}

  return (
    <>
    <nav className='navbar sticky-top border-bottom border-dark  py-3'>

      <div className='container d-flex justify-content-between align-items-center'>


      <div className='d-flex align-content-lg-end align-items-center gap-3'>
        <div className='logo'>
         <NavLink className='nav-link' to={''} >  <img src={logo} alt="logo page" /></NavLink>
        </div>
        <div>
        <span className='fw-bold text-logo'>عدسة</span>
        <p className='m-0 d-lg-flex d-none'>عالم التصوير الفوتوغرافي</p>
        </div>
      </div>

      <ul className={` list-unstyled  d-flex ${isShow && 'show'}  flex-column flex-lg-row align-items-start align-items-lg-center  gap-2 m-0 p-1`}>
        <li className='nav-item'>
          <NavLink className='nav-link' to={''} onClick={showNav}>الرئيسية</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to={'blog'} onClick={showNav}>المدونة</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to={'about'} onClick={showNav}>من نحن</NavLink>
        </li>

        <NavLink className='text-center text-decoration-none btn-main fw-bold d-lg-none d-block w-100 my-2' to={'blog'} onClick={showNav}>  ابدأ القراءة</NavLink>


      </ul>

      <div className='d-lg-flex d-none align-items-center gap-2 '>
        <button className='btn-out-main'>
          <i className='fa fa-solid fa-search'></i>
        </button>

          <NavLink className='text-center text-decoration-none btn-main fw-bold ' to={'blog'} onClick={showNav}>  ابدأ القراءة</NavLink>


      </div>
      <div className='d-block d-lg-none '>
        <button onClick={showNav} className='py-2 px-3 bg-transparent text-white rounded-3'>
          {isShow?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
        </button>
      </div>

      </div>

    </nav>
    </>
  )
}
