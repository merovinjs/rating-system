"use client";
import React from "react";
import { useState } from "react";

const Sigup = () => {
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
    const result = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await result.json();
    console.log(json);
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
