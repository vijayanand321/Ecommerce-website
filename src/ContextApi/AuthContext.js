import React,{createContext, useEffect, useState} from 'react'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../Firebase/firebase';

export let UserAuthcontext=createContext();
export const AuthContext = ({children}) => {
 let [user , setuser]=useState(null);

 useEffect(()=>{
    onAuthStateChanged(auth,userInfo=>{
        if(userInfo){
            setuser(userInfo);
        }else{
            setuser(null)
        }
    })
 },[]);

  return <UserAuthcontext.Provider value={user}>
        {children}
  </UserAuthcontext.Provider>
}

export default AuthContext;
