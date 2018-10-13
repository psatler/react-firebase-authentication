import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";

import { firebase } from "../firebase";
import * as routes from "../constants/routes";

//nav stuff
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";

import withAuthentication from "./withAuthentication";

const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation />

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
    </Container>
  </BrowserRouter>
);

// class App extends Component {
//   //holds info about if an user is signed in or not
//   state = {
//     authUser: null
//   };

//   componentDidMount() {
//     //a listener for the authenticated user
//     //if the user signs out, the authUser becomes null
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//         ? this.setState({ authUser })
//         : this.setState({ authUser: null });
//     });
//   }

//   render() {
//     return (
//       // <div className="App">
//       <BrowserRouter>
//         <div>
//           <Navigation authUser={this.state.authUser} />

//           <hr />

//           <Route exact path={routes.LANDING} component={LandingPage} />
//           <Route exact path={routes.SIGN_UP} component={SignUpPage} />
//           <Route exact path={routes.SIGN_IN} component={SignInPage} />
//           <Route
//             exact
//             path={routes.PASSWORD_FORGET}
//             component={PasswordForgetPage}
//           />
//           <Route exact path={routes.HOME} component={HomePage} />
//           <Route exact path={routes.ACCOUNT} component={AccountPage} />
//         </div>
//       </BrowserRouter>
//       // </div>
//     );
//   }
// }

// export default App;
export default withAuthentication(App); //using HoC to handle session
