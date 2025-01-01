import React from 'react';
import NotFoundImage from "../../assets/404.gif";
import { Button } from '@/components/ui/Button';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center space-y-6">
            <img
                src={NotFoundImage}
                alt="Page not found"
                className="max-w-md mx-auto"
            />
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Sorry, the page you are looking for does not exist
            </p>
            <Button>
            <a
                href="/"
                className="px-6 py-3 "
            >
                Go Back to Home
            </a>
            </Button>
        </div>
    );
};

export default NotFound;
