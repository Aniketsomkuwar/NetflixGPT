import React from 'react';
import logo from '../Assets/MainLogo.jpg'

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <img
                src={logo}
                alt="Netflix Logo"
                className="w-24 mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">Oops, something went wrong...</h1>
            <p className="text-lg mb-6 text-gray-400">
                We're experiencing a technical issue. Please try again later.
            </p>
            <div className="flex space-x-4">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => window.location.href = '/login'}
                >
                    Go to Login Page
                </button>

            </div>
        </div>
    );
};

export default ErrorPage;