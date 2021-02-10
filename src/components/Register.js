import React, { useContext, useState } from "react";
import { userInfo } from "../QuizApp";
import { Link } from "react-router-dom";
import { firebase, googleProvider } from "../firebase/firebaseConfig";
export const Register = () => {
  const { user, setUser } = useContext(userInfo);

  const handleOnChange = (e) => {
    sessionStorage.setItem("username", e.target.value);

    setUser((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const handleRegister = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        if (result) {
          localStorage.setItem("isLoged", true);
          setUser((state) => ({
            ...state,
            isLoged: localStorage.getItem("isLoged"),
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isLoged = localStorage.getItem("isLoged");
  return (
    <div className="register_screen">
      <form>
        <h1>Welcome Mr. {user.name}!</h1>
        <input
          onChange={handleOnChange}
          autoComplete="off"
          required
          type="text"
          name="name"
          placeholder="Put your name"
          value={user.name}
        ></input>

        {user.name && <Link to="/home">NEXT</Link>}
        <div className="google-btn" onClick={handleRegister}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <p>
          Sign up with Google if you want to see the score list and save your
          score{" "}
        </p>
      </form>
    </div>
  );
};
