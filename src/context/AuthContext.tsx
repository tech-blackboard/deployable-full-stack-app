import { createContext, useState, type ReactNode, useEffect } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<any>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<any>(() => {
        try {
            const saved = localStorage.getItem("user");
            return saved ? JSON.parse(saved) : null;
        } catch (err) {
            console.error("Invalid user in localStorage:", err);
            localStorage.removeItem("user");
            return null;
        }
    });

    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("token") || null;
    });

    const [refresh, setRefresh] = useState<string | null>(() => {
        return localStorage.getItem("refresh") || null;
    });

    // Keep user logged in on page reload
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedRefresh = localStorage.getItem("refresh");
        const savedUser = localStorage.getItem("user");

        if (savedToken) setToken(savedToken);
        if (savedRefresh) setRefresh(savedRefresh);
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    //  LOGIN FUNCTION
    const login = (userData: any, token: string, refreshToken: string) => {
        setUser(userData);
        setToken(token);
        setRefresh(refreshToken);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
        localStorage.setItem("refresh", refreshToken);
    };

   

    //  LOGOUT FUNCTION
    const logout = () => {
        setUser(null);
        setToken(null);
        setRefresh(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");

        window.location.href = "/login"; // force redirect
    };

    return (
        <AuthContext.Provider value={{ user, token, refresh, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
