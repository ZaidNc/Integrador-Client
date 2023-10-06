import React, { useState } from "react";
import { validateForm } from "./validation";
import styles from "./Form.module.css";

const Form = (props) => {
  const { login } = props;
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "zai@gmail.com",
    password: "Casa5302.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    const fieldErrors = validateForm({ ...userData, [name]: value });
    setErrors({ ...errors, ...fieldErrors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(userData);
    if (Object.keys(formErrors).length === 0) {
      login(userData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className={styles["page-container"]}>
    <div className={styles["form-container"]}>
      <div className={styles["greeting-container"]}>
        <p className={styles["greeting-text"]}>¡Hola otra vez! 👾</p>
      </div>
      <p className={styles["sub-greeting-text"]}>Continuá tu experiencia en Playing Morty</p>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-container"]}>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles["error-message"]}>{errors.email}</p>}
        </div>
        <div className={styles["input-container"]}>
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles["error-message"]}>{errors.password}</p>}
        </div>
        <button className={styles["submit-button"]} type="submit">
          Submit
        </button>
      </form>
    </div>
   </div> 
  );
};

export default Form;