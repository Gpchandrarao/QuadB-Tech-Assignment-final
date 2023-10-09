import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import "./index.css";

class LoginForm extends Component {
  state = { username: "", password: "", showError: false, errorMessage: "" };

  enterUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  enterPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  success = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 30, path: "/" });
    history.replace("/");
  };

  failure = (errorMessage) => {
    this.setState({ showError: true, errorMessage });
  };

  submitUserDetails = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.success(data.jwt_token);
    } else {
      this.failure(data.error_msg);
    }
  };

  render() {
    const { username, password, errorMessage, showError } = this.state;
    const token = Cookies.get("jwt_token");
    if (token !== undefined) {
      return <Navigate to="/" replace={true} />;
    }

    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="heading">Job Search</h1>
          <div className="input-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              value={username}
              type="text"
              id="username"
              className="input"
              onChange={this.enterUserName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              id="password"
              className="input"
              onChange={this.enterPassword}
            />
          </div>
          {showError && <p className="error">{errorMessage}</p>}
          <button type="submit" className="button" testid="logIn">
            Login
          </button>
          <button type="submit" testid="signIn" className="button">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
