import React, { useState } from 'react';
import firebaseConfig from './firebase.config.js'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider   } from "firebase/auth";


initializeApp(firebaseConfig);


const AuthRecap = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const ghProvider = new GithubAuthProvider();
    const [user, setUser] = useState({});

    // Google Sign In Implemented
    const handleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            setUser(user);
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage, errorCode, email, credential);
        });
    }

    // Fb Sign In Implemented
    const handleFbSignIn = () => {
                signInWithPopup(auth, fbProvider)
                .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                setUser(user);
                console.log("user", user);
            })
            // .then(res => console.log(res))
                .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(errorMessage, errorCode, email, credential);
        });
    }

    // Github SignIn method
    const handleGhSignIn = () => {
        signInWithPopup(auth, ghProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            console.log(user);
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log(errorMessage, email);
        });
    }

    return (
        <div>
            <button onClick={handleSignIn}>google sign in</button>
            <h3>Name: {user.displayName}</h3>
            <img src={user.photoURL} alt="" />
            <br />
            <h4>42_5-2 implemented fb login</h4>
            <button onClick={handleFbSignIn}>facebook sign in</button>
            <h3>Name: {user.displayName}</h3>
            <img src={user.photoURL} alt="" />
            <br />
            <h4>42_5-3 implemented github login</h4>
            <button onClick={handleGhSignIn}>github sign in</button>
            <h3>Name: {user.displayName}</h3>
            <img src={user.photoURL} alt="" />

        </div>
    );
};

export default AuthRecap;