/* eslint-disable react/prop-types */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const signInWithgoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth',currentUser);
      setUser(currentUser);
      if(currentUser){
        axios.post(`http://localhost:5000/authication`,{
          email:currentUser.email
        }).then(data=>{
          if(data.data){
            localStorage.setItem('access-token',data?.data?.token)
            setLoading(false);

          }
        })
      } else{
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    });
    return () => {
      return unScribe();
    };
  }, []);

  const authInfo = {
    createUser,
    Login,
    SignOut,
    signInWithgoogle,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
 