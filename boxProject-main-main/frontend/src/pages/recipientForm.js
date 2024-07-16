import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecipientForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    physicalAddress: "",
    firstName: "",
    lastName: "",
    code: sessionStorage.getItem("code")
  });
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)
    if (!formValid) {
      alert("Please fill in all fields.");
      return;
    }

    // Here you would typically send the formData to your server...
    axios
      .post(`https://ryanhuard.pythonanywhere.com/api/application-form`, formData)
      .then((response) => {

      })
      .catch((error) => {
        console.error(error);
      });

    alert("Form submitted!");
  };

  // Check form validity
  React.useEffect(() => {
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setFormValid(isFormValid);
  }, [formData]);

  return (
    <div className="content-body">
      <h1>Recipient Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Physical Address:</label>
          <input
            type="text"
            name="physicalAddress"
            value={formData.physicalAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" style={{ padding: "0 8px"}} disabled={!formValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipientForm;
