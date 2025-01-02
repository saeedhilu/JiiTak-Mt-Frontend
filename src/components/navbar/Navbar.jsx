import logo from "@/assets/logo3.png";
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slice/AuthSlice';
import useToast from "@/hooks/UseToast";
import { useNavigate } from "react-router-dom";

const Navbar = (color) => {
    console.log('color is :', color);

    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const showToast = useToast();
    const user = useSelector(state => state.auth.user);

    const handleLogout = () => {
        navigate('/user/home')
        showToast('Logout Successfully', 'success');
        setTimeout(() => {
            dispatch(logout());
        }, 1000); 
        
        
    };

    return (
        <nav className={`navbar sticky top-0 z-50 flex justify-between p-4 shadow-sm  ${color ? `bg-${color.color}` : ''}`} aria-label="Main Navigation">
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
                                    <a href="/login">Sign In</a>
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
