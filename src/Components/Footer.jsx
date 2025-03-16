import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white p-4 text-center ">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Aniket Somkuwar. All rights reserved.</p>
                <div className="mt-2">
                    <a
                        href="https://github.com/Aniketsomkuwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white mx-2"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://github.com/Aniketsomkuwar/NetflixGPT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-white mx-2 font-bold "
                    >
                        NetflixGPT Project Code
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aniketsomkuwar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white mx-2"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;