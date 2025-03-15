import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-zinc-600 p-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png"
                    alt="Netflix Logo"
                    className="h-8 mr-2" // Adjusted size and spacing
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1024px-ChatGPT-Logo.svg.png"
                    alt="ChatGPT Logo"
                    className="h-8" // Adjusted size
                />
            </div>

            {/* Search Bar (Optional) */}
            <div className="flex items-center flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-zinc-500 text-white p-2 rounded-md w-full focus:outline-none" // Styled search bar
                />
            </div>

            {/* User Info Section */}
            <div className="flex items-center space-x-4">
                <div className="text-white font-semibold">User Name</div>
            </div>
        </nav>
    );
};

export default NavBar;