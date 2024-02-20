import "./Signup.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirm_password = (event) => {
    setConfirm_password(event.target.value);
  };

  const handleFirst_name = (event) => {
    setFirst_name(event.target.value);
  };

  const handleLast_name = (event) => {
    setLast_name(event.target.value);
  };

  const handleCancel = () => {
    nav("/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirm_password) {
      alert("Password and Confirm Password must match");
      return;
    }

    const newUser = {
      username,
      email,
      password,
      first_name,
      last_name,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        newUser
      );

      setUsername("");
      setEmail("");
      setPassword("");
      setFirst_name("");
      setLast_name("");

      localStorage.setItem("authToken", response.data.token);
      nav("/home");
    } catch (error) {
      console.error("Failed to add user:", error);
      alert("Failed to add user");
    }
  };

  return (
    <main className="signup">
      <h1 className="signup__title">Create a new account</h1>
      <form className="signup__card">
        <label className="signup__label">Username</label>
        <Input
          customClass="signup__input"
          name="user_name"
          placeholder="Create Username"
          onChange={handleUsername}
        />
        <label className="signup__label">First Name</label>
        <Input
          customClass="signup__input"
          name="first_name"
          placeholder="Your First Name"
          onChange={handleFirst_name}
        />
        <label className="signup__label">Last Name</label>
        <Input
          customClass="signup__input"
          name="last_name"
          placeholder="Your Last Name"
          onChange={handleLast_name}
        />
        <label className="signup__label">Email</label>
        <Input
          customClass="signup__input"
          name="email"
          placeholder="Your email"
          onChange={handleEmail}
        />
        <label className="signup__label">Create Password</label>
        <Input
          customClass="signup__input"
          name="password"
          placeholder="Create Password"
          onChange={handlePassword}
          type="password"
        />
        <label className="signup__label">Confirm Password</label>
        <Input
          customClass="signup__input"
          name="confirm_password"
          placeholder="Confirm Password"
          onChange={handleConfirm_password}
          type="password"
        />
        <div className="signup__buttons">
          <Button
            type="submit"
            style="primary"
            label="Signup"
            customClass="signup__button"
            onClick={handleSubmit}
          />
          <Button
            type="button"
            style="secondary"
            label="Cancel"
            customClass="signup__button"
            onClick={handleCancel}
          />
        </div>
        <p className="signup__txt">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;
