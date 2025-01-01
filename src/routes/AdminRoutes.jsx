// import Dashboard from "@/pages/admin/Dashboard";
// import UserList from "@/pages/admin/UserList";


// const AdminRoutes = [
//   {
//     path: '/admin/dashboard',
//     element: <Dashboard />,
//   },
//   {
//     path: '/admin/user-list',
//     element: <UserList/>, 
//   },
  
// ];

// export default AdminRoutes;

import AdminLayout from "@/components/layouts/adminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import UserList from "@/pages/admin/UserList";
import NotFound from "@/pages/notFound/PageNotFound";
import { Routes, Route } from "react-router-dom";

const AdminRoutes =() =>{
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-list" element={<UserList />} />
      </Route>  
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AdminRoutes;