import {
     createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,
     signInWithPopup,
     signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';



initializeAuthentication()
const useFirebase = () =>{

     const [user,setUser] = useState({})
     const [isLoading,setIsLoading] = useState(true)
     const [authError, setAuthError] = useState('')
     const [admin,setAdmin] = useState([])
     const auth = getAuth()

     // google sign in
     const googleSignIn = (location, history) => {
          setIsLoading(true);
          const googleProvider = new GoogleAuthProvider();
               const destination = location?.state?.from || '/';
               history.replace(destination);
          return signInWithPopup(auth, googleProvider)
            .catch(error => {
              const errorMessage = error.message;
              console.log(error);
              setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
        };


     // register an user
     const registerUser = (name, email, password,history) => {
          setIsLoading(true)
          createUserWithEmailAndPassword(auth,email, password)
               .then((result) => {
               console.log(result.user)
               const newUser = {email, displayName:name}
               setUser(newUser)

               // save user to database
               saveUser(email,name)

               // send name to firebase after creation

               updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {                    
                  }).catch((error) => {                    
                  });
               setAuthError('')
               history.push('/')
          })
          .catch((error) => {
               console.log(error.message);
               setAuthError(error.message)
               
          })
          .finally(()=>setIsLoading(false));
     }


     // login the user
     const signInUser = (email, password, location, history) =>{
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               history.replace(destination);

               setUser(result.user)
               setAuthError('')
               
          })
          .catch((error) => {
               console.log(error)
               setAuthError(error)
          })
          .finally(()=>setIsLoading(false));
     }

     // currently signed in user
     useEffect(()=>{
          onAuthStateChanged(auth, (user) => {
               if (user) {             
                    setUser(user);                 
               } else {
                    setUser({})
               }
               setIsLoading(false)
             });
     },[])

     // sign Out user
     const signOutUser = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               
             }).catch((error) => {
               
             })
             .finally(() => setIsLoading(false));
     }

     // check admin
     useEffect(() => {
        fetch(`https://polar-depths-02085.herokuapp.com/users/admin/${user.email}`)
        .then(res => res.json())
        .then(data =>{
             console.log(data.admin)
             setAdmin(data.admin)
        })
      }, [user.email])

     // save users to database
     const saveUser = (email,displayName) =>{
          const user = {email, displayName}
          fetch('https://polar-depths-02085.herokuapp.com/signed/users',{
               method:'POST',
               headers:{
                    'content-type': 'application/json'
               },
               body:JSON.stringify(user)
     })
     .then(res=> res.json())
     .then(data => {
          console.log(data)
     })

}
     return{
          user,
          authError,
          registerUser,
          signInUser,
          isLoading,
          signOutUser,
          admin,
          googleSignIn
     }

}

export default useFirebase