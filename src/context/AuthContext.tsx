import { createContext, useState, type ReactNode } from "react";
interface AuthProviderPropes {
  children:ReactNode, 
}
export const AuthContext=createContext<any>(null);
export default function AuthProvider({ children }: AuthProviderPropes){

    const[user,setUser]=useState<any>(
        JSON.parse(localStorage.getItem("user")||"null"));

        const login=(userData:any,token:string)=>{
            localStorage.setItem("token",token);
            localStorage.setItem("user",JSON.stringify(userData));
            setUser(userData)

        };

        const logout=()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
            window.location.href = "/Login";
        };
    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}