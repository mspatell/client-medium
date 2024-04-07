import { ReactNode, createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


interface AuthContexttype {
       authenticated:boolean,
       login:(token:string)=>void,
       logout:()=>void
}


export const useAuth = ()=>{
    return useContext(AuthContext);
}

const AuthContext=createContext<AuthContexttype>({} as AuthContexttype);

export const AuthContextProvider=({children}:{children:ReactNode})=>{
    const [authenticated,setauthenticated]=useState(!!localStorage.getItem('token'));
    const navigate=useNavigate();

    const login=(token:string)=>{
          localStorage.setItem('token',token);
          setauthenticated(true)
    }

    const logout=()=>{
        localStorage.removeItem('token');
        setauthenticated(false);
        toast.success("logged out successfully",{
            duration:3000
        })
        navigate('/')

    }

    return ( <AuthContext.Provider value={{authenticated,login,logout}}>
    {children}
    </AuthContext.Provider>
    )
}