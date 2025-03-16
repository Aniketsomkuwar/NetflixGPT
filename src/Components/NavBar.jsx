import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';


const NavBar = () => {
    const user = useSelector((store) => store.user);


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };

    return (
        <nav className="px-4 pb-5 flex justify-between items-center bg-gradient-to-b from-black via-black to-transparent absolute w-full z-30">
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png"
                    alt="Netflix Logo"
                    className="w-20 mr-2"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1024px-ChatGPT-Logo.svg.png"
                    alt="ChatGPT Logo"
                    className="w-10"
                />
            </div>

            {/* Conditional Search Bar and User Info Section */}
            {user && (
                <div className="flex items-center space-x-4 flex-grow justify-end">
                    {/* Search Bar */}
                    <div className="flex items-center flex-grow mx-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-zinc-500 text-white p-2 rounded-md w-full focus:outline-none"
                        />
                    </div>

                    {/* User Info Section */}
                    <div className="flex items-center space-x-4">
                        <div className="text-white font-semibold">{user?.email || 'Username'}</div>
                        <button
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleSignOut}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;