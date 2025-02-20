import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(null)


      // Create User
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      // Login User
      const loginUser = (email, password) => {
            setLoading(true)
           return signInWithEmailAndPassword(auth, email, password)
      }
      // Log Out
      const logOut = () => {
            setLoading(true)
            signOut(auth)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  console.log('current User', currentUser)
                  setLoading(false)
            })
            return () => {
                  return unsubscribe()
            }
      }, [])

      const authInfo = {
            user,
            loading,
            createUser,
            loginUser,
            logOut
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;