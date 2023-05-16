"use client";
import React from "react";

const LogoutBtn = () => {
  const handleLogout = (e: any) => {
    console.log("logged out hogaya");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
