import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Login</h1>
          <input
            placeholder="Email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
