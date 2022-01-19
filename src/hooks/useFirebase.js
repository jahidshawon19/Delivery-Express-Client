import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import initializeFirebase from "../Components/Firebase/firebase.init"
const { useState, useEffect } = require("react")



initializeFirebase()   // initializze firebase app 
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true) // by default set it true
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()

    const registerUser = (email, password, name, history) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            const newUser = {email, displayName: name}
            setUser(newUser)
            //save user to the database 
            saveUserDatabase(email, name)

            updateProfile(auth.currentUser, {
              displayName:name 
            }).then(()=>{

            }).catch((error)=>{

            });
            history.replace('/')
           
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


    // save user to the database 
    const saveUserDatabase = (email, displayName) =>{
        const user = {email, displayName}
        fetch('https://powerful-badlands-74288.herokuapp.com/users', {
          method:'POST',
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
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


    useEffect(()=>{
      fetch(`https://powerful-badlands-74288.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])


    return {
        user,
        loading,
        authError,
        admin,
        registerUser, 
        logInUser,
        logOutUser
    }
}

export default useFirebase