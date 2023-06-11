import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../Firebase/firbase.config';
import useAxios from '../Hooks/useAxios';

export const authContext = createContext(null);
const auth = getAuth(app);
const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const [baseUrl] = useAxios()

    const emailPassRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPassLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateProf = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // user state observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            if (user) {
                baseUrl.post('/jwt', { email: user.email })
                    .then(res => {
                        const token = res.data.token;
                        localStorage.setItem('token', token)
                        setLoader(false)
                    })
            }

            else {
                localStorage.removeItem('token')
                setLoader(false)
            }

        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const value = {
        user,
        loader,
        emailPassRegistration,
        emailPassLogin,
        logOut,
        updateProf
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>
};

export default Auth;