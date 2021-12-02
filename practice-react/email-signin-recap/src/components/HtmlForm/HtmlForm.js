import React, {useState} from 'react';
import './HtmlForm.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config.js'
import { updateProfile } from "firebase/auth";


const HtmlForm = () => {
    const [newUser, setNewUser] = useState(false);
    const [inputValid, setInputValid] = useState({
        emailValid: true,
        passValid: true
    });
    console.log(inputValid.emailValid, "pass", inputValid.passValid);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        error: false,
        success: false,
    });
    console.log(user);

    const handleBlur = (e) =>{
        let isFormValid;
        console.log(e.target.name, e.target.value, "dka");
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
            console.log(e.target.name, e.target.value, "dka");
            setUser(newUserInfo);
        }
    }

    // submit email, password to firebase
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if(user.email && user.password){
            initializeApp(firebaseConfig);

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
            .then((userCredential) => {
                handleUpdateUserInfo(user.name)
                console.log("user",userCredential.user);
                const userSuccess = {...user}
                console.log(userSuccess,"fuck")
                userSuccess.success = true;
                userSuccess.error = false;
                setUser(userSuccess);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, "errorMessage", errorMessage);
                const userError = {...user};
                console.log(userError,"user");
                userError.error = true;
                userError.success = false;
                setUser(userError);
            });
        }
        e.preventDefault()
    }

    // update user info
    const handleUpdateUserInfo = name =>{
        console.log(name, "check name")
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
        }).then(() => {
        // Profile updated!
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });
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
                    <input onClick={handleSubmit} className="submit-input" type="submit" value="submit" />
                    <br/>
                    {user.error && <small className="err-text"> This email already in use</small>}
                    {user.success && <small style={{color:"green"}}>User Created Successfully</small>}
                    {/* <h4 className="or-option">________________or________________</h4> */}
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