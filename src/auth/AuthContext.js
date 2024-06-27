import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    //check user logged in state on page load.
    useEffect(() => {
        let localUser = JSON.parse(localStorage.getItem("todoUser"));
        setUser(localUser);
    }, []);


    //Register user
    const registerUser = async (formData) => {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" });

        if (checkUser.ok) {
            const user = await checkUser.json();
            if (user.length > 0) {
                setMessage("user already exists");
            } else {
                const response = await fetch("http://localhost:5000/users", config);
                if (response.status === 201) {
                    const user = await response.json();
                    localStorage.setItem("todoUser", JSON.stringify(user));
                    setMessage("Registered Successfully")
                } else {
                    console.log("something went wrong");
                }
            }
        } else {
            setMessage("something went wrong, please try again");
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            message,
            registerUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;