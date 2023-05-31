import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../graphQL/mutations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const loginUser = () => {
    login({
      variables: {
        newUser: { email, password },
      },
    });
  };

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (data) {
    localStorage.setItem("token", data.token.token);
    navigate("/");
  }

  return (
    <>
      <div className="container">
        {error && <div style={{ color: "red" }}>{error.message}</div>}
        {data && <div>Login Successfully</div>}
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
          <button onClick={loginUser}>Login</button>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
