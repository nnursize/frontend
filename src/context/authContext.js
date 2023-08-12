import { createContext, useEffect, useState } from "react";
import axios from "axios";
// user bilgisine ihtiyac olunca kullanilmasi icin app in usera genel erisimi
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    ); //user yoksa null login olmamis

    const login = async (inputs)=>{
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async (inputs)=>{
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    // update localStorage, current user degisincez
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    
    //login logout fonk. ve currentUserı app icinde kullanilacak
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>   
          {children}
        </AuthContext.Provider>
    );
};