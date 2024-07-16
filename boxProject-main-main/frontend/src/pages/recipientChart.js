// Importing the React library to be able to use React components, JSX, and other features.
import React, { useEffect, useState } from "react";
import axios from "axios";
// Importing the CSS stylesheet for styling the Agency component.
import "./Agency.css";

// This is mock data, simulating the data you might eventually fetch from a database.
// It's an array of objects where each object represents a pairing of a sponsor and a recipient,
// with their email addresses and last names.
const mockPairings = [
  {
    recipientCode: "example",
    recipientEmail: "recipient1@example.com",
    recipientFirstName: "Smith",
    recipientLastName: "Johnson",
    recipientAddress: "example",
  },
  {
    recipientCode: "example",
    recipientEmail: "recipient2@example.com",
    recipientFirstName: "William",
    recipientLastName: "Brown",
    recipientAddress: "example",
  },
  // More mock pairings can be added here as needed.
];

// This is a functional React component named Agency.
// It's a stateless component that renders a list of paired sponsors and recipients.
const Agency = () => {
  const [recipients, setRecipients] = useState([]);

  const getRecipients = () => {
    axios
      .get(`https://ryanhuard.pythonanywhere.com/api/recipients`)
      .then((response) => {
        console.log(response.data)
        setRecipients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    getRecipients();
  }, [])


  return (
    <div className="content-body">
      <h1>List Recipient</h1> {/* The title of the component */}
      <p>
        {/* Placeholder for text. This is where additional content or description can be added. */}
      </p>
      {/* This table displays the pairing information. */}
      <table className="pairings-table">
        {/* Table header defining the columns of the table */}
        <thead>
          <tr>
            <th>Code</th>
            <th>Email Adress</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Home Address</th>
          </tr>
        </thead>
        {/* Table body, where each row represents a sponsor-recipient pair */}
        <tbody>
          {/* This block iterates over the mockPairings array and creates a table row for each pair. */}
          {recipients.map((pair, index) => (
            // Each row is given a unique key prop, which is a requirement in React when rendering lists.
            <tr key={index}>
              <td>{pair[1]}</td>
              <td>{pair[2]}</td> 
              <td>{pair[3]}</td>
              <td>{pair[4]}</td> 
              <td>{pair[5]}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// This line exports the Agency component, making it available for import in other files.
export default Agency;
