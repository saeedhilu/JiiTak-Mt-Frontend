import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";

const NavLink = ({ to, label, icon: Icon }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <li>
            <Link
                to={to}
                className={`text-gray-700 hover:text-gray-900 py-3 px-2 flex items-center space-x-2 ${isActive ? 'bg-orange-100 text-orange-400 border-orange-400 border-r-4' : ''
                    }`}
            >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{label}</span>
            </Link>
        </li>
    );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { to: '/admin/dashboard', label: 'ダッシュボード', icon: MdOutlineDashboard },
        { to: '/admin/user-list', label: '登録ユーザー', icon: FiUsers },
        { to: '/winner', label: '当選者', icon: HiOutlineGift },
        { to: '/operation_manager', label: '運営管理者', icon: FaUserShield },
    ];

    return (
        <div
            className={`fixed  top-0 lg:top-20 left-0 z-50 lg:z-0 h-full bg-gray-50 border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } w-64 lg:translate-x-0 lg:w-64`}
        >
            <button
                className="lg:hidden p-4"
                onClick={toggleSidebar}
                aria-label="Close Sidebar"
            >
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <nav className="flex-grow px-4 py-6">
                <ul className="space-y-4">
                    {menuItems.map(({ to, label, icon }) => (
                        <NavLink key={to} to={to} label={label} icon={icon} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
