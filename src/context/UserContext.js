import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export let mainContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const userRegisterInfo = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userMainLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    let unSubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log('current User inside state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () => unSubscribe ();
  },[])


  // const userAuth = user;
  const userAuth = {
    loading,
    userRegisterInfo,
    userSignIn,
    userMainLogout,
    user,
  };
  return (
    <div>
      {!loading && 
      <mainContext.Provider value={userAuth}>{children}</mainContext.Provider>}
    </div>
  );
};

export default UserContext;
