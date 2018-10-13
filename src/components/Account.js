import React from "react";

import AuthUserContext from "./AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in

const AccountPage = () => (
  //authUser is passed down via Context API (It is set at withAuthentication.js file)
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account email: {authUser.email}</h1>
        {/* <h3>Account name: {authUser.displayName} </h3> */}

        {/* disabling password changes/resets if user is logged in through facebook */}
        {authUser.providerData[0].providerId === "facebook.com" ? null : (
          <div>
            <PasswordForgetForm />
            <PasswordChangeForm />
          </div>
        )}
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);
