import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Todo App</h1>

      <div className="flex items-center gap-1">
        <Link href={"/notes"}>Notes</Link>
        <SearchBar />

        <LoginBtn />
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;
