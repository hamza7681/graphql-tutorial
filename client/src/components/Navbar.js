import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
          backgroundColor: "purple",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <h1 onClick={() => navigate("/")} style={{ color: "white" }}>
          GraphQL Tutorial
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          {!token ? (
            <>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/add"
              >
                Create
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/profile"
              >
                Profile
              </Link>
              <button onClick={() => localStorage.removeItem("token")}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
