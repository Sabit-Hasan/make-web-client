import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import googleIcon from "../../images/google.png";
import "./Login.css"
import Navbar from '../Home/Navbar/Navbar';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

  const handleLogin = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            
          const {displayName, email, photoURL} = result.user;
          const signedInUser = {name: displayName, email: email, photo: photoURL};
          setLoggedInUser(signedInUser);
          history.replace(from);

          // ...
      }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
      });
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header login-background">
          <h3>Login With</h3>
          <div className="row social-card" onClick={handleLogin}>
            <div className="col-2">
              <img src={googleIcon} alt=""/>
            </div>
            <div className="col-10">
              <span>Google Login</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;