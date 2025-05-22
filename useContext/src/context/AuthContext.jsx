import React, { Children } from "react";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
import {toast} from "react-hot-toast";

export const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Login = async (email,password) => {
        if(!email || !password)
        {
            toast.error("Please, fill the fields!")
            return;
        }
        else if(email == "correo@correo.com" && password == "123456")
        {
            localStorage.setItem("user",JSON.stringify({email}));
            setUser(email);
            setIsLoggedIn(true);

            toast.success("Log in successfully!");
        }
        else{
            toast.error("Incorrect credentials, try again!");
        }
    };

    const logOut = () => {
        try {
          localStorage.removeItem("user");
          setUser(null);
          setIsLoggedIn(false);
          toast.success("Sesión cerrada.");
          return true;
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
          toast.error("Error al cerrar sesión.");
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