import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";


// authentication
export const AuthContext=createContext();
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createUser=(email,password)=>{
    // creating new user
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
      // getting the user details
      setUser(currentUser)
      setLoading(false)
      return ()=>{return unsubscribe}
    })
  },[])

  // login using google
  const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

// login with email and password
  const login=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logout=()=>{
    return signOut(auth);
  }

  const authInfo={
    // sending user detials
    user,
    loading,
    // sending the createUser function to sign Up
    createUser,
    loginWithGoogle,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {/* sending the authInfo function */}
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider