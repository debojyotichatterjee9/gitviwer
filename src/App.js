import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';

import './App.css';
import View from "./View.js";
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard'




firebase.initializeApp({
  apiKey: "AIzaSyC2pq8pKov9QQUmWuQ6yKf3sSumJES_bHo",
    authDomain: "gitviewer-df26d.firebaseapp.com"
})

class App extends Component {
  
state ={
  isSignedIn: false,
  user: {}
}


componentDidMount = () =>{
  
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSignedIn: !!user })
    console.log("user", user);
  })
}

getUser = () =>{
  const name = this.refs.name.value;
  //alert(name);
  fetch(`http://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
      user: {
        avatar: data.avatar_url,
        id: data.id,
        name: data.name,
        location: data.location,
        company: data.company,
        email: data.email,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
        hireable: data.hireable,
        bio: data.bio,
        url: data.html_url
        
      }
    })
    })
  
    
}

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitHub Viewer</h1>
        </header>
        {this.state.isSignedIn ? (<Dashboard />) : (<Auth />)}
      </div>
    );
    
  }
}

export default App;
