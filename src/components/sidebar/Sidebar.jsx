import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";

const NavLink = ({ to, label, icon: Icon }) => {
    const location = useLocation();
    const path1 = location.pathname;
    console.log('path is :', path1);
    console.log('to is :', to);

    // Check if the current path starts with the to path
    const isActive = location.pathname.startsWith(to);
    return (
        <li>
            <Link
                to={to}
                className={` text-gray-700 hover:text-gray-900 py-3 px-2 flex items-center space-x-2 ${isActive ? 'bg-orange-100 text-orange border-orange-400 border-r-4' : ''
                    }`}
            >

                {Icon && <Icon className="w-5 h-5" />} {/* Render the icon if it exists */}
                <span>{label}</span>
            </Link>
        </li>
    );
};

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    const menuItems = [
        { to: '/admin/dashboard', label: 'ダッシュボード', icon: MdOutlineDashboard },
        { to: '/admin/user-list', label: '登録ユーザー', icon: FiUsers },
        { to: '/winner', label: '当選者', icon: HiOutlineGift },
        { to: '/operation_manager', label: '運営管理者', icon: FaUserShield },
    ];

    return (
        <div className="w-64 h-full fixed bg-gray-50 border-r border-gray-200 flex flex-col" role="complementary" aria-label="Sidebar navigation">

            <div className="flex md:hidden  p-4" onClick={toggleSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <nav className="flex-grow hidden lg:flex">
                <ul className="space-y-4 px-4  py-6">
                    {menuItems.map(({ to, label, icon }) => (
                        <NavLink key={to} to={to} label={label} icon={icon} />
                    ))}
                </ul>
            </nav>
        </div >
    );
};

export default Sidebar;