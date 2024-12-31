import logo from "@/assets/logo3.png";
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the user icon from react-icons
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slice/AuthSlice';
import useToast from "@/hooks/UseToast";

const Navbar = (color) => {
    console.log('color is :',color);
    
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
    const dispatch = useDispatch();
    const showToast = useToast();
    const user = useSelector(state => state.auth.user); // Access user from Redux state

    const handleLogout = () => {
        dispatch(logout());
        showToast('Logout Successfully', 'success');
    };

    return (
        <nav className={`navbar flex justify-between p-4 shadow-sm  ${color ? `bg-${color.color}`: ''}`} aria-label="Main Navigation">
            <a href="/" className="navbar-logo" aria-label="Go to home page">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
            </a>
            <div className="">
                <FaUserCircle 
                    className="text-2xl cursor-pointer hover:text-gray-700" 
                    onClick={() => setShowDropdown(!showDropdown)} 
                />
                {showDropdown && (
                    <div className="absolute right-4 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                        <ul className="list-none p-2">
                            {user ? (
                                <li className="cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={handleLogout}>
                                    Logout
                                </li>
                            ) : (
                                <li className="cursor-pointer py-2 px-4 hover:bg-gray-100">
                                    <a href="/user/login">Sign In</a>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
