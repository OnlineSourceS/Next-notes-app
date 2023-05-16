"use client";
import React, { ReactNode, useState } from "react";
import UserContext from "./context";

interface Props {
  children: React.ReactNode;
}
function ContextProvider({ children }: Props): JSX.Element {
  const [User, setUser] = useState({});
  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
