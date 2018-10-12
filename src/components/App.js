import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
