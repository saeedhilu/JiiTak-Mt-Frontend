import Navbar from '@/components/navbar/Navbar';
import SidebarComponent from '@/components/sidebar/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar color="white" aria-label="Main navigation" />

            <div className="flex flex-1 h-96">
                <aside className="w-64  bg-gray-100 border-r border-gray-200">
                    <SidebarComponent />
                </aside>

                <main className="flex-1 p-4 overflow-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
