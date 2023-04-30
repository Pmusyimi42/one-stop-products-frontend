import React, { useState } from "react";
import './SignUpForm.css';
// import { Link } from "react-router-dom";



function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
    };

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
   
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <label htmlFor="password_confirmation">Confirm Password</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
        required
      />

      <button type="submit">Sign Up</button>
    </form>
    
  );
}

export default SignUpForm;

