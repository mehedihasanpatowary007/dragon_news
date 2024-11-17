import { useEffect, useState } from "react";
import { AuthInfoContext } from "../Context/AuthInfo";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=> {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const value = {
        user, setUser, createUser, logOut, login, loading
    }
    return (
        <AuthInfoContext.Provider value={value}>
            {children}
        </AuthInfoContext.Provider>
    );
};

export default AuthProvider;