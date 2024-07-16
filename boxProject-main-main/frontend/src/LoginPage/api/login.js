import axios from "axios";

export const login = (email, password) => {
  axios
    .post(`https://ryanhuard.pythonanywhere.com/api/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        // Successful login
        alert("Login successful");
        sessionStorage.setItem("isAdmin", true);
      } else {
        alert("Error. Please try again.");
        console.error("Unexpected status code:", response.status);
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          // Unauthorized
          alert("Authentication failed. Please check your credentials.");
        }
      }
    });
};
