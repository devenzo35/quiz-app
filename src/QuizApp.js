import React, { useState } from "react";
import AppRouter from "./routers/AppRouter";

export const userInfo = React.createContext({});

export const QuizApp = () => {
  const [user, setUser] = useState({
    name:sessionStorage.getItem('username'),
    score:null,
    time:0,
    isLoged: false
  })
  
  
  return (
    <userInfo.Provider value={{user, setUser}}>
      <AppRouter />
    </userInfo.Provider>
  );
};