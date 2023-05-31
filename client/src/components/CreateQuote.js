import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../graphQL/mutations";
import { useNavigate } from "react-router-dom";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [addQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: ["getAllQuotes", "getProfile"],
  });
  const navigate = useNavigate();
  const add = () => {
    addQuote({
      variables: {
        data: quote,
      },
    });
  };
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (data) {
    navigate("/");
  }

  return (
    <>
      <div className="container">
        {error && <div style={{ color: "red" }}>{error.message}</div>}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Add Quote</h1>
          <input
            placeholder="Enter quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
          <button onClick={add}>Add</button>
        </div>
      </div>
    </>
  );
};

export default CreateQuote;
