import React, { useState } from "react";
import './SignUpForm.css';
import { useHistory} from "react-router-dom";
import cartoon from "../images2/signup.png"



function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();
  
  
 

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
        //this redirects to login page after sign up
        history.push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-form border">
    <div className="mx-auto flex justify-center items-center">
        <div className="hidden md:block max-w-lg">
            <img className="w-full" src={cartoon} alt="Sitting" />
        </div>

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
    </div>
    </div>
    
  );
}

export default SignUpForm;

