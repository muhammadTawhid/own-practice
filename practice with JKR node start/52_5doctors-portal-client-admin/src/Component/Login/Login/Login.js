// import React, { useContext, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import firebaseConfig from './firebase.config';
// import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
// import { UserContext } from '../../../App';


// initializeApp(firebaseConfig);


// const Login = () => {

//   const history = useNavigate()
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: "/" } };

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//   // var provider = new firebase.auth.GoogleAuthProvider();
//   const handleGoogleSignIN = () => {
//     // firebase.auth()
//     //   .signInWithPopup(provider)
//     //   .then((result) => {
//     //     const loggedInUser = result.user;
//     //     setLoggedInUser(loggedInUser);
//     //     history.replace(from);
//     //   }).catch((error) => {
//     //     console.log(error)
//     //   });

//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // const credential = GoogleAuthProvider.credentialFromResult(result);
//         // const token = credential.accessToken;
//         // const user = result.user;

//         const loggedInUser = result.user;
//         setLoggedInUser(loggedInUser);
//         history.replace(from);
//       }).catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div>
//       <HeaderNavbar/>
//       <div className="d-flex justify-content-center mt-5   ">
//         <div className=" shadow">
//           <form style={{ maxWidth: "300px" }}>
//             <input className="form-control" type="text" name="name" placeholder="Your Name" required />
//             <br />
//             <input className="form-control" type="text" name="email" placeholder="Your Email" required />
//             <br />
//             <input className="form-control" type="password" name="password" placeholder="Your Password" required />
//             <br />
//             <input type="checkbox" name="switchForm" id="switchForm" />
//             <label htmlFor="switchForm"> Create new account</label>
//             <br />
//           </form>
//           <div className="text-center">
//             <button className="btn-primary text-center" type="submit">Submit</button>
//             <br />
//             <button className="btn-primary mt-1" onClick={handleGoogleSignIN}> Sign in with google</button>
//           </div>
//         </div>
//       </div>
//       <div className="text-center mt-3">
//         <h4>Logged in by: {loggedInUser.email}</h4>
//       </div>
//     </div>
//   );
// };

// export default Login;













// import React, { useContext } from 'react';
// import  firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from '../../../App';
// import { useNavigate, useLocation } from 'react-router-dom';
// import LoginBg from '../../../images/login.png';

// const Login = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const history = useNavigate();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: "/" } };

//   if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   const handleGoogleSignIn = () => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       const { displayName, email } = result.user;
//       const signedInUser = { name: displayName, email }
//       setLoggedInUser(signedInUser);
//       storeAuthToken();
//     }).catch(function (error) {
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
//   }

//   const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken( true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         // Handle error
//       });
//   }










import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import firebaseConfig from './firebase.config';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import { UserContext } from '../../../App';
import LoginBg from '../../../images/login.png';



const Login = () => {

  const history = useNavigate()
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

  const handleGoogleSignIn = () => {
    // firebase.auth()
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     const loggedInUser = result.user;
    //     setLoggedInUser(loggedInUser);
    //     history.replace(from);
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;

        const newLoggedInUser = result.user;
        setLoggedInUser(newLoggedInUser);
        // history.replace(from);
      }).catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className="login-page container">
      <HeaderNavbar/>
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn brand-btn" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;