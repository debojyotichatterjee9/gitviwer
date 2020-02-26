import React, { Component } from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";

firebase.initializeApp({
  apiKey: "AIzaSyC2pq8pKov9QQUmWuQ6yKf3sSumJES_bHo",
  authDomain: "gitviewer-df26d.firebaseapp.com"
});

class App extends Component {
  state = {
    isSignedIn: false
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitHub Viewer</h1>
        </header>
        {this.state.isSignedIn ? <Dashboard /> : <Auth />}
      </div>
    );
  }
}

export default App;
