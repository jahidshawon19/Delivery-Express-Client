import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";
import initializeFirebase from "../Components/Firebase/firebase.init"
const { useState, useEffect } = require("react")



initializeFirebase()   // initializze firebase app 
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true) // by default set it true
    const [authError, setAuthError] = useState('')
    const auth = getAuth()

    const registerUser = (email, password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
           
          })
          .catch((error) => {
            setAuthError(error.message);
           
          })
          .finally(()=> setLoading(false));
    }

    const logInUser = (email, password, location, history) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         
          const destination = location?.state?.from || '/'
          history.replace(destination)
          setAuthError('')
         
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=> setLoading(false));
    }

    const logOutUser = () =>{
        signOut(auth)
        .then(()=>{

        })
        .catch((error) =>{

        })
    }

    // observer user state

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {         
               setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
          });
          return ()=>  unSubscribe
    }, [])


    return {
        user,
        loading,
        authError,
        registerUser, 
        logInUser,
        logOutUser
    }
}

export default useFirebase