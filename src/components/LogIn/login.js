import React from "react";
import { navigate, Link } from "gatsby";
import { handleLogin, isLoggedIn, logout } from "../../services/auth";
import "../../styles/log-in.css";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {

    return (
      <>
        {isLoggedIn() ? (
          <div className="logged-main">
          <p className="logged-message">Hello! You're currently logged in as <b>Rea</b>.</p>
          <input
          type="submit"
          value="Log Out"
          className="main-input-button"
          onClick={event => {
                event.preventDefault();
                logout(() => navigate(`/log-in`));
              }}
        />
        </div>
        ) : (
          <>
            <form
              className="main-input"
              method="post"
              onSubmit={event => {
                this.handleSubmit(event);
                navigate(`/log-in`);
              }}
            >
              <p className="main-register-p message">Please enter your log in data:</p>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleUpdate}
                className="main-input-username main-input-login"
              />
              <input
                name="password"
                placeholder="Password"
                onChange={this.handleUpdate}
                type="password"
                className="main-input-password main-input-login"
              />
              <input
                type="submit"
                value="Log In"
                className="main-input-button"
              />
            </form>
            <div className="main-register">
              <p className="main-register-p">Don't have an acconut?</p>
              <Link to="register">Register</Link>
            </div>{" "}
          </>
        ) }
       </> 
    );
  }
}

export default Login;

