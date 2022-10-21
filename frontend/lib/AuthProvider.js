import { createContext, useEffect } from "react";
import { getToken, getUserFromToken,  } from "../services/auth-services";
import { useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState();

    const logout = () => {
        setIsAuthenticated(false);
        setToken("");
        setUser(null);
        setLoading(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    const authorize = async (authToken) => {
        setToken(authToken);
        const newUser = await getUserFromToken(authToken);
        setUser(newUser);
        setIsAuthenticated(true);
        setLoading(false);
    };

    const login = async (credentials) => {
        setLoading(true);
        const newToken = await getToken(credentials);
        if (newToken) {
            authorize(newToken);
        } else {
            logout();
        }
    };

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setUser(localStorage.getItem("user"));
        if (!!user) {
            setIsAuthenticated(true);
            setLoading(false);
        }
    }, [token, user, isAuthenticated, loading]);

    const authData = {
        loading,
        isAuthenticated,
        token,
        user,
        login,
        logout,
        setLoading,
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};
