import { createContext, useState } from "react"

interface AuthContextType {
    isLoggedIn: boolean,
    token: string,
    login: (token: string) => void,
    logout: () => void
}

const initialValues: AuthContextType = {
    isLoggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token") ?? "",
    login: () => { },
    logout: () => { }
}

const AuthContext = createContext(initialValues);

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [token, setToken] = useState(localStorage.getItem("token") ?? "");

    const login = (token) => {
        localStorage.setItem("token", token)
        setIsLoggedIn(true);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false);
        setToken("");
    }

    return <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>{children}</AuthContext.Provider>
};

export { AuthProvider, AuthContext }

