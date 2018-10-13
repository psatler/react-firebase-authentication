import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

//it resets your password. It doesn’t matter if you are authenticated or not
const PasswordForgetPage = () => (
  <div className="div-flex">
    <div>
      <h1 className="centered">Forget Password</h1>
      <PasswordForgetForm />
    </div>
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//################### PasswordForget Form ###################
const INITIAL_STATE = {
  email: "",
  error: null,
  showingAlert: false
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
        this.timer(); //show alert message for some seconds
      });

    event.preventDefault();
  };

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {
    const { email, error, showingAlert } = this.state;

    const isInvalid = email === "";

    return (
      <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="user@gmail.com"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} type="submit">
              Reset My Password
            </Button>
          </div>
        </Form>
      </div>
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

// <form onSubmit={this.onSubmit}>
//   <input
//     value={this.state.email}
//     onChange={event =>
//       this.setState(byPropKey("email", event.target.value))
//     }
//     type="text"
//     placeholder="Email Address"
//   />
//   <button disabled={isInvalid} type="submit">
//     Reset My Password
//   </button>

//   {error && <p>{error.message}</p>}
// </form>
