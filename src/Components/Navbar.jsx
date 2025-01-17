import React, { useContext } from 'react'
import PaidIcon from '@mui/icons-material/Paid';
import MyContext from '../utils/MyContext';

export default function Navbar() {

const {price} = useContext(MyContext);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-10 bg-white" >
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <li><a className='border-2 w-fit font-bold'>{price} Coins <PaidIcon style={{color:'gold'}}/></a></li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl hover:bg-transparent">
                <img className='w-12 h-12' src='logo.png' alt="" />
            </a>
        </div>
    
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center gap-4">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
                <li><a className='border-2 w-fit font-bold'>{price} Coins <PaidIcon style={{color:'gold'}}/></a></li>
            </ul>
        </div>
    </div>
    
   
    
  )
}
