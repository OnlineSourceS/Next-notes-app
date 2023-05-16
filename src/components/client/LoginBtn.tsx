import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginBtn = () => {
  return <Link href={"/login"}>Login</Link>;
};

export default LoginBtn;
