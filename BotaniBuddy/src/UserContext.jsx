import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  console.log(userID, "userID line 11");

  const login = (user) => {
    setUserID(user.user_id);
    console.log(setUserID(user.user_id), "setusreid line 15");
  };

  const logout = () => {
    setUserID("");
  };

  return (
    <UserContext.Provider value={{ userID, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
