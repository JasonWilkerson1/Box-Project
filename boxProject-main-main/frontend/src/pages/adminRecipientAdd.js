import React, { useState } from "react";
import axios from "axios";

const Field = ({ label, value, onChange }) => {
  return (
    <div className="field" style={{ width: "400px", display: "flex", paddingBottom: "8px"}}>
      <label style={{ marginRight: "16px"}}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        style={{ fontSize: "20px", marginLeft: "auto"}}
      />
    </div>
  );
};

const Sponsor = () => {
  const [sponsorLastname, setSponsorLastname] = useState("");
  const [sponsorAddress, setSponsorAddress] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [generatedCode, setGeneratedCode] = useState("");

  const handleAddAdmin = (e) => {
    e.preventDefault();
    axios
      .post(`https://ryanhuard.pythonanywhere.com/api/create-admin`, {
        email: adminEmail,
        password: adminPassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    setAdminEmail("");
    setAdminPassword("");
  };

  const handleGenerateCode = (e) => {
    e.preventDefault();
    axios
      .post(`https://ryanhuard.pythonanywhere.com/api/generate-key`)
      .then((response) => {
        console.log(response);
        setGeneratedCode(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="content-body">
      <h1>Create Admin and Generate Recipient Code</h1>
      <form>
        <fieldset >
          <legend style={{ fontWeight: "600", fontSize: "24px"}}>Create Admin</legend>
          <Field
            label="Email Address"
            value={adminEmail}
            onChange={setAdminEmail}
          />
          <Field
            label="Password"
            value={adminPassword}
            onChange={setAdminPassword}
          />
          <button onClick={handleAddAdmin} style={{ padding: "0 8px"}}>Add Admin</button>
        </fieldset>

        <fieldset style={{ marginTop: "16px"}}>
          <legend style={{ fontWeight: "600", fontSize: "24px"}}>Recipient</legend>
          <button onClick={handleGenerateCode} style={{ padding: "0 8px"}}>Generate Recipient Code</button>
          {generatedCode && (
            <div style={{ marginTop: "16px"}}>
              <span>Generated Code: </span>
              <code>{generatedCode}</code>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Sponsor;
