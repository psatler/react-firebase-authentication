import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//################### PasswordForget Form ###################
const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

//################### PasswordForget Link ###################
const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
