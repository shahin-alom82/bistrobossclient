import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import useAxiosPublic from "../contants/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(null)
      const googleProovider = new GoogleAuthProvider()
      const axiosPublic = useAxiosPublic()

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
      // Google Auth Provider
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProovider)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)


                  if (currentUser) {
                        const userInfo = { email: currentUser.email };
                        axiosPublic.post('/jwt', userInfo)
                              .then(res => {
                                    if (res.data.token) {
                                          localStorage.setItem('access-token', res.data.token)
                                    }
                              })
                  } else {
                        localStorage.removeItem('access-token')
                  }
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
            logOut,
            googleLogin
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;