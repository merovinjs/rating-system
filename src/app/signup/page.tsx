"use client";
import { fetchPost } from "@/customhooks/fetchhook";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import NotFound from "./not-found";

const Sigup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await fetchPost<User>("/api/posts", {
        name,
        email,
        password,
      } as User);

      if (result && result.id) {
        router.push("/login");
        console.log(result);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <form>
      <input onChange={handleName} type="text" placeholder="name" />
      <input onChange={handleEmail} type="text" placeholder="email" />
      <input onChange={handlePassword} type="password" placeholder="password" />
      <button onClick={handleSubmit} type="submit">
        Signup
      </button>
    </form>
  );
};

export default Sigup;
