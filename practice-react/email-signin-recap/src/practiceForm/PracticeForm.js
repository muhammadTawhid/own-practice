import React, { useState } from 'react';
import './PracticeForm.css'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../components/HtmlForm/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

initializeApp(firebaseConfig);

const PracticeForm = () => {
    const [infoValid, setInfoValid] = useState({
        nameValid: true,
        emailValid: true,
        passwordValid: true,
    });

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        newUser: true,
        signUpError: false,
        signUpSuccess: false,
        signInSuccess: false,
        
    });

    // form validation
    const handleInputChange = (e) =>{
        let inputValid;

        if(e.target.name === "name") {
            const isNameValid = /^[a-z]+$/g.test(e.target.value);
            inputValid = isNameValid;
            // const isNameValid = {...infoValid};
            // isNameValid.nameValid = nameValid
            // setInfoValid(isNameValid);
            handleFieldValidError("nameValid", isNameValid);
        }
        if(e.target.name === "email"){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            inputValid = isEmailValid;
            handleFieldValidError("emailValid", isEmailValid);
        }
        if(e.target.name === "password"){
            const isPasswordValid = e.target.value.length > 6 && /\d+/g.test(e.target.value);
            inputValid = isPasswordValid;
            handleFieldValidError("passwordValid", isPasswordValid);
        }

        if (inputValid) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    // handling field valid error
    const handleFieldValidError = (fieldValid, isFieldValid) =>{
        const isNewInfoValid = {...infoValid};
            isNewInfoValid[fieldValid] = isFieldValid;
            setInfoValid(isNewInfoValid);
    }

    // sign up , sign in form toggle
    const handleSignUpFormToggle = () =>{
        const signUpNewUser = {...user};
        signUpNewUser.newUser = !user.newUser;
        signUpNewUser.signUpSuccess = false;
        signUpNewUser.signUpError = false;
        signUpNewUser.signInSuccess = false;
        setUser(signUpNewUser);
    }

    // user sign up by email
    const handleSignUp = (e) =>{
        if (user.newUser && user.email && user.password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const newSignUpSuccess = {...user}
            newSignUpSuccess.signUpSuccess = true;
               newSignUpSuccess.signInSuccess = false;
               newSignUpSuccess.signUpError = false;
               setUser(newSignUpSuccess);

            updateUserInfo(user.name)
            // const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            const newSignUpError = {...user}
            newSignUpError.signUpError = true;
               newSignUpError.signInSuccess = false;
               newSignUpError.signUpSuccess = false;
               setUser(newSignUpError);
        });
        }
        e.preventDefault();
    }


    // user others information update to firebase
    const updateUserInfo = (name) =>{
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        }).catch((error) => {
        console.log(error);
        });
    }

    // user sign in email & password
    const handleSignIn = (e) =>{
        if(user.email && user.password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
               const newSignInSuccess = {...user};
               newSignInSuccess.signInSuccess = true;
               newSignInSuccess.signUpSuccess = false;
               newSignInSuccess.signUpError = false;
               setUser(newSignInSuccess);
                // const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
        e.preventDefault();
    }
    return (
        <div>
            <div className="form-box">
                <h2>{user.newUser ? "Sign Up" : "Sign In"}</h2>
                <form action="">
                   <div className="input-div">
                        { user.newUser && <label htmlFor="">Name</label> }
                        { user.newUser && <input onChange={handleInputChange} type="text" required name="name" /> }
                        {infoValid.nameValid === true ? "" : <small className="err-message">Name should contains lowercase</small>}
                   </div>

                    <div className="input-div">
                        <label >Email</label>
                        <input onChange={handleInputChange} type="text" required name="email" />
                        {infoValid.emailValid === true ? "" : <small className="err-message">Invalid Email Address</small>}
                    </div>


                    <div className="input-div">
                        <label htmlFor="">Password</label>
                        <input onChange={handleInputChange} type="text" required name="password" />
                        {infoValid.passwordValid === true ? "" : <small className="err-message">More than 6 character with number</small>}
                    </div>

                    {user.signUpSuccess && <small style={{color:"green"}}>User created successfully</small>}
                    {user.signInSuccess && <small style={{color:"green"}}>User signed in successfully</small>}
                    {user.signUpError && <small className="err-message">This email already in used</small>}
                    {user.newUser ? <button onClick={handleSignUp} type="submit" className="submit-btn">Sign Up</button> 
                    : <button onClick={handleSignIn} type="submit" className="submit-btn">Sign In</button>}
                </form>
                <p>{user.newUser ? "Already" : "Don't"} have an account ? <button className="toggle-btn" onClick={handleSignUpFormToggle}>{user.newUser ? "Sign in" : "Sign up"}</button></p>
                <h5><span>Or</span></h5>
                <button className="submit-btn">sign {user.newUser ? "up" : "in"} with google</button>
                <br/>
                <button className="submit-btn">sign {user.newUser ? "up" :"in"} with facebook</button>
            </div>
        </div>
    );
};

export default PracticeForm;