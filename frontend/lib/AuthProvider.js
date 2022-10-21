import { createContext, useEffect } from "react";
import { getToken, getUserFromToken } from "../services/auth-services";
import { useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState();

    const logout = () => {
        setIsAuthenticated(false);
        setToken("");
        setUser(null);
        setLoading(false);
    }

    const login = async (credentials) => {
        const newToken = await getToken(credentials);
        if (newToken) {
            setToken(newToken);
            const newUser = await getUserFromToken(newToken);
            setUser(newUser);
            setIsAuthenticated(true);
            setLoading(false);
        } else {
            logout();
        }
    }

    const authData = {
        loading,
        isAuthenticated,
        token,
        user,
        login,
        logout,
        setLoading
    }

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setUser(localStorage.getItem("user"));
        if (!!user) {
            setLoading(false);
            setIsAuthenticated(true);
        } else {
            setLoading(false);
        }
        console.log(authData);
    }, [])

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

