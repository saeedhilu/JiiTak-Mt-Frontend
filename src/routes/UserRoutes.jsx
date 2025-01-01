
// import LoginPage from "@/pages/auth/Login";
// import PasswordReset from "@/pages/auth/PasswordResetEmail";
// import PasswordResetPage from "@/pages/auth/PasswordResetPage";
// import Home from "@/pages/users/Home";

// const userRoutes = [
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/user/login',
//     element: <LoginPage />,
//   },
//   {
//     path: 'reset-password',
//     element: <PasswordReset />
//   },
//   {
//     path: 'reset-password/:uid',
//     element: <PasswordResetPage />
//   }
// ];

// export default userRoutes;
import AdminLayout from "@/components/layouts/adminLayout/AdminLayout";

import PasswordReset from "@/pages/auth/PasswordResetEmail";
import PasswordResetPage from "@/pages/auth/PasswordResetPage";
import NotFound from "@/pages/notFound/PageNotFound";
import { Routes, Route } from "react-router-dom";

const AdminRoutes =() =>{
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
      
      
      
      </Route>  
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AdminRoutes;