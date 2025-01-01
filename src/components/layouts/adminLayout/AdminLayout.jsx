import Navbar from '@/components/navbar/Navbar';
import SidebarComponent from '@/components/sidebar/Sidebar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from "lucide-react";

const AdminLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    return (
        <div className="h-screen flex flex-col">
            <Navbar color="white" aria-label="Main navigation" />

            <div className="flex flex-1 relative">
                <div className='lg:w-64'>
                <SidebarComponent isOpen={showSidebar} toggleSidebar={toggleSidebar} />

                </div>

                {!showSidebar && (
                    <div className="lg:hidden  absolute top-4 left-4 z-50">
                    <button
                        onClick={toggleSidebar}
                        aria-label="Toggle Sidebar"
                        className="p-2 bg-white rounded-md shadow"
                    >
                        <Menu size={24} />
                    </button>
                </div>
                )}
                

                {showSidebar && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <main className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;







// import Navbar from '@/components/navbar/Navbar';
// import SidebarComponent from '@/components/sidebar/Sidebar';
// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Menu } from "lucide-react";

// const AdminLayout = () => {
//     const [showSidebar, setShowSidebar] = useState(false)
    
//     const handleShowSidebar =() =>{
//         setShowSidebar((pre) => !pre)
//         console.log('====================================');
//     console.log('Show sidebar is :', showSidebar);
//     console.log('====================================');
//     }
//     return (
//         <div className="h-screen flex flex-col">
//             <Navbar color="white" aria-label="Main navigation" />

//             <div className="flex flex-1 h-96">
//                 <aside className="w-64 hidden lg:flex  bg-gray-100 border-r border-gray-200">
//                     <SidebarComponent />
//                 </aside>
                
//                 <aside className='lg:hidden p-2 absolute z-50'>
//                     <Menu onClick={handleShowSidebar} size={24} />
//                 </aside>

//                 <main className="flex-1  p-4 overflow-auto">
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminLayout;
