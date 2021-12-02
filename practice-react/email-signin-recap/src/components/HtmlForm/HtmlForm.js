import './HtmlForm.css';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config.js'
import { updateProfile } from "firebase/auth";


const HtmlForm = () => {
    const [newUser, setNewUser] = useState(false);
    const [inputValid, setInputValid] = useState({
        emailValid: true,
        passValid: true
    });
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        error: false,
        signUpSuccess: false,
        signInSuccess: false,
    });

    const handleBlur = (e) =>{
        let isFormValid;
        if(e.target.name === "name"){
            isFormValid = true;
        }
        // email validation
       if(e.target.name === "email"){
         let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
        //  invalid email input errorMessage
         const newInputValid = {...inputValid};
         newInputValid["emailValid"] = isEmailValid;
         setInputValid(newInputValid)
         isFormValid = isEmailValid;

       }
        //password validation
       if(e.target.name === "password"){
         let isPasswordValid = e.target.value.length >= 6 && /\d/.test(e.target.value);
        //  invalid password input errorMessage
         const newInputValid = {...inputValid};
         newInputValid["passValid"] = isPasswordValid;
         setInputValid(newInputValid);
         isFormValid = isPasswordValid;
       }
        // form validation
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // sign up with email, password & name
    const handleSignUp = (e) => {
        if(user.email && user.password){
            initializeApp(firebaseConfig);

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
            .then((userCredential) => {
                handleUpdateUserInfo(user.name)
                const userSignUpSuccess = {...user}
                userSignUpSuccess.signUpSuccess = true;
                userSignUpSuccess.signInSuccess = false;
                userSignUpSuccess.error = false;
                setUser(userSignUpSuccess);
            })
            .catch((error) => {
                const userError = {...user};
                userError.error = true;
                userError.signUpSuccess = false;
                userError.signInSuccess = false;
                setUser(userError);
            });
        }
        e.preventDefault()
    }

    // update user name & others info
    const handleUpdateUserInfo = name => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
        }).then(() => {

        }).catch((error) => {

        });
    }

    // sign in with email & password
    const handleSignIn = (e) =>{
        if(user.email && user.password){
            initializeApp(firebaseConfig);
            const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userSignInSuccess = {...user};
            userSignInSuccess.signInSuccess = true;
            userSignInSuccess.signUpSuccess = false;
            userSignInSuccess.error = false;
            setUser(userSignInSuccess);
            // const user = userCredential.user;
        })
        .catch((error) => {

        });
        }
        e.preventDefault()
    }
    return (
       <div>
            <div className="login-box2">
            <h2>{newUser ? "Sign Up" : "Sign In"}</h2>
                <form>
                    <div className="user-box2">
                        {newUser && <label>Username</label>}
                        {newUser && <input onChange={handleBlur} type="text" name="name" id="" required />}
                    </div>
                    <div className="user-box2">
                        <label>email</label>
                        <input onChange={handleBlur} type="text" name="email" id=""  required />
                        {inputValid.emailValid === true ? "" : <small className="err-text">invalid email</small>}
                    </div>
                    <div className="user-box2">
                        <label>password</label>
                        <input onChange={handleBlur} type="password" name="password" id="" required />
                        {inputValid.passValid === true ? "" : <small className="err-text">Password must have at least 8 characters with number</small>}
                    </div>
                    <input onClick={() => setNewUser(!newUser)} type="checkbox" />Sign Up
                    {newUser ? <input onClick={handleSignUp} className="submit-input" type="submit" value="Sign Up" />
                    : <input onClick={handleSignIn} className="submit-input" type="submit" value="Sign In" />}
                    <br/>
                    {user.error && <small className="err-text"> This email already in use</small>}
                    {user.signUpSuccess && <small style={{color:"green"}}>User Created Successfully</small>}
                    {user.signInSuccess && <small style={{color:"green"}}>User Sign In Successfully</small>}
                </form>
                    <h4 className="or-option"><span className="or-style">Or</span></h4>
                    <button className="signin-btn">Sign in with google</button>
                    <br/>
                    <button className="signin-btn">Sign in with facebook</button>
            </div>
                <div>
                
                </div>
       </div>

      
    );
};

export default HtmlForm;



// while(noSuccess){
//     tryAgain();

//     if(Dead)
//         break;
// }