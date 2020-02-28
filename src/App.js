import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from './components/Header/Header'

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
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isSignedIn ? <Dashboard /> : <Auth />}
      </div>
    );
  }
}

export default App;
