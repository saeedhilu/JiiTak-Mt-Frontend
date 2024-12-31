import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className="user-layout ">
            <div className="navbar-container h-20">
                <Navbar /> {/* Render Navbar */}
            </div>
            <div className=" ">
                <Outlet /> {/* Render the child routes here */}
            </div>
        </div>
    );
};

export default UserLayout;
