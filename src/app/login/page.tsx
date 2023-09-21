"use client";
import { fetchPost } from "@/customhooks/fetchhook";
import { User } from "@prisma/client";
import React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Deneme from "@/components/Deneme";
import { setLocalStorage } from "../../utily/localStorage";
const Login = () => {
  const [showdeneme, setShowDeneme] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await fetchPost<User>("/api/login", {
        email,
        password,
      } as User);
      console.log("result", result);
      if (result && result.id) {
        setLocalStorage("token", result.token);
        router.push("/home");
      } else {
        setShowDeneme(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePassword} />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
      {showdeneme ? <Deneme /> : null}
    </>
  );
};

export default Login;
