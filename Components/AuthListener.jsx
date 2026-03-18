"use client";
import { setUser } from "@/app/Features/Auth/AuthSlice";
import { auth } from "@/app/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthListener = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('AUthlistener mounted')
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        console.log('Auth state changed:', firebaseUser)
      if (firebaseUser) {
        dispatch(setUser({ uid: firebaseUser.uid, email: firebaseUser.email }));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, []);
  return children;
};

export default AuthListener;
