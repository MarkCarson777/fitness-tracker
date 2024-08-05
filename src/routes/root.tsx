import { useState } from "react";

import { firebaseSignUp } from "../firebase/AuthService";

export function Root() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    if (type === "email") setEmail(value);
    if (type === "password") setPassword(value);
  };

  return (
    <>
      <h1 className="border-2">Fitness Tracker</h1>
      <form className="flex flex-col">
        <input type="email" value={email} onChange={(v) => onChange(v)} />
        <input type="password" value={password} onChange={(v) => onChange(v)} />
        <button
          type="submit"
          className="w-fit"
          onClick={(e) => {
            e.preventDefault();
            firebaseSignUp({ email, password });
          }}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
