import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
import {toast} from "react-hot-toast";

export const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Login = async (email,password) => {
        if(!email || !password)
        {
            return;
        }
        else if(email === "correo@correo.com" && password === "123456")
        {
            localStorage.setItem("user",JSON.stringify({email}));
            setUser(email);
            setIsLoggedIn(true);
        }
        else{
            toast.error("Incorrect credentials, try again!");
            return;
        }
    };

    const logOut = () => {
        try {
          localStorage.removeItem("user");
          setUser(null);
          setIsLoggedIn(false);
          toast.success("Loged out!.");
          return true;
        } catch (error) {
          console.error("Error logging out:", error);
          toast.error("Error.");
          return false;
        }
      };
    
      // verifica si hay un usuario guardado en el localStorage al cargar la aplicación
      useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      }, []);
    
      return (
        <AuthContext.Provider
          value={{ user, Login, logOut, isLoggedIn}}
        >
          {children}
        </AuthContext.Provider>
      );
    };

export const useAuth = () => useContext(AuthContext);