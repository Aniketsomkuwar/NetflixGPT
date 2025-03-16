import React, { useRef, useState } from "react";
import BgImage from "../Assets/BgImage.jpg";
import checkValidData from "../Utils/Validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, signOut
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushUserData } from "../Utils/ReduxSlice/userSlice";

const LoginPage = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        //signin and signup logic.

        if (isSignInForm) {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    navigate("/")
                    // after successful Login or signup
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " -- " + errorMessage);
                });
        } else {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value,
                    }).then(() => {
                        navigate("/")
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(pushUserData({ uid: uid, email: email, displayName: displayName }));

                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        console.log(error);

                        // ...
                    });
                    // after successful Login or signup
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " -- " + errorMessage);
                    // ..
                });
        }
    };
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };
    return (
        <div
            className=" text-white justify-center flex items-center h-screen"
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* <div className=" bg-opacity-70 absolute inset-0"></div> */}

            <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className="w-full max-w-sm p-8 rounded-md text-white bg-zinc-900/90 bg-opacity-30 relative z-10 "
            >
                <h2 className="text-2xl font-semibold mb-6 text-left">
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </h2>
                {!isSignInForm && (
                    <div className="mb-4">
                        <input
                            ref={userName}
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <input
                        ref={email}
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-2">
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-4 border rounded bg-zinc-700 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="text-red-500 mb-5">{errorMessage}</div>
                <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleButtonClick()}
                >
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                <div className="text-center p-5">OR</div>
                {isSignInForm && (
                    <div className="text-center">
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                            Forgot Password?
                        </a>
                    </div>
                )}
                <div className="mt-5">
                    {isSignInForm ? " New to Netflix? " : " Already Have an Account? "}
                    <button
                        className="font-bold cursor-pointer text-red-600"
                        onClick={() => toggleSignInForm()}
                    >
                        {isSignInForm ? "Sign up now" : "Sign in now"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
