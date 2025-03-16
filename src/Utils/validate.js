

const checkValidData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Basic password validation: at least 8 characters
    const isPasswordValid = password && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(password);;

    if (!isEmailValid) {
        return "Invalid email";
    }

    if (!isPasswordValid) {
        return "Invalid password";
    }

    return null;
}

export default checkValidData;