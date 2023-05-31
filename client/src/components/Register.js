import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER_USER } from "../graphQL/mutations";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, { data, loading, error }] = useMutation(REGISTER_USER);

  const registerUser = () => {
    register({
      variables: {
        newUser: { firstName, lastName, email, password },
      },
    });
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="container">
        {error && <div style={{ color: "red" }}>{error.message}</div>}
        {data && data.user && (
          <div>{data.user.firstName} is registered. Now you can login</div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Register</h1>
          <input
            placeholder="First Name here"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name here"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <button onClick={registerUser}>Register</button>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
