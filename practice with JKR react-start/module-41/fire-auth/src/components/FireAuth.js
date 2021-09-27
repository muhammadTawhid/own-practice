import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const app = initializeApp(firebaseConfig);

const FireAuth = () => {

    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        img: "",
    })
    console.log(user)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const signInUser ={
                isSignIn: true,
                name: displayName,
                email: email,
                img: photoURL,
            }
            setUser(signInUser);
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(res => {
            const signOutUser = {
                isSignIn: false,
                name: "",
                email: "",
                img: "",
            }
            setUser(signOutUser)
        })
        .catch(err => {
            console.log("err", err.message);
        })

    }


    return (
        <div>
            {
                user.isSignIn ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>google sign in</button>
            }
            {
                user.isSignIn &&
                <div>
                    <p>Welcome, {user.name}</p>
                    <p>You're login by: {user.email}</p>
                    <img style={{width:"25%"}} src={user.img} alt="" />
                </div>
            }
        </div>
    );
};

export default FireAuth;