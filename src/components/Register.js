import React, { useContext } from "react";
import { userInfo } from "../QuizApp";
import { Link } from "react-router-dom";
export const Register = () => {
  const { user, setUser } = useContext(userInfo);

  const handleOnChange = (e) => {
    sessionStorage.setItem("username", e.target.value);

    setUser((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

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
        ></input>
        {user.name && <Link to="/home">NEXT</Link>}
      </form>
    </div>
  );
};
