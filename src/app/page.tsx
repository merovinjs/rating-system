"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { setUser } from "../store/actions/user";

const Index = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setUser(name, email, password));
  };

  return (
    <div className=" bg-slate-700 text-white p-10 rounded-md m-10  ">
      <h1>Rating System</h1>
      {user && (
        <div>
          user: {user.name}
          <br />
          email: {user.email}
          <br />
          password: {user.password}
        </div>
      )}
      <input
        className=" bg-slate-300 p-1 text-black border-slate-900 mb-3"
        type="text"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className=" bg-slate-300 p-1 text-black border-slate-900 mb-3"
        type="email"
        value={email}
        placeholder="email"
        onChange={handleEmailChange}
      />
      <input
        className=" bg-slate-300 p-1 text-black border-slate-900 mb-3"
        type="password"
        value={password}
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Index;
