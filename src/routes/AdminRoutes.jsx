import Dashboard from "@/pages/admin/Dashboard";
import UserList from "@/pages/admin/UserList";


const AdminRoutes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />, // Admin Dashboard
  },
  {
    path: '/admin/user-list',
    element: <UserList/>, // Admin Dashboard
  },
  
];

export default AdminRoutes;
