import React from "react";

const Profile = () => {
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
          <h1>Hamza Siddique</h1>
          <p>hamzambf@gmail.com</p>
        </div>
        <blockquote style={{marginTop:'60px'}} >
            <h6>this is qoute</h6>
            <p>--hamza</p>
        </blockquote>
      </div>
    </>
  );
};

export default Profile;
