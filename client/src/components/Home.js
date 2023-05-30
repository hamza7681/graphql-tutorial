import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../graphQL/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
  }
  return (
    <>
      <div className="container">
        {data.quotes.map((val) => {
          return (
            <>
              <blockquote key={val._id} style={{ marginTop: "60px" }}>
                <h6>{val.name}</h6>
                <p>{val.by.firstName}</p>
              </blockquote>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
