import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MY_PROFILE } from "../graphQL/queries";

const Profile = () => {
  const { data, loading, error } = useQuery(GET_MY_PROFILE);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    console.log(error);
  }
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
          <h1>
            {data && data.user && data.user.firstName}{" "}
            {data && data.user && data.user.lastName}
          </h1>
          <p>{data && data.user && data.user.email}</p>
        </div>
        {data &&
          data.user &&
          data.user.quotes.map((val) => {
            return (
              <>
                <blockquote style={{ marginTop: "60px" }}>
                  <h6>{val.name}</h6>
                </blockquote>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Profile;
