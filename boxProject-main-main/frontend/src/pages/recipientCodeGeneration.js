import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecipientCodes = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://ryanhuard.pythonanywhere.com/api/validate-code/${code}`)
      .then((response) => {
        sessionStorage.setItem("code", code)
        navigate("/fill-information");
      })
      .catch((error) => {
        alert("Invalid code. Please try again.");
      });
  };

  return (
    <div className="content-body">
      <h1>Enter Your Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code"
          style={{ marginRight: "16px" }}
        />
        <button type="submit" style={{ padding: "0 8px" }}>
          Submit
        </button>
      </form>
      <div style={{ textAlign: "left"}}>
        <p style={{ fontWeight: "bold"}}>How to sign up to become a recipient:</p>
        <p>1: First, email or call the boxproject.</p>
        <p>2: Enter the code given to you by the Box Project.</p>
        <p>3: Fill out the information. </p>
        <p>4: Enjoy the boxes!!</p>
      </div>
    </div>
  );
};

export default RecipientCodes;
