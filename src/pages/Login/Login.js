import "./Login.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        username,
        password,
      });

      localStorage.setItem("authToken", response.data.token);
      nav("/home");
    } catch (error) {
      console.error("Failed to add user:", error);
      alert("Failed to login user");
    }
  };

  return (
    <main className="login">
      <h1 className="login__title">Login into your account</h1>
      <form className="login__card">
        <label className="login__label">Username</label>
        <Input
          customClass="login__input"
          name="user_name"
          id="user_name"
          placeholder="Your Username"
          onChange={handleUsername}
        />
        <label className="login__label">Password</label>
        <Input
          customClass="login__input"
          name="user_password"
          id="user_password"
          placeholder="Your Password"
          type="password"
          onChange={handlePassword}
        />
        <div>
          <label className="login__label">Remember</label>
          <input type="radio" id="remember" value="remember"></input>
        </div>
        <div className="login__card-bottom">
          <div className="login__button-container">
            <Button
              style="primary"
              type="submit"
              label="Login"
              customClass="login__button"
              onClick={handleSubmit}
            />
          </div>
          <p className="login__txt">
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
        <p className="login__txt">Forgot Password?</p>
      </form>
    </main>
  );
}

export default Login;
