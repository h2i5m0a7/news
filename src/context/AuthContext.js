import { useEffect,useState } from "react";
import { createContext } from "react";
import axios from "axios"

export const AuthContext = createContext();
export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]= useState(JSON.parse(localStorage.getItem("user"))|| null)

    const Login = async(inputs)=>{
        const res = await axios.post("http://192.168.1.90:8800/app/login",inputs)
        setCurrentUser(res.data)
    }
    const logout = async(inputs)=>{
        await axios.post("http://192.168.1.90:8800/app/logout")
        setCurrentUser(null)
    }
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    })
    return(
        <AuthContext.Provider value={{Login,currentUser,logout}}>{children}</AuthContext.Provider>
    )
}