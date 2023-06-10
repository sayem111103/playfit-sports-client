import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firbase.config';

export const authContext = createContext(null);
const auth = getAuth(app);
const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const emailPassRegistration = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPassLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    // user state observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setUser(user)
            setLoader(false)
        })
        return ()=> {
            return unsubscribe()
        }
    },[]) 

    const value = {
        user,
        loader,
        emailPassRegistration,
        emailPassLogin,
        logOut
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>
};

export default Auth;