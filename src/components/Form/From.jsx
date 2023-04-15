import styles from './Form.module.css'
import React from "react";
import validateInputs from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserData({ ...userData, [name]: value });
    setErrors(validateInputs(userData));

    console.log(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p>

        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{errors.password}</p>

        <button>LOGIN</button>
      </form>
    </div>
  );
}
