import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";
import initializeFirebase from "../Components/Firebase/firebase.init"
const { useState, useEffect } = require("react")



initializeFirebase()   // initializze firebase app 
const useFirebase = () =>{
    const [user, setUser] = useState({})

    const auth = getAuth()

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            const user = userCredential.user;
           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
           
          });
    }

    const logInUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
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
          });
          return ()=>  unSubscribe
    }, [])


    return {
        user,
        registerUser, 
        logInUser,
        logOutUser
    }
}

export default useFirebase