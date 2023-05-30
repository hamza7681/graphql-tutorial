import React, { useState } from "react";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const addQuote = () => {};
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
            <h1>Add Quote</h1>
          <input
            placeholder="Enter quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
          <button onClick={addQuote}>Add</button>
        </div>
      </div>
    </>
  );
};

export default CreateQuote;
