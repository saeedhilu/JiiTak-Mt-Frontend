import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { user } = useSelector(
        (state) => state.auth
    );
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Handle redirection if the user is authenticated
        if (user) {
            if (user.role == 'admin') {
                navigate("/admin/dashboard");

            } else {
                const fromPath = location.state?.from || "/user/home";

                navigate(fromPath);
            }
        }
    }, [user, navigate, location.state]);

    // If not authenticated, render the component
    if (!user) {
        return <Component {...rest} />;
    }

    return null;
};

export default ProtectedRoute;