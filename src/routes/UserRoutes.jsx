
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
import UserLayout from "@/components/layouts/userLayout/UserLayout";

import PasswordReset from "@/pages/auth/PasswordResetEmail";
import PasswordResetPage from "@/pages/auth/PasswordResetPage";
import NotFound from "@/pages/notFound/PageNotFound";
import Home from "@/pages/users/Home";
import { Routes, Route } from "react-router-dom";

const AdminRoutes =() =>{
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
      
        <Route path="home" element={<Home/>}/>
      
      </Route>  
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default AdminRoutes;