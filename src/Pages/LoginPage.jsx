import React, { useState } from 'react';
import BgImage from '../Assets/BgImage.jpg';
import { Formik } from 'formik';

const LoginPage = () => {


    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <div
            className="bg-gray-500 text-white justify-center flex items-center h-screen"
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* <div className=" bg-opacity-70 absolute inset-0"></div> */}

            <form
                action=""
                className="w-full max-w-sm p-8 rounded-md text-white bg-zinc-900/90 bg-opacity-30 relative z-10 "
            >
                <h2 className="text-2xl font-semibold mb-6 text-left">{isSignInForm ? "Sign in" : "Sign Up"}</h2>
                {!isSignInForm && <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                <div className='text-center p-5'>OR</div>
                {isSignInForm && <div className="text-center">
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                        Forgot Password?
                    </a>
                </div>}
                <div className="mt-5">
                    {isSignInForm ? " New to Netflix? " : " Already Have an Account? "}
                    <button className="font-bold cursor-pointer text-red-600" onClick={() => toggleSignInForm()}>
                        {isSignInForm ? "Sign up now" : "Sign in now"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;