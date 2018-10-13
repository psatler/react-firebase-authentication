import React from "react";
import { firebase } from "../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
