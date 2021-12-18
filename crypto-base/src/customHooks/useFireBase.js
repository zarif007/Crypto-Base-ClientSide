import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Components/Authentication/FireBase/firebase.init';



initializeAuthentication();

const useFireBase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {} )
            .finally(() => setIsLoading(false))
    }

    // user state changing observer  
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            if(user) 
                setUser(user);
            else 
                setUser({});
            
            setIsLoading(false)
        })

        return () => unSubscribe;
    } ,[])


    return {
        user, 
        setUser,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading,
    }
}


export default useFireBase;